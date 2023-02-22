import S3 from 'aws-sdk/clients/s3.js'

const replaceFileName = (fileName, newName) => {
    let fileExtension = fileName.split('.').pop();
    let newFileName = newName + '.' + fileExtension;
    return newFileName;
}

const s3Upload2 = async (file,urlId) => {
    const s3 = new S3()
    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${replaceFileName(file.originalname, urlId)}`,
        Body: file.buffer,
    }
    return await s3.upload(param).promise() 
}

export default s3Upload2



