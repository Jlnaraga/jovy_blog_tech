const { where } = require('sequelize');
const router = require("express").Router();

const {
    Comment,
    Post,
    User
} = require('../../models');

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

const getMyPosts = async (userId) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: userId
            },
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

const getPostById = async (id) => {
    try {
        const post = await Post.findOne({
            where: {
                id: id
            },
            include: [
                {
                    model: User
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User
                        }
                    ]
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return post;

    } catch (err) {
        throw err;
    }
} 

router.post("/create", async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.loggedInUserData.id
        });

        return res.status(200).json(post);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const comment = await Post.update({
            title: req.body.title,
            content: req.body.content,
        }, {
            where: {
                id: req.params.id,
                user_id: req.session.loggedInUserData.id
            }
        });

        return res.status(200).json(comment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.status(404).json("Deleted");

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
} );

router.get("/create", async (req, res) => {
    try {
        res.render('post-create', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Create New Post',
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {

        const post = await getPostById(req.params.id);
        
        res.render('post', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Post',
            post: post.get({ plain: true })
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/update/:id", async (req, res) => {
    try {
        const post = await getPostById(req.params.id);
        console.log(post.get({ plain: true }))
        res.render('post-edit', {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            pageTitle: 'Edit Post',
            post: post.get({ plain: true })
        });

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.post("/comment", async (req, res) => {
    try {
        const comment = await Comment.create({
            post_id: req.body.postId,
            comment: req.body.comment,
            user_id: req.session.loggedInUserData.id
        });

        return res.status(200).json(comment);

    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})


module.exports = router;
