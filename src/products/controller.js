const Product = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let product = await Product.create(req.body)
            if(!product){
                return res.status(400).send("product yaratishda hatolik boldi")
            }
            return res.status(201).send(product)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let products = await Product.find({})
           if(!products){
            return res.status(400).send("productlarni olishda hatolik boldi ")
            }
        return res.status(200).send(products)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let productId = req.params.id
           let product = await Product.findOne({_id : productId})
           if(!product){
            return res.status(400).send("productlarni olishda hatolik boldi ")
            }
        return res.status(200).send(product)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let productId = req.params.id
        let product = await Product.findByIdAndDelete(productId)           
        return res.status(200).send(product)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let productId = req.params.id
        await Product.findByIdAndUpdate(productId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}