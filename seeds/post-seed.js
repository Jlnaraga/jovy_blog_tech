const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data,the View layer for design, and the Controller layer for application logic.',
    user_id: 1,
  },
  {
    title: 'Authentication vs. Authorization',
    text: 'There is a difference between authentication and authorization. Authentication means confirming your own identity,whereas authorization means being allowed access to the system. ',
    user_id: 3,
  },
  {
    title: 'Object Relational Mapping',
    text: 'I have really loved learning about ORMs. It really simplified the way I create queries in SQL!',
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
