# Stateless Microservice for socialCops

A simple stateless microservice in Nodejs, with three major functionalities -

 * Authentication
 * JSON patching
 * Image Thumbnail Generation

## Setup

The API requires [Node.js](https://nodejs.org/en/download/)

To get up and running: 

**1.** Clone the repo.
```
git clone https://github.com/SarthakSri98/Stateless-Image-Thumbnail-Generator
```

**2.**  ```cd``` into repo. Use the same directory name(below) if you do not change it.
```
cd Stateless-Image-Thumbnail-Generator
```

**3.**  Setup the application by installing its dependencies with
```
npm install
```

**4.**  Also, install nodemon with ```npm install nodemon``` if not installed. The app gets up and running on port 8000 with ```npm start```.
 

## Testing the API routes.

Since this is mostly an API with post and patch requests, testing will be done with [Postman](https://www.getpostman.com/)

### Authentication
This is a mock authentication so you can pass in any username or password to login.
 1. Set the request to **POST** and the url to _/users/login_. 
 2. You will be setting 2 keys (for username and password). Set the ```username``` key to any name. Set ```password``` to any password (minimum of 6 characters).
 3. Hit ```Send```. You will get a result in this format:
 ```
 {
    "user": "sarthak",
    "authorized": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhd2Zlc2dyIiwiaWF0IjoxNTQ5MTI2OTgwLCJleHAiOjE1NDkxMzA1ODB9.ywbMXejRhwsxg9A3QRcgPbh7bq2DnPBNTL3h2yIpaiM"
}
 ```

### Image Thumbnail Generation
This request contains a public image URL. It downloads the image, resizes to 50x50 pixels, and returns the resulting thumbnail.
 1. Set the request to **POST** and the url to _/image/generate-thumbnail_.
 2. Set the key ```imageUrl``` to a public image url.
 3. The token generated earlier will be patched with the key.
 4. At first, if JWT is missing or invalid then the request will be rejected otherwise,
 4. Image will be downloaded and converted to a thumbnail of size 50x50 pixels with a sample result as below:
 ```
 {
    "authorized": true
    "converted": true
    "imagePath": "/backend/images/635thumbnail.png"
}
```

## Unit Testing

Unit testing is done using mochai.

Run ```npm test``` from the application's root directory.



## Built With

 * [Node.js](https://nodejs.org)
 * [Express](https://expressjs.com/)
 * [Mocha](https://mochajs.org/) - For testing


