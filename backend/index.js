const mysql = require('mysql2');
const express = require('express');
const query = require('express');
const nodemon = require('nodemon');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@adit27nov',
  database: 'aadhar',
});
const accountSid = 'ENTER_ACCOUNT_SID_TWILIO';
const authToken = 'ENTER_AUTH_TOKEN_TWILIO';
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    body: 'Authentication OTP is 1211 . Please enter OTP and then click on this link http://localhost:3000/details/123',
    from: 'FROM',
    to: 'TO',
  })
  .then((message) => console.log(message.sid));

app.get('/', (req, res) => {
  res.json('Backend check');
});
app.get('/details/:aadharNumber', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const q = 'SELECT * FROM details WHERE aadharNumber=?';

  db.query(q, aadharNumber, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// @notice -> so here we want to keep and option for updates so suppose a user wants to edit just the address part so he should be able change only that part -> if else if work?
// Address update check
app.put('/details/:aadharNumber/add', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const q = 'UPDATE details SET `Address`=? WHERE aadharNumber=?';
  const value = [req.body.Address];
  db.query(q, [...value, aadharNumber], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Relative Name update check
app.put('/details/:aadharNumber/relativeUpdate', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const q =
    'UPDATE details SET `relativeFirstName`= ? ,`relativeSurname`= ?,`realtiveNumber`= ? ,`typeofRelation` = ? WHERE aadharNumber= ?';
  const value = [
    req.body.relativeFirstName,
    req.body.relativeSurname,
    req.body.realtiveNumber,
    req.body.typeofRelation,
  ];
  db.query(q, [...value, aadharNumber], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Query 1 @condition-> below 18 for address
app.get('/query1/:UID', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const age = req.params.AGE;
  const q =
    'SELECT epic.Address FROM epic  JOIN details ON epic.epicNumber = details.realtiveEPICNum WHERE details.AGE < 18';

  db.query(q, aadharNumber, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Query 2 @condition-> fetch address form passport AGE>18
app.get('/query2/:UID', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const age = req.params.AGE;
  const q =
    'SELECT passport.Address FROM passport  JOIN details ON passport.UID = details.UID WHERE details.UID=12';

  db.query(q, aadharNumber, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// Query @condition-> aadhar is not linked with mobile so get data from bc & address from govt verified docs
app.get('/query3/:UID', (req, res) => {
  const aadharNumber = req.params.aadharNumber;
  const age = req.params.AGE;
  const q =
    'SELECT rationcard.Address FROM rationcard  JOIN details ON rationcard.UID = details.UID WHERE details.UID=214';

  db.query(q, aadharNumber, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log('Connected to backend');
});
