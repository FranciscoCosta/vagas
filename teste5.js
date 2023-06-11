
const data = require('./fakeData');

module.exports = function(req, res){
    
    const name =  req.query.name;

    //Aqui eu procuro o usuário pelo nome mas deveria ser pelo id
    try {
    const userData = data.find(user => user.name === name);
    if (!userData) {
        //Aqui eu retorno o status 404 em caso de falha
        res.status(404).send("User not found");
    }else{
        //Aqui retorno o número de vezes que o usuário foi lido
        res.status(200).send(` Usuário ${userData.name} foi lido ${userData.counterRead} vezes`);	
    }
    } catch (error) {
        res.send(error);
    }
};