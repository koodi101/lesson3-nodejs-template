const app = require('./src/app');

const db = require('./src/database');

const port = process.env.PORT || 9000;

// Create missing tables in the database and start the server
// NOTE: db.sync does not update the table schema
db.sync().then(() => {
  app.listen(port);
  console.log('App listening on port ' + port);
});
