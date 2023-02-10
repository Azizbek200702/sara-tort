const Store = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let store = await Store.create(req.body)
            if(!store){
                return res.status(400).send("store yaratishda hatolik boldi")
            }
            return res.status(201).json(store)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let stores = await Store.find({})
           if(!stores){
            return res.status(400).send("storelarni olishda hatolik boldi ")
            }
        return res.status(200).send(stores)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let storeId = req.params.id
           let store = await Store.findOne({_id : storeId})
           if(!store){
            return res.status(400).send("storelarni olishda hatolik boldi ")
            }
        return res.status(200).send(store)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let storeId = req.params.id
        let store = await Store.findByIdAndDelete(storeId)           
        return res.status(200).send(store)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let storeId = req.params.id
        await Store.findByIdAndUpdate(storeId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}