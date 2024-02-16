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

async function savePhotosLocal(FormData: any) {
    const files = FormData.getAll('files');
    const multipleBuffersPromise = files.map(async (file: any) => {
        const data = await file.arrayBuffer();
        const buffer = Buffer.from(data);
        const name = uuidv4();
        const ext = file.type.split('/')[1];
        // const uploadDir = path.join(process.cwd(), 'public', `/${name}.${ext}`);
        // doesn't work in Vercel serverless
        const tempDir = os.tmpdir();
        const uploadDir = path.join(tempDir, `/${name}.${ext}`); // works in Vercel serverless
        console.log(tempDir);

        await fs.writeFile(uploadDir, buffer);
        return { filePath: uploadDir, fileName: file.name };
    });

    return await Promise.all(multipleBuffersPromise);
}

async function uploadPhotosToCloudinary(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'nextjs-server-actions',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadPhoto(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToCloudinary(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHome(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomePhoto(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHome(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeBestActivitiesToTry(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/Best-Activities-To-Try-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeBestActitiesToTry(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeBestActivitiesToTry(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeDestinations(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/Destination-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeDestination(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeDestinations(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeFerries(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/Ferry-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeFerry(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeFerries(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeSightSeeings(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/Sight-Seeings-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeSightSeeings(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeSightSeeings(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeTopBeaches(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/TopBeaches-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeTopBeaches(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeTopBeaches(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

async function uploadPhotosToHomeTopSellingPackages(newFiles: any) {
    const multipleUploadPromise = newFiles.map(async (file: any) => {
        const result = await cloudinary.v2.uploader.upload(file.filePath, {
            folder: 'Home-Photos/TopSellingPackages-Photos',
        });
        return result;
    });

    return await Promise.all(multipleUploadPromise);
}

export async function uploadHomeTopSellingPackages(formData: any) {
    try {
        const newFiles = await savePhotosLocal(formData);
        const photos = await uploadPhotosToHomeTopSellingPackages(newFiles);
        console.log(photos);
        newFiles.map((file: any) => fs.unlink(file.filePath));
        revalidatePath('/');
        return { msg: 'Upload successfully' };
    } catch (error: any) {
        return { errms: error.message };
    }
}

// import path from 'path';
// import fs from 'fs/promises';
// import { v4 as uuidv4 } from 'uuid';
// import os from 'os';
// var cloudinary = require('cloudinary').v2;
// import { revalidatePath } from 'next/cache';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// async function uploadPhotos(formData: any, folder: string) {
//     try {
//         const files = formData.getAll('files');
//         const newFiles = await Promise.all(files.map(async (file: any) => {
//             const data = await file.arrayBuffer();
//             const buffer = Buffer.from(data);
//             const name = uuidv4();
//             const ext = file.type.split('/')[1];
//             const tempDir = os.tmpdir();
//             const uploadDir = path.join(tempDir, `/${name}.${ext}`);
//             await fs.writeFile(uploadDir, buffer);
//             return { filePath: uploadDir, fileName: file.name };
//         }));
//         const photos = await Promise.all(newFiles.map(async (file: any) => {
//             const result = await cloudinary.v2.uploader.upload(file.filePath, {
//                 folder: folder,
//             });
//             return result;
//         }));
//         console.log(photos);
//         newFiles.map((file: any) => fs.unlink(file.filePath));
//         revalidatePath('/');
//         return { msg: 'Upload successfully' };
//     } catch (error: any) {
//         return { errms: error.message };
//     }
// }

// // To upload photos to different folders, just call the function with different folder names
// uploadPhotos(formData, 'nextjs-server-actions');
// uploadPhotos(formData, 'Home-Photos');
// uploadPhotos(formData, 'Home-Photos/Best-Activities-To-Try-Photos');










