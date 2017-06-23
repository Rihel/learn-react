let devConfig = require('./config/dev');
let bulidConfig = require('./config/pro');

let config = process.env.NODE_ENV === 'dev' ? devConfig :bulidConfig;





module.exports = config