const e = require("express");
var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const name =  req.query.name;
    try {
        const userData = data.find(user => user.name === name);
        if (!userData) {
            res.status(404).send("User not found");
        }else{
            res.status(200).send(userData);
        }
    } catch (error) {
        res.send(error);
    }
};

const getUsers = ( req, res, next ) => {
    const users = data;
    try {
        res.status(200).send(users);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    getUser,
    getUsers
};