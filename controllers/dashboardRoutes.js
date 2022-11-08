const router = require("express").Router();
const { where } = require('sequelize');
const {
    Comment,
    Post,
    User
} = require('../../models');

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

router.get("/", async (req, res) => {
    try {
        console.log(req.session.loggedInUserData)
        let posts = [];
        if(req.session.loggedInUserData)
            posts = await getMyPosts(req.session.loggedInUserData.id);
        
        res.render("dashboard", {
            pageTitle: 'My Dashboard',
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            posts
        });

    } catch (err) {
        console.log(err.message)
        res.status(500).json(err);
    }
});

module.exports = router;