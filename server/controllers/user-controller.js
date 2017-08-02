var User = require('../models/').User;

//Get a list of all users using model.findAll()
function index(req, res) {
  console.log('index-users path');
  User.findAll()
    .then(function (users) {
      console.log(users);
      res.status(200).json(users);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json(error);
    });
}

//Get an user by the unique ID using model.findById()
function show(req, res) {
  User.findById(req.params.id)
  .then(function (user) {
    res.status(200).json(user);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
}

//Edit an existing user details using model.update()
function update(req, res) {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function (updatedRecords) {
    res.status(200).json(updatedRecords);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
}

//Delete an existing user by the unique ID using model.destroy()
function destroy(req, res) {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (deletedRecords) {
    res.status(200).json(deletedRecords);
  })
  .catch(function (error){
    res.status(500).json(error);
  });
}

module.exports = {
  index: index,
  show: show,
  update: update,
  destroy: destroy
}
