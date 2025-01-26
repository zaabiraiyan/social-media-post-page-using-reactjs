const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

    try {
        if (!fs.existsSync(path.join(__dirname,'..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'..', 'logs'));
        }

        await fsPromises.appendFile(path.join(__dirname,'..', 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }
}
const logz=(req,res,next)=>{
    logEvents(`${req.method} ${req.url} ${req.header.orgin}`,'me.txt')
    next()
}

   
const webs=(req,res,next)=>{
    logEvents(`${req.method} /t ${req.headers.origin} /t${req.url}`,'logresultxx.txt')
    next()
}

module.exports = {logz,logEvents,webs}
