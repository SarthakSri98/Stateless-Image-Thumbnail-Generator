const fs = require('fs');
const request = require('request');
const isImageUrl = require('is-image-url');
const nJwt = require('jsonwebtoken');
var im = require('imagemagick');





var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


exports.returnThumbnail = function (req, res, next) {
  nJwt.verify(req.body.token,'the_good_the_bad_and_the_uchihas',function(err,token){
    if(err){

      res.status(401).json({
        message:"User not authorized",
        authorized: false

      })
    }else{
      console.log(req.body);
      if (isImageUrl(req.body.imageUrl)) {
        const now = new Date();
        const d = now.getMilliseconds();
        download(req.body.imageUrl, './backend/controller/' + d + '.png', function () {
          console.log('done');
         
          im.resize({
            srcPath: './backend/controller/' + d + '.png',
            dstPath: './backend/images/' + d + 'thumbnail.png',
            width: 50,
            height: 50
          }, function(err, stdout, stderr){
            // if (err) throw err;
            res.status(200).json({
                converted: true,
                imagePath: '/backend/images/' + d + 'thumbnail.png',
                authorized: true

              });
            console.log('resized image to fit within 50x50px');
        });
        });
      } else {
        res.status(400).json({
          message:"User not authorized"
        })
      }
    }
  });

  
}
