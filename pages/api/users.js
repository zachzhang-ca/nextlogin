const assert = require('assert');
const bcrypt = require('bcrypt');
const v4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
const jwtSecret = 'SUPERSECRETE20220';

const saltRounds = 10;
const url = 'mongodb://localhost:27017';
const dbName = 'simple-login-db';

function findUser(db, email, callback) {
    const collection = db.collection('user');
    collection.findOne({email}, callback);
  }

export default function handler(req, res){
    res.status(200).json({users: ['John Doe']});
};