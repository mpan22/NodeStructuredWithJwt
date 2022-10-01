const userService= require('../user/user.services')

const userController={
    createUser: (req,res)=>{

        res.send(userService.createUser(req.body));
    },
    getUser: (req,res)=>{

        res.send(userService.getAUser());
    },
    getUserById: (req,res)=>{

        res.send(userService.getAUserById(req.params.id));
    },
    updateUser: (req,res)=>{

        res.send(userService.updateAUser(req.params.id,req.body));
    },
    deleteUser: (req,res)=>{

        res.send(userService.deleteAUser(req.params.id));
    }
}
    

    

module.exports=userController;