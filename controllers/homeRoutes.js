const router = require('express').Router();
const withAuth = require('../utils/authorize.js');
const { User, Comment, Post, Post } = require('../models');
const sequelize = require('../config/connection.js');
const { beforeFindAfterExpandIncludeAll } = require('../models/user.js');
const { restart } = require('nodemon');
// renders homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders signup page
router.get('/signup', async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders login page
router.get('/login', async (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
})

// renders post find all
router.get('/', (req, res) => {
    console.log(req.session);

    post.findAll({
        attributes: [
            'id',
            'created_at',
            'title',
            'post_text',
        ],
        include: [{
            model: Comment,
            attributes:[
                'id',
                'created_at',
                'title',
                'post_text',
                'comment_text'
            ],
            include: {
                model:user,
                attributes: ['username']
            }
        }]
    })
    .then (dbPostData => {
      const post = dbPostData.map (post => post.get({plain: true}));
      res.render('homepage',{
        post,
        loggedIn: req.session.loggedIn
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(err);
      })
    })
  });
// end renders post

// renders post find one
router.get('/post/:id', (req, res) => {
  post.findbyPk ({
    where: {id: req.params.id},
    attributes: ['id','created_at','title','post_text','comment_text'],
    include:[{model: User,
    attributes: ['username']
    },
    {
    model: Comment,
    attributes: ['id','created_at','title','post_text','comment_text'],
    include:[{model: User,
    attributes: ['username']}
    ],
    }
    .then (dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No product found with that id!' });
        return;
      }
    const Post = dbPostData.get({ plain: true });
    res.render('singlePost', {Post, loggedIn: req.session.loggedIn});
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error)
    })
  ]
});
});


module.exports = router;