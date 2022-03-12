const express = require('express')
const database = require('mime-db')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql =  require('mysql')
const connection = mysql.createConnection(config)

const sql = 'INSERT INTO people(name) VALUES("Adalberto")'
connection.query(sql)

var html = ''
html = '<h1>Full Cycle Rocks!</h1> </br> <ul>' 

var names = []
connection.query("SELECT name FROM people", function (err, result, fields) {    
    if (err) throw err;      
    Object.keys(result).forEach(function(key) {
	  var row = result[key];
      html += '<li>' + row.name + '</li>'
	  console.log(row.name)
	});
});
connection.end()

html += '</ul>'

app.get('/', (req, res) => {
    res.send(html)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})