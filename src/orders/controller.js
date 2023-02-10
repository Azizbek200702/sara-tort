const Order = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let order = await Order.create(req.body)
            if(!order){
                return res.status(400).send("order yaratishda hatolik boldi")
            }
            return res.status(201).send(order)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let orders = await Order.find({})
           if(!orders){
            return res.status(400).send("orderlarni olishda hatolik boldi ")
            }
        return res.status(200).send(orders)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let orderId = req.params.id
           let order = await Order.findOne({_id : orderId})
           if(!order){
            return res.status(400).send("orderlarni olishda hatolik boldi ")
            }
        return res.status(200).send(order)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let orderId = req.params.id
        let order = await Order.findByIdAndDelete(orderId)           
        return res.status(200).send(order)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let orderId = req.params.id
        await Order.findByIdAndUpdate(orderId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}