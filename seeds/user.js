const { User } = require('../models');

const userData = [
  {
    name: 'Vegeta',
    password: 'Password123',
  },
  {
    name: 'Goku',
    password: 'abc123',
  },
  {
    name: 'Krelin',
    password: 'Welcome123',
  },
];

const seedUserData= () => User.bulkCreate(userData);

module.exports = seedUserData;
