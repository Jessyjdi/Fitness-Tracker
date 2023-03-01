const { Trainer } = require("../models");

const postData = [
  {
    specialty: "Fitness Nutrition (most popular), Functional Training, Weight Management, Senior Fitness, Behavior Change, Youth Fitness, Sports Performance, Orthopedic Exercise, Pain-Free Movement, Functional Aging, Cancer Exercise, Functional Aging Group Exercise, Corrective Exercise",
    certification: "ACE",
    user_id: 2,
  },
  {
    specialty: "Strength and Conditioning, Special Population",
    certification: "NSCA",
    user_id: 1,
  },
  {
    specialty: "Exercise is Medicine, Inclusive Fitness Trainer, Cancer Exercise Trainer, NPAS (National Physical Activity Society) Physical Activity in Public Health",
    certification: "ACSM",
    user_id: 3,
  },
  {
    specialty: "Corrective Exercise, Performance Enhancement, Behavior Change, Nutrition Group PT, Weight Loss, Women's, Youth, Seniors, Golf, MMA Conditioning",
    certification: "NASM",
    user_id: 3,
  },
  {
    specialty: "Group Exercise, Bodybuilding, Strength & Conditioning, Corrective Exercise, DNA-Based Fitness, Lifespan Coach (Youth-Senior), Exercise Therapy, Online Coach, Performance Enhancement, Yoga, Kickboxing, Powerlifting, Weight Management, Youth, Senior",
    certification: "ISSA",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;