const { Comments } = require('../models');

const commentData = [
  {
    comment_text: "Do your squats, eat pizza, and don't let anyone be mean to you! Eat, sleep, squat, repeat. Drop it like a squat.",
    post_id: 4,
    user_id: 1
  },
  {
    comment_text: "A cardio workout increases blood flow and acts as a filter system. It brings nutrients like oxygen, protein, and iron to the muscles that you've been training and helps them recover faster.",
    post_id: 3,
    user_id: 2
  },
  {
    comment_text: "GO! GO! GO for the Burn!",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Sore today, stronger tomorrow.",
    post_id: 2,
    user_id: 3
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;