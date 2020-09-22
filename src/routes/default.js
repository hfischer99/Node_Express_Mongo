module.exports = app => {

    app.get ('/produtos', (req, res, next) => {
        res.send({nome:'Notebook', preco: 4200.20}) //converte Json 
    })
    
    app.post ('/produtos', (req, res, next) => {
        res.json(req.body)
    })
    
    app.put ('/produtos', (req, res, next) => {
        res.send('Put Produtos') 
    })
    
    app.delete ('/produtos', (req, res, next) => {
        res.send('Delete Produtos') 
    })
    
   
}