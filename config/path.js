const path = require('path');
const ROOT_PATH= path.resolve(__dirname,'../'),
    APP_PATH=path.resolve(ROOT_PATH, './src'),
    BUILD_PATH= path.resolve(ROOT_PATH, './build');
module.exports = {
    ROOT_PATH,
    APP_PATH,
    BUILD_PATH
}