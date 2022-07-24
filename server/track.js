const { Client } = require('pg')
const client = new Client({
  user: 'trackme_user',
  host: 'localhost',
  database: 'trackme_db',
  password: 'passtrackUser',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let insertActivity = (activity)=>{
    client.query(`insert into public.activities(name, minutes, description) values($1,$2,$3)`, [activity.name, activity.minutes, activity.desc], (err, res) => {
        console.log(err ? err.stack : res.rows[0]) 
    })
}
insertActivity({name:'act2', minutes:32, desc:'aasdf'})

// client.query('SELECT * from activities', [], (err, res) => {
//     console.log(err ? err.stack : res.rows[0]) 
//     client.end()
//   })