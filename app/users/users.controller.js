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
        id: 'bobo1234',
        password: '2222',
        name: 'qiwenye',
        address: 'Calgary',
        phone: '5879692222',
        email: 'bobo@gmail.com'
    })

    userModel.create(newUser, (err, User) => {
        if(err){
            console.log(err);
        }
    });
}