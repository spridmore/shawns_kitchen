var model = require('../models/')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var db = require('../models/index')
// model.review.findAll().then(function(reviews){
// 	console.log(reviews)
// });

// var login = function(req, res) {
// 	db.user.findAll({
// 	// where: {
// 	// 	email: "shawnsEmail@yahoo.com"
// 	// },
// 	include: {
// 		model : db.review,
// 	},
// }).then(function(users) {
// 	const resObj = users.map(user => {
// 	  return Object.assign(
// 		{},
// 		{
// 		  user_id: user.id,
// 		  first_name: user.first_name,
// 		  //user_review: user.reviews[1].dataValues,
// 		  reviews:user.reviews.map(review => { 
// 			 return Object.assign(
// 				  {},
// 				  {
// 					review_id: review.id,
// 					review_title: review.title,
// 					review_description: review.description
// 				  }
// 			  )
// 		  })
// 		  })
// 		}		
// 	  )
// 	  res.json(resObj)
// 	  console.log(resObj)
//   });
// }
function login(req, res) {
	// 1. Validate email and password
	var email = req.body.email
	var password = req.body.password

	if (!email || !password) {
		res.status(400).json({ error: "Email and password must be set" })
	}
	else {
		// 2. Verify that user exists
		model.user.findAll({
			where: {
				email: email
			},
		})
			.then(function (userArr) {
				// 3. Should return with a valid user
				if (!userArr.length > 0) {
					res.status(404).json({ error: "This user does not exist" })
				}
				else {
					// 3. Compare password
					var user = userArr[0].dataValues
					model.user.findAll({
						include: {
							model: model.review,
						},
					}).then(function (users) {
						const resObj = users.map(user => {
							//clean up the user data
							return Object.assign(
								{},
								{
									user_id: user.id,
									first_name: user.first_name,
									reviews: user.reviews.map(review => {
										return Object.assign(
											{},
											{
												review_title: review.title,
												review_description: review.description
											});
									})
								}
							)
							console.log(resObj)
							//res.json(resObj)
						});
						bcrypt.compare(password, user.password, function (error, result) {
							if (error) {
								res.status(401).json({ error: error })
								console.log("this error")
							}

							if (!result) {
								res.status(401).json({ error: "Invalid password" })
								console.log("that error")
							}
							else {
								// 4. Return a token
								var token = jwt.sign({ id: user.id, isAdmin: user.is_admin, iat: Date.now() }, process.env.JWT_SECRET);
								user.token = token
								res.json(user)
							};
						});
					});
				};
			})
			.catch(function (error) {
				res.status(100).json({ error: error });
			});
	}
}

function register(req, res) {
	if (!req.body.email || !req.body.password) {
		res.json({ error: "Email and password must be set" })
	}

	// 2. Verify user has not already registered
	model.user.findAll({
		where: {
			email: req.body.email
		}
	})
		.then(function (user) {
			// 3. Should return null
			if (user.length > 0) {
				res.json({ error: "A user account with this email already exists" })
			}
			else {
				bcrypt.genSalt(10, function (error, salt) {
					if (error) {
						res.json({ error: error })
					};

					bcrypt.hash(req.body.password, salt, function (error, hash) {
						if (error) {
							res.json({ error: error })
						}

						req.body.password = hash;
						req.body.is_admin = true;
						console.log("Req Body: ", req.body);

						// 4. Creating the new user
						model.user.create(req.body)
							.then(function (user) {
								console.log("inside create")
								var token = jwt.sign({ id: user.id, isAdmin: user.is_admin, iat: Date.now() }, "shawns secret");
								res.json({ error: error })
								console.log("Register Token: ", token);

								user.dataValues.token = token;
								console.log("User before sent back: ", user);
								res.status(200).json(user)
							})
							.catch(function (error) {
								console.log("inside create error")
								res.status(500).json({ error: error });
							});
					})
				})
			}

		})
		.catch(function (error) {
			res.status(500).json({ error: error });
		});
}

function verify(req, res, next) {
	var token = req.header('Authorization')
	jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
		if (error) {
			res.json({ error: error })
		}
		else {
			req.token = decoded
			next()
		}
	});
}

function verifyAdmin(req, res, next) {
	var token = req.header('Authorization')
	jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
		if (error) {
			res.json({ error: error })
		}
		else if (!decoded.isAdmin) {
			res.json({ error: "Not an admin" })
		}
		else {
			req.token = decoded
			next()
		}
	});
}

module.exports = {
	login: login,
	register: register,
	verify: verify,
	verifyAdmin: verifyAdmin
}
