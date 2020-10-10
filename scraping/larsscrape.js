const Fs = require('fs-extra');
const https = require("https")
const CsvReadableStream = require('csv-reader');
const { v4: uuidv4 } = require('uuid');
let inputStream = Fs.createReadStream('scraping/newlars2.csv', 'utf8');
const larses = []
inputStream
  .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
  .on('data', function (row) {
    console.log('A row arrived: ', row);
    if(row[0] == "name"){
      return
    }
    const filename = uuidv4()
    const fileI = JSON.parse(row[3])
    larses.push({
      name: row[0],
      email: row[1],
      description: row[2] + "| " + row[4],
      image: "/scr/" + filename + fileI.filename
        })
    const file = Fs.createWriteStream("public/scr/" + filename + fileI.filename);
    const request = https.get(fileI.url, function (response) {
      response.pipe(file);
    });
  })
  .on('end', function (data) {
    console.log('No more rows!');

    Fs.writeJSON("scraping/larsesscraped.json", larses)
  });