const { User } = require('../models');

const userData = [
  {
    username: 'JovyTot',
    email: 'Jovy@email.com',
    password: 'tottot',
    
  },
  {
    username: 'Kirsten10',
    email: 'tenten@email.com',
    password: 'tenten10',
  },
  {
    username: 'wilfredko',
    email: 'Wilkol@email.com',
    password: 'Willyko',
    
  },
  {
    username: 'GiannaKulit',
    email: 'Gianna@email.com',
    password: 'Babyboom',
  },
  {
    username: 'Noanoy',
    email: 'noanoy@email.com',
    password: 'babyKulit',
    
  },
  {
    username: 'Bingaw',
    email: 'Bingaw@email.com',
    password: 'bading',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
