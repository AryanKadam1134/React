/* eslint-disable no-useless-catch */
import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new  Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                // Call another method
                return this.login({email, password});
            } else {
                throw new Error("Account creation failed");
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }   

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    };
    
}

const authService = new AuthService();

export default authService;