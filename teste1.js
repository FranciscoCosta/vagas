const e = require("express");
var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const name =  req.query.name;
    try {
        //Aqui eu procuro o usuário pelo nome
        const userData = data.find(user => user.name === name);
        if (!userData) {
            //Aqui eu retorno o status 404 em caso de falha
            res.status(404).send("User not found");
        }else{
            //Aqui eu retorno o novo usuário em caso de sucesso
            res.status(200).send(userData);
        }
    } catch (error) {
        //Aqui eu retorno o erro em caso de falha
        res.send(error);
    }
};

const getUsers = ( req, res, next ) => {
    const users = data;
    try {
        //Aqui eu retorno o novo usuário em caso de sucesso
        res.status(200).send(users);
    } catch (error) {
        //Aqui eu retorno o erro em caso de falha
        res.send(error);
    }
};

module.exports = {
    getUser,
    getUsers
};