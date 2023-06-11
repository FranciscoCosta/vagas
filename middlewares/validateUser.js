const validateUser = (req, res, next) => {

    //Verifica se o id  presente em headers é igual ao da requisição query
    const id = req.query.id;
    const userId = req.headers.userid;
    console.log(userId, id)
    if (id) {
        if (id == userId) {
            next();
        } else {
            // Caso não sejam os mesmo não autoriza
            res.status(401).send("Unauthorized");
        }
    }
    else {
        // Caso não tenha id nos headers
        res.status(400).send("Missing id");
    }
};

module.exports = validateUser