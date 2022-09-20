const { Comment } = require ('../models')

const commentData = [
    {
        comment: 'Fantastic Job',
        user_id: 4,
        post_id: 5,
    },
    {
        comment: 'You are Legend',
        user_id: 1,
        post_id: 3,
    }, 
    {
        comment: 'This is very easy job.',
        user_id: 3,
        post_id: 6,
    },
    {
        comment: 'Thank you for helping our community!',
        user_id: 5,
        post_id: 4,
    },
    {
        comment: 'Sending more stars/like.',
        user_id: 3,
        post_id: 2,
    },
    {
        comment: 'Keep up the good work!',
        user_id: 2,
        post_id: 5,
    }, 
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;

