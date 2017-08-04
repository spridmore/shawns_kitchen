var siteSearchHistory = [];
var siteHistoryId = 0;

var siteHistory = function (id, name, url, userId) {
    this.id = id; 
    this.name = name;
    this.url = url;
    this.userId = userId;
}

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