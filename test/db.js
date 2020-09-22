
const MongoClient = require('mongodb').MongoClient;





const result = async () => {

    //mongodb+srv://<username>:<password>@cluster0.kngwq.mongodb.net/<dbname>?retryWrites=true&w=majority
    //DataBase: aula
    //user: aula8sian - ED0RIBzKRl2suQ4c
    //user: aluno - rzO0f12o45BDyqPs

    const uri = "mongodb+srv://DBAdmin:FpQOdSomXHaHZB9v@cluster0.tisur.gcp.mongodb.net/DBAdmin?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect()
    const db = client.db("DBAdmin")

    await db.collection('inventory').insertOne({
        item: 'Teste',
        qty: 1,
        tags: ['cotton'],
        size: { h: 28, w: 35.5, uom: 'cm' },
        qwqwqw: 'teste'
    })

    client.close();
}

result()


