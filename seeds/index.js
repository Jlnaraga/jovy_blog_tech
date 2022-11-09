const seedPost = require('./post-seed');
const seedComment = require('./comment-seed');
const seedUser = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- LISTING SEEDED -----\n');

  await seedPost();
  console.log('\n----- USER SEEDED -----\n');

  await seedComment();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
