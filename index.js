const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const sharp = require('sharp');
const fs = require("fs");

dotenv.config();

const PORT = 5000;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;


const app = express();

app.use(express.json());

app.get("/random-image",async (req,res)=>{
    try{
        const url = 'https://api.unsplash.com/'
        const resp = await axios({
            method : "get",
            url : `${url}photos/random`,
            headers : {
                Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
            }
        });

        const imageUrl = resp.data.urls.full;
        
       // Fetch the image data
        const imageData = await axios({
            method:"get",
            url : imageUrl,
            responseType: 'arraybuffer'

        })

         // Resize the image using sharp
         const resizedImageData = await sharp(imageData.data)
         .resize({ width: 300 }) // Set the desired width for resizing
         .toBuffer();
         
          // Set the appropriate headers for the resized image
         res.set({
             'Content-Type': 'image/png',
             'Content-Length': resizedImageData.length
            });

            // Send the resized image as a response
            res.status(200).send(resizedImageData);
            
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : 'internal server error occured'
        })
    }
});

const API_NINJA_XAPI_KEY = process.env.API_NINJA_X_API_KEY;

app.get('/dad-joke', async (req,res) => {
    try{
        const url = 'https://api.api-ninjas.com/v1/dadjokes';
        const resp = await axios({
            method : "get",
            url : url,
            headers : {
                'X-Api-Key' : API_NINJA_XAPI_KEY
            }
        })
        res.status(200).json(resp.data[0]);
        console.log(res)

    }catch(error){
        console.log(error);
        res.status(500).json({
            error: "Internal server error occured"
        })
    }
})

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : "PAGE NOT FOUND"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})