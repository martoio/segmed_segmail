const path = require('path');
const fs = require('fs');

const DATA_PATH = path.resolve(__dirname, '../data/data.json');

try {
    let rawdata = fs.readFileSync(DATA_PATH);
    console.log('Data file found');
    let records = JSON.parse(rawdata);
    if(records.length < 50) {
        throw new Error('Not enough results found');
    }
    console.log('Data file has enough entries. No new file created.');
} catch (e) {
    console.log('Data file not found or not enough entries');
    console.log('Creating data file...');
    require('./fetchNews');
    console.log('Data file created: ', DATA_PATH);
}