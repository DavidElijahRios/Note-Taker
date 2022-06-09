const router = require('express').Router();
const fs = require('fs');


router.get('/api/notes', (req, res) => 
fs.readFile('./db/db.json', (err, data) => {
  if(err) {
      throw error;
  } else {
      res.send(data)
  }
})
);

// maybe read file first get a list, then maybe add or push data and add array to db.json
router.post('/api/notes', (req, res) => 
fs.readFile('./db/db.json', 'utf8',(err, data) => {
    const newNote = req.body
    if(err) {
        throw error;
    } 

        const info = JSON.parse(data);
      console.log("INFO", info)
      console.log("New note", newNote)

        info.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(info), (err) => {
            console.log('Note String', info)
            if(err) {
                throw error;
            } else {
                res.send(info)
            }
        })
    })
    );


module.exports = router;