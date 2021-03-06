// visit node.postgres.com for more info
const pg = require('pg')
const parse = require('pg-connection-string').parse;

// development DB code
// not just creating a connection to db, its also creating a pool we can take data out of
// const db = new pg.Pool({
//   database: 'dogwatch',
//   password: process.env.DB_PASSWORD
// })

// Production DB code
let db;
if (process.env.NODE_ENV === 'production') {
  const config = parse(process.env.DATABASE_URL)
  db = new pg.Pool({ ...config, ssl: { rejectUnauthorized: false } });

} else {
  db = new pg.Pool({
    database: 'dogwatch',
    password: 'optional_password'
  })
}

module.exports = db