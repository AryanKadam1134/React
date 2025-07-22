/* eslint-disable no-useless-catch */
import config from './config.js';
import { ID, Client, Databases, Storage, Query } from 'appwrite';

export class AppwriteService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({userId, title, slug, content, featuredImage, status}){
        try {
            const post = await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwritePostsCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            return post
        } catch (error) {
            throw error;
        }
    }

    async updatePost(postId, {title, slug, content, featuredImage, status}){
        try {
            const post = await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwritePostsCollectionId,
                postId,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            return post;
        } catch (error) {
            throw error;
        }

    }

    async deletePost(postId) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwritePostsCollectionId,
                postId
            )
            return true
        } catch (error) {
            console.error('Error deleting post:', error);
            return   false;
        }
    }   

    async getPosts(postId) {
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwritePostsCollectionId,
                [Query.equal('id', postId)]
            );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async getAllPosts(queries = [Query.equal('status', 'published')]) {
        try {
            const posts = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwritePostsCollectionId,
                queries
            );
            return posts;
        } catch (error) {
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            const res = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file    
            )
            return res;
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('Error deleting file:', error);
            return false;
        }
    }

    async previewFile(fileId) {
        try {
            const res = await this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            );
            return res;
        } catch (error) {
            throw error;
        }
    }

}

const appwriteService = new AppwriteService();

export default appwriteService;