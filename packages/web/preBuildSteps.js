/* eslint prefer-template: 0 */
const fs = require('fs');
const dotenv = require('dotenv');

// https://nodejs.org/api/fs.html#fs_fs_copyfilesync_src_dest_flags
fs.copyFileSync('.env.sample', '.env');

const env = dotenv.config().parsed;
const envKeys = {};
Object.keys(env).forEach((key) => {
    envKeys[`medlifeConst.${key}`] = env[key];
});

const fileContents = 'module.exports = ' + JSON.stringify(envKeys) + ';\n';

fs.writeFile('env.js', fileContents, (err) => {
    if (err) throw err;
});
