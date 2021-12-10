const { func } = require('../infra/database');
const database = require ('../infra/database');
const { post } = require('../route/postsRoute');

exports.getPosts = function () {
    return database.query('SELECT * FROM blog.post');
};

exports.getPost = function(id){
    return database.oneOrNone('SELECT * FROM blog.post WHERE id = $1', [id])
}

exports.savePost = function (post){
    return database.one('INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *', [post.title, post.content]);
}

exports.updatePost = function(id, post){
    return database.none('UPDATE blog.post SET title = $1, content = $2 where id = $3', [post,title, post.content, post.id]);
}

exports.deletePost = function(id){
    return database.none('DELETE FROM blog.post WHERE id = $1',[id]);
}

