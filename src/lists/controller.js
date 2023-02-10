const List = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let list = await List.create(req.body)
            if(!list){
                return res.status(400).send("list yaratishda hatolik boldi")
            }
            return res.status(201).json(list)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let lists = await List.find({})
           if(!lists){
            return res.status(400).send("listlarni olishda hatolik boldi ")
            }
        return res.status(200).send(lists)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let listId = req.params.id
           let list = await List.findOne({_id : listId})
           if(!list){
            return res.status(400).send("listlarni olishda hatolik boldi ")
            }
        return res.status(200).send(list)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let listId = req.params.id
        let list = await List.findByIdAndDelete(listId)           
        return res.status(200).send(list)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let listId = req.params.id
        await List.findByIdAndUpdate(listId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}