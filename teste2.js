var data =  require("./fakeData");

module.exports = function(req, res){

    const name =  req.body.name;
    const job =  req.body.job;

    //Aqui eu crio um id para o novo usuário
    const id = data.length + 1;
    
    //Aqui eu crio o novo usuário
    var newUser = {
        id,
        name,
        job
    }

    //Aqui eu adiciono o novo usuário ao array de usuários
    data.push(newUser)

    try {
        //Aqui eu retorno o novo usuário em caso de sucesso
        res.status(200).send(data);
    } catch (error) {
        //Aqui eu retorno o erro em caso de falha
        res.send(error);
    }
};