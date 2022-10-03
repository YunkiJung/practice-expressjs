import userModel from "./users.model.js";



export function getAllUsers(req, res, next){

    userModel.find(function(err, users){
        if(err){
            console.err(err);
            res.end(err);
        }

        res.send(users);
    })

}

export function createUser(req, res, next){
    let newUser = userModel({
        id: req.body.id,
        password: req.body.password,
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email
    })

    userModel.create(newUser, (err, User) => {
        if(err){
            console.log(err);
        }
    });
}