/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

const cors = require('cors')({origin:true})
const fs    = require('fs')
const uuid = require('uuid')
const {Storage} = require('@google-cloud/storage')
const storage = new Storage({
    projectId: 'lambetest-66f98',
    keyFilename : 'firebaseADM.json'
})

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const uploadImage = onRequest((request, response) => {
    cors(request, response, () => {
        try {
            fs.writeFileSync('/tpm/imageToSave.jpg', request.body.image, 'base64')

            const bucket = storage.bucket('lambetest-66f98.appspot.com')
            const id = uuid()
            bucket.upload('/tpm/imageToSave.jpg', {
                uploadType : 'media',
                destination: `/posts/${id}.jpg`, 
                metadata: {
                    metadata : {
                        contentType: 'image/jpeg',
                        firebaseStorageDownloadTokens:id
                    }  
                }
            }, (err:any, file:any) =>{
                if(err) {
                    console.log(err)
                    return response.status(500).json({err})
                }else {
                    const filename = encodeURIComponent(file.name)
                    const imageUrl = 'https://firebasestorage.googleapis.com/v0/b' + bucket.name + '/o/' + filename +'?alt=media&token='+id
                    return response.status(201).json({imageUrl})
                }
            })
        } catch (error) {
            console.log(error)
            return response.status(500).json({error})
        }
    })


});
