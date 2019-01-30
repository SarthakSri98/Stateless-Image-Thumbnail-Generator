const fs = require('fs');
const request = require('request');
const isImageUrl = require('is-image-url');
var im = require('imagemagick');



var i = 1;


var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


exports.returnThumbnail = function (req, res, next) {
    
  console.log(req.body);
  if (isImageUrl(req.body.imageUrl)) {
    download(req.body.imageUrl, './backend/controller/full.png', function () {
      console.log('done');

      im.resize({
        srcPath: './backend/controller/full.png',
        dstPath: './backend/images/thumbnail.png',
        width: 50,
        height: 50
      }, function(err, stdout, stderr){
        // if (err) throw err;
        console.log('resized image to fit within 50x50px');
    });

      res.status(200).json({
        message: "Process going on",
        imagePath: 'backend/images/thumbnail.png'
      });
      i++;
    });
  } else {
    console.log("Image not found");
  }
}
