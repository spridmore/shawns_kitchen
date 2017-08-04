var reviews = [];
var userId = 0;

var user = function (id, firstName, lastName, email) {
    //would I get the id fro Oauth?
    // this.id = id; 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    // password?
    // address 1 
    // address2
    // city
    // state
    // zip
}
// billing address?
//  shipping address?



//GET
function index(req, res, next) {
    res.json({ users: users });
}
//POST
function create(req, res, next) {
    var tempUser = new user(userId++, req.body.name, req.body.age,
        req.body.occupation);
    users.push(tempUser);
    res.json({ user: tempUser });
}
//GET
function show(req, res, next) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
            res.json({ user: users[i] })
        }
    }
    res.json({ error: "Sorry that user does not exist." })
}
//PUT
function update(req, res, next) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
            users.splice(i, 1, new user(parseInt(req.params.id);
            res.json({ user: users[i] });
        }
    }
}
//DELETE
function destroy(req, res, next) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == req.params.id) {
            users.splice(i, 1);
            res.json({ user: users });
        }
    }
    res.json({ error: "Sorry that user didn't exist." });
}

module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
}