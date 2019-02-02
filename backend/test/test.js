/*jslint node: true */

const { expect } = require('chai')
const request = require('supertest')

const app = require('../app')


describe('SocialCops Stateless Microservice', () => {
  // Create dummy login data
  const loginDetails = { username: 'someone', password: 'awesome' }
  // Create token variable to save user token
  let token
  // Set various variables to be used in the application
  const imageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbcea4s-36592222-d6a9-4127-9312-cd81780da38c.png/v1/fill/w_1310,h_610,strp/all_akatsuki_png_by_davidbksandrade_dbcea4s-pre.png'
  const invalidImageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/295fb76c-7179-4c70-a508-a1cce61a876f/dbcea4s-36592222-d6a9-4127-9312-cd81780da38c.png/v1/fill/w_1310,h_610,strp/all_akatsuki_png_by_davidbksandrade_dbcea4s-pre'
  const jsonObject = '{ "user": { "firstName": "Sarthak", "lastName": "Srivastava" } }'
  const jsonPatchObject = '[{"op": "replace", "path": "/user/firstName", "value": "Kishan"}, {"op": "replace", "path": "/user/lastName", "value": "Chaurasiya"}]'

 // Mock user authentication
  describe('Mock Authentication', () => {
    it('it should not log user in if username and password do not meet requirements', (done) => {
      request.agent(app)
        .post('/user/login')
        .send({ username: 'someone', password: '' })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400)
                    done();
        })
    })

    it('it should accept a username/password and return a signed JWT', (done) => {
      request.agent(app)
        .post('/user/login')
        .send(loginDetails)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.authorized).to.equal(true)
          token = res.body.token
          done()
        })
    })
  })

  describe('Thumbnail creation', () => {
    it('it should accept a public image url and return a resized image', (done) => {
      request.agent(app)
        .post('/image/generate-thumbnail')
        .send({ imageUrl: imageUrl,token:token })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.converted).to.equal(true)
        })
      done()
    })

    it('it should not process image if token is invalid', (done) => {
      request.agent(app)
        .post('/image/generate-thumbnail')
        .send({ imageUrl: imageUrl, token: 'randomewwrongtoken' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(401)
          expect(res.body.authorized).to.equal(false)
        })
      done()
    })

    it('it should not process image if url is invalid', (done) => {
      request.agent(app)
        .post('/image/generate-thumbnail')
        .send({ imageUrl: invalidImageUrl, token: token })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400)
        })
      done()
    })
   })

 })
