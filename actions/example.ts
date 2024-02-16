import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import os from 'os';
var cloudinary = require('cloudinary').v2;
import { revalidatePath } from 'next/cache';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadPhotos(formData: any, folder: string) {
    try {
        const files = formData.getAll('files');
        const newFiles = await Promise.all(files.map(async (file: any) => {
            const data = await file.arrayBuffer();
            const buffer = Buffer.from(data);
            const name = uuidv4();
            const ext = file.type.split('/')[1];
            const tempDir = os.tmpdir();
            const uploadDir = path.join(tempDir, `/${name}.${ext}`);
            console.log(tempDir);
            await fs.writeFile(uploadDir, buffer);
            return { filePath: uploadDir, fileName: file.name };
        }));
        const photos = await Promise.all(newFiles.map(async (file: any) => {
            const result = await cloudinary.v2.uploader.upload(file.filePath, {
                folder: folder,
            });
            return result;
        }));
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

// To upload photos to different folders, just call the function with different folder names
uploadPhotos(formData, 'nextjs-server-actions');
uploadPhotos(formData, 'Home-Photos');
uploadPhotos(formData, 'Home-Photos/Best-Activities-To-Try-Photos');