import * as globalConfig from "./config/globalConfig"
import * as mongoose from 'mongoose'
import * as bluebird from  'bluebird'


const config = new globalConfig()
mongoose.Promise = bluebird
let helpers = {}

helpers.connectDb = () => {
    mongoose.connect(config.getConfig('database'), { promiseLibrary: bluebird })
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

module.exports = helpers
