const sequelize = require('../config/connection');
const seedPost = require('./post');
const seedUser = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();
