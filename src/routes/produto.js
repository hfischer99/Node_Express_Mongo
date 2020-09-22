const { OperatorsDB } = require('../mongoAtlas/OperatorsDB')



module.exports = app => {

    app.get('/produto', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const produto = await operator.find('produtos', {});
            res.send(produto)
        } catch (fail) {
            console.log('FindAll', fail)
        }
    })

    app.get('/produto/id/:id', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const produto = await operator.findById('produtos', req.params.id)
            res.send(produto)
        } catch (fail) {
            console.log('findId', fail)
        }
    })

    app.get('/produto/name/:name', async (req, res) => {
        try {
            const operator = new OperatorsDB();
            const produto = await operator.findByName('produtos', req.params.name)
            res.send(produto)
        } catch (fail) {
            console.log('findName', fail)
        }
        
        
    })

    app.post('/produto', async (req, res) =>  {
        try {
            const operator = new OperatorsDB();
            const produto = await operator.save('produtos', req.body)
            res.send(produto)
        } catch (fail) {
            console.log('Createproduto', fail)
        }
    })
    

    app.put('/produto', async (req, res) =>  {
       try {
        const operator = new OperatorsDB();
        const produto = await operator.editById('produtos', req.body)
        res.send(produto)
    } catch (fail) {
        console.log('edit', fail)
    }      
    })


    app.delete('/produto/:id', async (req, res) =>  {
        try {
            const operator = new OperatorsDB();
            const produto = await operator.deleteById('produtos', req.params.id)
            res.send(produto)
        } catch (fail) {
            console.log('Deleteid', fail)
        }
       
    })



}