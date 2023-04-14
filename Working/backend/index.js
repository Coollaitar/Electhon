import mysql from 'mysql2';
import express, { query } from 'express';
import nodemon from 'nodemon';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@adit27nov',
  database: 'aadhar',
});

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
app.listen(8800, () => {
  console.log('Connected to backend');
});
