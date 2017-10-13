const { User } = require('../models/');

//Get a list of all users using model.findAll()
function index(req, res) {
  User.findAll()
  .then(function (user) {
    console.log(user);
    res.status(200).json(user);
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
    console.log(user);
    res.status(200).json(user);
  })
  .catch(function (error){
    console.log(error);
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
  .then(function (user) {
    console.log(user);
    res.status(200).json(user);
  })
  .catch(function (error){
    console.log(error);
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
  .then(function (user) {
    console.log(user);
    res.status(200).json(user);
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).json(error);
  });
}

module.exports = { index, show, update, destroy }
