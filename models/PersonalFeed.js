var db = require('../dbconnection');

var PersonalFeed = {
    getAllPersonalFeeds: function(callback) {
        return db.query("Select * from personal_feed", callback);
    },
    getPersonalFeedByUserId: function(userId, callback) {
        return db.query("select * from personal_feed where id_user = ?", [userId], callback);
    },
    addPersonalFeed: function(PersonalFeed, callback) {
        console.log(PersonalFeed);
        return db.query("Insert into personal_feed (id_user, title, link, author, description, image) values (?, ?, ?, ?, ?, ?)", [
                PersonalFeed.id_user,
                PersonalFeed.title,
                PersonalFeed.link,
                PersonalFeed.author,
                PersonalFeed.description,
                PersonalFeed.image
            ],
            callback);
    },
    deletePersonalFeed: function(PersonalFeed, callback) {
        return db.query("delete from personal_feed where id_feed = ?", [PersonalFeed.id_feed], callback);
    },
    deleteAllPersonalFeed: function(PersonalFeed, callback) {
        return db.query("delete from personal_feed where id_user = ?", [PersonalFeed.id_user], callback);
    },
    updatePersonalFeed: function(PersonalFeed, callback) {
        return db.query("update personal_feed set " +
            " title = ?, link = ?, " +
            " author = ?, description = ?, image = ? " +
            " where id_feed = ? and id_user = ? ", [
                PersonalFeed.title,
                PersonalFeed.link,
                PersonalFeed.author,
                PersonalFeed.description,
                PersonalFeed.image,
                PersonalFeed.id_feed,
                PersonalFeed.id_user
            ],
            callback);
    },
};
module.exports = PersonalFeed;