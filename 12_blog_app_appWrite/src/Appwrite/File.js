import conf from "../Config/Conf";
import {
    Client, Storage, ID
} from 'appwrite'



export class FileServices {
    client = new Client()
    storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.storage = new Storage(this.client)
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error in uplodeFile:", error)
        }
    }

    async deleteFile(fileId) {
        try {

            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )

            return true
        } catch (error) {
            console.log("error in deleteFile:", error)
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const fileServices = new FileServices()

export default fileServices