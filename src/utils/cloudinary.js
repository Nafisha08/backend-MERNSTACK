import { v2 as cloudinary } from "cloudinary"
import fs from "fs"//fs is file system node.js in file system is library ko import nhi karna padha ye node ke sath bydefault ati h
cloudinary.config({
    cloud_name: Process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
const uploadOnCloudinary = async (localFilePath) => {
     try {
         if (!localFilePath) return null
         //upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath, {
             resource_type:"auto"
         })
         //file has  been upload successfull
         console.log("file is uploaded on cloudinary", 
             response.url)
         return response;
     } catch (error) {
         fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed
         return null;
     }
 }


 // it is temporary
// const uploadResult = await cloudinary.v2.uploader
//     .upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
//         { public_id: 'shoes', },
       
//         function (error, result) {
//             console.log(result)
//         }
//     );
//     .catch((error) => {
//         console.log(error);
//     });

// console.log(uploadResult);

export {uploadOnCloudinary}

