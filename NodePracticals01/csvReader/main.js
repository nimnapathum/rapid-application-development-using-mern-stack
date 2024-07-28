const csv = require('csv-parser');
const fs = require('fs');
const Table = require('cli-table');

const table = new Table();
// const results = [];

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('headers' , (headers) => {
        table.push(headers);
    })
    .on('data', (row) => {
        table.push(Object.values(row));
    })
    .on('end' , () => {
        console.log(table.toString());
    });