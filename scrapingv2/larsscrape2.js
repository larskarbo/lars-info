const fs = require('fs-extra');
const https = require("https")
const CsvReadableStream = require('csv-reader');
const { v4: uuidv4 } = require('uuid');
let inputStream = fs.createReadStream('scrapingv2/yo.csv', 'utf8');
const larses = []

inputStream
  .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
  .on('data', function (row) {
    if (row[0] == "Tidsmerke") {
      return
    }
    if (row[9] == "yes") {
      return
    }
    console.log('A row arrived: ', row);
    const filename = uuidv4()

    fs.moveSync("scrapingv2/skattebo.jpg", "scr/public/" + filename + ".jpg")
    larses.push({
      name: row[2],
      email: row[1],
      description: row[3] + "| " + row[5],
      image: "/gen/" + filename + ".jpg"
    })
  })
  .on('end', function (data) {
    console.log('No more rows!');
    console.log("wait for images!!!....")
    fs.writeJSON("scrapingv2/larsesscraped.json", larses)
    exec('public/conv.sh')
  });