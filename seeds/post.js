const { Post } = require('../models');

const postData = [
 {
  post: "coding is is the bbbbomb with a B",
  user_id: 1
 }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
