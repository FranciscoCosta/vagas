var data =  require("./fakeData");

module.exports = function(req, res) {
    //Devemos utilizar o id do usuário para apagar o usuário em vez do nome pois o nome não é único
    const id =  req.query.id;
    //Aqui eu procuro o usuário pelo nome
    const userData = data.find(user => user.id == id)
    if (!userData) {
        //Aqui eu retorno o status 404 em caso de falha
        res.status(404).send("User not found");
    }else{
        //Aqui eu apago o usuário do array de usuários e retorno o array atualizado
        data.splice(userData.id - 1, 1);
        res.status(200).send(data);
    }
    };