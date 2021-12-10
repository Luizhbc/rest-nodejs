const postsData = require("../data/postsData");
const { func } = require("../infra/database");
const { post } = require("../route/postsRoute");

exports.getPosts = function () {
    return postsData.getPosts();    
};

exports.getPost = function(id){
    return postsData.getPost(id);
}
exports.savePost = function(post){
    return postsData.savePost(post);
};

exports.updatePost = function (id, post){
    return postsData.updatePost(id, post);
}

exports.deletePost = function(id){
    return postsData.deletePost(id);
};
