var db = require('../dbconnection');

var User = {
    getUserById: function(user_id, callback) {
        return db.query("Select * from user where id_user = " + user_id, callback);
    },
    addUser: function(User, callback) {
        console.log(User);
        return db.query("Insert into user (name, password) values (?, ?)", [
                User.name,
                User.password
            ],
            callback);
    },
    deleteUser: function(User, callback) {
        return db.query("delete from user where id_user = ?", [User.id], callback);
    },
    updateUser: function(User, callback) {
        return db.query("update user set name = ?, password = ? where id_user = ? ", [User.name, User.password, User.id], callback);
    },
};
module.exports = User;