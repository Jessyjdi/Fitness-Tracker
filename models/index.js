const User = require("./User");
const Post = require("./Post");
const Trainer = require("./Trainer")
const Comment = require("./Comment")

 User.hasMany(Post, {
    foreignKey: "user_id",
 });

User.hasOne(Trainer, {
    foreignKey: "user_id",
});

Post.belongsTo(User, {
    foreignKey: "user_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
});

Trainer.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

module.exports = {
    User,
    Post,
    Trainer,
    Comment,
}