var couchdb = require('couchdb');
var client = couchdb.createClient(5984,'localhost')
var db = client.db('devMuuv');
