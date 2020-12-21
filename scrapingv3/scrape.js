require("dotenv").config()

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_API_KEY
});
var base = Airtable.base('appugmBtHoY7HdY6e');

base('larses').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 1000,
    view: "pend",
    pageSize: 10
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    console.log("records", records.length)
    const asdf = records.map(function(record) {
        // console.log({url: "https://larslist.org" + record.get("image").replace("gen", "scr")})
        return {
            id: record.id,
            fields: {
                img : [
                    {url: "https://larslist.org" + record.get("image").replace("gen", "scr")}
                ]
            }
        }
        // console.log('Retrieved', record.id);
    });

    // console.log(asdf)
    base('larses').update(
        
        
        [
            ...asdf
        // {
        //   "id": "recxJfpnZzwUyFonU",
        //   "fields": {
        //     "name": "Lars Otto Johnsen",
        //     "description": "Founder of LODDO - a digital marketing agency. Hustler to the bone, and good at selling things online.",
        //     "linkedin": "https://www.linkedin.com/in/lars-otto-johnsen-42b685172/",
        //     "image": "/gen/johnsen.jpeg",
        //     "img": [
        //       {
        //         "url": "https://larslist.org/scr/johnsen.jpeg"
        //       }
        //     ]
        //   }
        // }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('name'));
        });
      });

    




    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    setTimeout(fetchNextPage, 4000)

}, function done(err) {
    if (err) { console.error(err); return; }
});


