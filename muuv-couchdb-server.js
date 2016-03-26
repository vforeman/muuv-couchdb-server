var couchdb = require('couchdb');
var client = couchdb.createClient(5984,'localhost')
var db = client.db('devMuuv');


var restify = require('restify');
var muuvCouchDBServer = restify.createServer({
  name: 'muuvCouchDBServer',
  version: '1.0.0'
});

muuvCouchDBServer.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);
muuvCouchDBServer.use(restify.acceptParser(muuvCouchDBServer.acceptable));
muuvCouchDBServer.use(restify.queryParser());
muuvCouchDBServer.use(restify.bodyParser());


muuvCouchDBServer.listen(8888, function(){
  console.log('%s listening at %s', muuvCouchDBServer.name, muuvCouchDBServer.url);
});
