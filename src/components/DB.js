const DB  = require('./country.js')
const fs = require('fs');

const CountryObject = [];

function Country(name, currencyID) {
    this.name = name;
    this.currencyID = currencyID;
}

for(let i in DB) {
    CountryObject.push( new Country(DB[i].name, DB[i].currencyId))
}

let json = JSON.stringify(CountryObject,null,'\t')
fs.writeFile('./CountryObject.json', json, (err) =>{if(err)console.log(err)})
