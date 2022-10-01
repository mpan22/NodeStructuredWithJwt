const User= require('./user.model');
const userService={

    createAUser:async (user)=>{
        // Password hash
        const salt= await bcrypt.genSalt(10);
        const hashedPass= await bcrypt.hash(user.password,salt)  ;
               
        try{
            const savedUser = await User.create({
                name: req.body.name,
                email:req.body.email,
                password: hashedPass,
                city: req.body.city
            });
            return {
                status:true,
                data:savedUser
            }
        }
        catch(err){
            return {
                status:false
            }
        }
    },

    getAUser:async  ()=>{
        try{
            const foundUser=await User.find();
            return {
                status: true,
                data: foundUser
            }
        }
        catch(err){
            return{
                status:false,
                data: err
            }
        }
    },

    getAUserById: async(id)=>{
        try{
            const foundUser=await User.find(id);
            return {
                status: true,
                data: foundUser
            }
        }
        catch(err){
            return{
                status:false,
                data: err
            }
        }
    
    },

    updateAUserById: async (id,updates) =>{
        try{
            const updatedUser=await User.findByIdAndUpdate(id,updates,{ useFindAndModify: false})
            return {
                    status: true,
                    data: updatedUser
                }
        }
        catch(err){
            return{
                status:false,
                data: err
            }
        }
    },

    deleteAUserById: async (id)=>{
        try{
            const deletedUser=await User.findByIdAndDelete(id);
            return {
                    status: true,
                    data: deletedUser
                }
        }
        catch(err){
            return{
                status:false,
                data: err
            }
        }
    }
}

module.exports= userService;
