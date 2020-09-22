const { Connection } = require('./Connection')
const {ObjectID} = require('mongodb');


class OperatorsDB extends Connection {


    async save(collection, data) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            console.log('db', db, 'client', client)
            await db.collection(collection).insertOne(data)
            client.close()
            return data
        } catch (error) {
            console.log('Operators.save', error)
        }
    }

    async find(collection, query) {
        try {
            const { client, db } = await this.getClienteMongoDB()
            const cursor = await db.collection(collection).find(query)
            const allElements = []
            await cursor.forEach(element => allElements.push(element))
            client.close()
            return allElements
        } catch (error) {
            console.log('Operators.find', error)
        }
    }

    async findById(collection, id) {
        try {

            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const produto = await db.collection(collection).findOne(query)
            client.close()
            return produto
        } catch (error) {
            console.log('Operators.findById', error)
        }
    }
    async findByName(collection, name) {
        try {

            const query = {"Nome": name}
            const { client, db } = await this.getClienteMongoDB()
            const produto = await db.collection(collection).findOne(query)
            console.log(produto)
            client.close()
            return produto
        } catch (error) {
            console.log('Operators.findByName', error)
        }
    }
    async deleteById(collection, id) {
        try {

            const query = {_id: this.getObjectId(id)}
            const { client, db } = await this.getClienteMongoDB()
            const user = await db.collection(collection).deleteOne(query)
            client.close()
            return user
        } catch (error) {
            console.log('Operators.DeleteById', error)
        }
    }

    async editById(collection, body) {
        try {
            console.log("aqui", body)
            const query = {_id: ObjectID(body.id)}
            const newvalues = { $set: {marca : body.name} };
            const { client, db } = await this.getClienteMongoDB()
            const produto = await db.collection(collection).updateOne(query,newvalues, function(err, res) {
                if (err) throw err;
                console.log("O id", body.id, " foi atualizado");
              });
            client.close()
            return produto
        } catch (error) {
            console.log('Operators.UpdateById', error)
        }
    }
}

module.exports = { OperatorsDB }