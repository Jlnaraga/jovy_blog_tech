const router = require('express').Router();

const {
  Comment,
  Post,
  User
} = require('../models');

const getAllPosts = async () => {
  try {
      const postData = await Post.findAll({
          include: [
              {
                  model: User
              },
              {
                  model: Comment
              }
          ],
          order: [['createdAt', 'DESC']],
      });

      return postData.map((post) => post.get({ plain: true }));

  } catch (err) {
      throw err;
  }
} 

// renders homepage
router.get('/', async (req, res) => {
  try {
      
      const posts = await getAllPosts();

      res.render('home', {
          loggedIn: req.session.loggedIn,
          loggedInUserData: req.session.loggedInUserData,
          pageTitle: 'Home',
          posts
      });
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router;