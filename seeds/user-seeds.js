const { User } = require('../models');

const userData = [
  {
    username: "James",
    email: "JamesSmith@gmail.com",
    password: "1feb1981",
    trainer: true
  },
  {
    username: "Christopher",
    email: "ChristopherAnderson@gmail.com",
    password: "2mar1981",
    trainer: true
  },
  {
    username: "Ronald",
    email: "RonaldClark@gmail.com",
    password: "3apr1981",
    trainer: false
  },
  {
    username: "Lisa",
    email: "LisaMitchell@gmail.com",
    password: "4apr1981",
    trainer: true
  },
  {
    username: "Michelle",
    email: "MichelleJohnson@gmail.com",
    password: "6apr1981",
    trainer: false
  },
  {
    username: "Anthony",
    email: "AnthonyLopez@gmail.com",
    password: "30apr1981",
    trainer: false
  },
  {
    username: "Ronald",
    email: "RonaldClark@gmail.com",
    password: "3apr1981",
    trainer: false
  },
  {
    username: "Mary",
    email: "MaryWright@gmail.com",
    password: "4may1981",
    trainer: false
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;