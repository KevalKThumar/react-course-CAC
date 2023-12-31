import conf from '../Config/Conf'
import { Client, ID, Databases, Query, Storage } from 'appwrite'


export class Service {
    client = new Client()
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({ title,
        content,
        featuredImage,
        category,
        status,
        userId, slug }) {
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    category,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, category ,featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    category,
                    featuredImage,
                    status
                }
            )
        }
        catch (error) {
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch (error) {
            // throw error
            console.log("Error in delete :", error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite error in getPost:", error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite error in getPosts:", error)
        }
    }

}


const service = new Service()

export default service