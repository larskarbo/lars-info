const Fs = require('fs-extra');
const https = require("https")
const CsvReadableStream = require('csv-reader');
const { v4: uuidv4 } = require('uuid');
const larses = []

const lold = Fs.readJSONSync("scraping/larsesscrapeddone.json")
const csv = Fs.readJSONSync("scraping/newlars3.json")
console.log('lold: ', lold);
console.log(csv.length)

for (const lars of lold) {
  console.log(lars)
  const filename = uuidv4()
  const yo = csv.find(c => {
    // console.log('c.name: ', c.name, lars.name);
    return c.name.includes(lars.name)
  })
  const fileI = JSON.parse(yo.picture)
  console.log('fileI: ', fileI.filename);
  larses.push({
    ...lars,
    image: "/scr/" + filename + fileI.filename
  })
  const file = Fs.createWriteStream("public/scr/" + filename + fileI.filename);
  const request = https.get(fileI.url, function (response) {
    response.pipe(file);
  });
}

Fs.writeJSON("scraping/larsesscraped.json", larses)

  // .on('data', function (row) {
  //   console.log('A row arrived: ', row);
  //   if(row[0] == "name"){
  //     return
  //   }
  //   const filename = uuidv4()
  //   const fileI = JSON.parse(row[3])
  //   larses.push({
  //     name: row[0],
  //     email: row[1],
  //     description: row[2] + "| " + row[4],
  //     image: "/scr/" + filename + fileI.filename
  //       })
  //   const file = Fs.createWriteStream("public/scr/" + filename + fileI.filename);
  //   const request = https.get(fileI.url, function (response) {
  //     response.pipe(file);
  //   });
  // })
  // .on('end', function (data) {
  //   console.log('No more rows!');
  //   console.log("wait for images!!!....")
  //   Fs.writeJSON("scraping/larsesscraped.json", larses)
  // });