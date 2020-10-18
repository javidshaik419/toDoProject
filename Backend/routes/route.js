var controllers=require('../controllers/controllers')



function api(express){
express.post('/addtodo',controllers.addtodo)
express.post('/deleteTodo',controllers.deleteTodo)
express.get('/gettodo',controllers.gettodo)

}
module.exports={
    api
}