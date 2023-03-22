const db = require('../config/connection');
const { Artist } = require('../models');

const artistData = require("./artistData.json")

db.once('open', async () => {
  // clean database
  await Artist.deleteMany({});

  // bulk create each model
  const artists = await Artist.insertMany(artistData);

  console.log('all done!');

  process.exit(0);
})