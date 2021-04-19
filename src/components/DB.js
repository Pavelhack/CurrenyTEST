const DB  = require('./country.js')
const fs = require('fs');

const CountryObject = [];

function Country(id, name, currencyID) {
    this.id = id;
    this.name = name;
    this.currencyID = currencyID;
}

for(let i in DB) {
    CountryObject.push( new Country(DB[i].id ,DB[i].name, DB[i].currencyId))
}

let json = JSON.stringify(CountryObject,null,'\t')
fs.writeFile('./CountryObject.json', json, (err) =>{if(err)console.log(err)})
