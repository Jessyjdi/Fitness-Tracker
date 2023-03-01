const { Post } = require("../models");

const postData = [
  {
    title: "SQUATS",
    body: "45 Squat Variations to Keep You on Your Toes",
    user_id: 1,
  },
  {
    title: "Cardio",
    body: "Cardio refers to cardiovascular exercise and includes various aerobic exercises that are designed to increase overall stamina and endurance. Cardio includes walking, Jogging, Cycling, Swimming, etc.",
    user_id: 2,
  },
  {
    title: "Strength",
    body:
      "Strength training places emphasis on building muscles by repeating motions that are hindered by some form of resistance. Arms, Chest, Shoulders, Biceps ",
    user_id: 3,
  },
  {
    title: "Aerobic",
    body:
      "Aerobic that can make your body sweat profusely, your lungs breathe faster, and cardiovascular system pump the blood faster for a considerable duration.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;