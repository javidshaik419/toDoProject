var mongoose=require('mongoose')
require('../models/models')
var addToDoSchema = require('mongoose').model('toDo');




async function addtodo(req,res){

    let reqData = req.body


    let query={
        todo:reqData.todo  
    }
    console.log(query)
    var add=await new addToDoSchema(query)
    let result = await add.save()
    console.log(result,"hiii")
    if(result){
        res.json({
            msg:"todo added",
            code:2000,
            result:result
        })
    }else{
        res.json({
            msg:"failed to add toDo",
            code:5000
        })
    }

}
async function deleteTodo(req,res){
    reqBody=req.body
    let record=await addToDoSchema.findOne({_id:reqBody.id})
    if(record){
        var result=await addToDoSchema.deleteOne({_id:reqBody.id})
        if(result){
            res.json({
                msg:"rocord deleted",
                code:2000
            })
        }else{
            res.json({
                msg:"record deleted failed",
                code:5000
            })
        }

    }else{
        res.json({
            msg:"record not found",
            code:5000
        })
    }
}
async function gettodo(req,res){
    reqBody=req.body
    let todo=await addToDoSchema.find()
    if(todo){
        res.json({
            msg:"todo found",
            code:2000,
            result:todo
        })
    }else{
        res.json({
            msg:"cannot find todo",
            code:5000
        })
    }
}


module.exports={
    addtodo,
    deleteTodo,
    gettodo
}