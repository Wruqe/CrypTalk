const db = require('../config/connection');
const { User, Thought } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Thought', 'thought');
  await cleanDB('User', 'user');

  const thoughts = await Thought.insertMany([
    { thoughtText: 'Food', username: "Pamela02" },
    { thoughtText: 'Household Supplies', username: "Pamela02" },
    { thoughtText: 'Electronics', username: "Pamela02" },
    { thoughtText: 'Books', username: "Mela02" },
    { thoughtText: 'Toys', username: "Mela02" }
  ]);

  console.log('thoughts seeded');


  await User.create({
    username: 'Pamela02',
    email: 'pamela@testmail.com',
    password: 'password12345',
    thoughts: [
      
         thoughts[0]._id, thoughts[1]._id, thoughts[2]._id
    ]
  });

  await User.create({
    username: 'Mela02',
    email: 'eholt@testmail.com',
    password: 'password12345',
    thoughts: [
       thoughts[3]._id, thoughts[4]._id
 ]
  });

  console.log('users seeded');

  process.exit();
});