const mongoose = require('mongoose')
const mongo = require('mongodb')
const dbUrl = 'mongodb://localhost:27017/dbtest'

mongoose.connect(dbUrl, {
    useNewUrlParser: true
})
const db = mongoose.connection
const Schema = mongoose.Schema

const regisSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirm_password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
})

const registerdb = module.exports = mongoose.model("regisdb", regisSchema)
module.exports.createRegis = function(newRegis, callback) {
    newRegis.save(callback)
}

module.exports.getAllRegis = function(data) {
    registerdb.find(data)
}