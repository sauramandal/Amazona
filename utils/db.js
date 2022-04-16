import mongoose from 'mongoose'
import dotenv from 'dotenv'

const connection = {}

async function connect() {
    dotenv.config()
    if (connection.isConnected) {
        console.log('Already connected')
        return
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState
        if (connection.isConnected === 1) {
            console.log('Use previous connection')
            return
        }
        await mongoose.disconnect()
    }
    const url = process.env.MONGODB_URL
    // console.log('env'); console.log(process.env)
    const db = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('new connection')
    connection.isConnected = db.connections[0].readyState
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect()
            connection.isConnected = false
        } else {
            console.log('not disconnected')
        }
    }
}

function convertDocToObj(doc) {
    doc._id = doc._id.toString()
    doc.createdAt = doc.createdAt.toString()
    doc.updatedAt = doc.updatedAt.toString()
    return doc
}

const db = { connect, disconnect, convertDocToObj }
export default db
