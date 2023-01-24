import S3 from 'aws-sdk/clients/s3.js'
import { v4 as uuid } from 'uuid'


const s3Upload2 = async (file) => {
    const s3 = new S3()
    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${uuid()}}-${file.originalname}`,
        Body: file.buffer,
    }
    const result = await s3.upload(param).promise()
    return result
}

export default s3Upload2



