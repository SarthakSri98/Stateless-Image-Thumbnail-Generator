const fs = require('fs');
const request = require('request');
const isImageUrl = require('is-image-url');

var i=1;
var download = function(uri, filename, callback){
request.head(uri, function(err, res, body){
console.log('content-type:', res.headers['content-type']);
console.log('content-length:', res.headers['content-length']);

request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};


exports.returnThumbnail = function(req,res,next){
console.log(isImageUrl(req.body.imageUrl));
if(isImageUrl(req.body.imageUrl))
{
 download(req.body.imageUrl, './backend/controller/'+i+'.png', function(){
  console.log('done');
  res.status(200).json({
      message:"Process going on",
      imagePath : './backend/controller/'+i+'.png'
  })
  i++;
});
}

else{
    console.log("lauda lelo");
}
}