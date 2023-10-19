/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const cors = require('cors')({origin:true})
const fs    = require('fs')
const path = require('path');
const uuid = require('uuid-v4')
const {Storage} = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'lambetest-66f98',
    keyFilename : 'firebaseADM.json'
})
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.uploadImage = functions.runWith({ maxInstances: 10 }).https.onRequest((request, response) => {
    cors(request, response, () => {
        try {
            const filePath = path.join('/tmp', 'imageToSave.jpg'); // caminho local temporário
            const imageBuffer = Buffer.from(request.body.image, 'base64');
            fs.writeFileSync(filePath, imageBuffer);

            // fs.writeFileSync('/tpm/imageToSave.jpg', request.body.image, 'base64')

            const bucket = storage.bucket('lambetest-66f98.appspot.com')
            const id = uuid()
            bucket.upload(filePath, {
                uploadType : 'media',
                destination: `/posts/${id}.jpg`, 
                metadata: {
                    metadata : {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens:id
                    }  
                }
            }, (err, file) =>{
                if(err) {
                    console.log(err)
                    return response.status(500).json({err})
                }else {
                    const filename = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/'+bucket.name+'/o/'+filename+'?alt=media&token='+id
                    return response.status(201).json({imageUrl})
                }
            })
        } catch (error) {
            console.log(error)
            return response.status(500).json({error})
        }
    })
  });


  