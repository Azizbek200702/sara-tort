const User = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let user = await User.create(req.body)
            if(!user){
                return res.status(400).send("user yaratishda hatolik boldi")
            }
            return res.status(201).json(user)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let users = await User.find({})
           if(!users){
            return res.status(400).send("userlarni olishda hatolik boldi ")
            }
        return res.status(200).send(users)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let userId = req.params.id
           let user = await User.findOne({_id : userId})
           if(!user){
            return res.status(400).send("userlarni olishda hatolik boldi ")
            }
        return res.status(200).send(user)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let userId = req.params.id
        let user = await User.findByIdAndDelete(userId)           
        return res.status(200).send(user)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let userId = req.params.id
        await User.findByIdAndUpdate(userId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}