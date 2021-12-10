const database = require ('../infra/database');

exports.getPosts = function () {
    return database.query("select * from blog.post");
};

exports.savePost = function (post){
    return database.one('INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', [post.title, post.content])
}