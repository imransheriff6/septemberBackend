const client = require('./connection');
const { ObjectId } = require('mongodb')
module.exports = {
    getUser: async () => {

    },
    createUser: async (req, res) => {
        let findUser = await client.db('Amazon').collection('Users').find({ name: req.body.name }).toArray();
        if (findUser.length === 0) {
            let newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                address: req.body.address,
                mobileNumber: req.body.mobileNumber,
                profilePicture: req.body.profilePicture
            }
            await client.db('Amazon').collection('Users').insertOne(newUser);
            res.send('User added');
        }else{
            res.send("User Already Exist")
        }

    },
    updateUser: async (req, res) => {
        try {
            await client.db('Amazon').collection('Users').updateOne(
                { "name": req.body.name },
                { $set: { address: req.body.address } }
            )
            res.send("Updated")
        } catch (err) {
            res.send(err)
        }
    },
    deleteUser: async (req, res) => {
        console.log(req.params.id);
        try {
            // await client.db("Amazon").collection('Users').findOneAndDelete({ _id: new ObjectId(req.params.id) });
            await client.db("Amazon").collection('Users').deleteMany({});
            res.send("User Deleted Successfully")
        } catch (err) {
            res.send(err);
        }
    }
}