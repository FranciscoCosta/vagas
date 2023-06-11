var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const id =  req.query.id;
    const name =  req.body.name;
    const job =  req.body.job;

    try {
        const userData = data.find(user => user.id == id);
        if (!userData) {
            res.status(404).send("User not found");
        }else{
            //Aqui eu atualizo o usuário com os novos dados caso eles tenham sido enviados
            if(name){
                userData.name = name;
            }
            if(job){
                userData.job = job;
            }
        }
        //Aqui eu atualizo o usuário no array de usuários e retorno o usuário atualizado
        data.splice(userData.id - 1, 1, userData);
        res.status(200).send(userData);

     } catch(error) {
        //Aqui eu retorno o erro em caso de falha
            res.send(error);
        }

};