var db = require('../dbconnection');

var User = {
    getUsers: function(callback) {
        return db.query("Select * from user", callback);
    },
    getUserById: function(user_id, callback) {
        return db.query("Select * from user where id_user = " + user_id, callback);
    },
    addUser: function(User, callback) {
        console.log(User);
        return db.query("Insert into user (name) values (?)", [
                User.name
            ],
            callback);
    },
    deleteUser: function(User, callback) {
        return db.query("delete from user where id_user = ?", [User.id_user], callback);
    },
    updateUser: function(User, callback) {
        return db.query("update user set name = ? where id_user = ? ", [User.name, User.id_user], callback);
    },
};


module.exports = User;