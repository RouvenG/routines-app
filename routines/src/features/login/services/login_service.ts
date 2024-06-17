'use client';
import { initializeApp } from "firebase/app";
import { Auth, browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";


class LoginService {
    auth: Auth;

    constructor() {
        const config = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        };
        const app = initializeApp(config);
        this.auth = getAuth();

        setPersistence(this.auth, browserSessionPersistence)
    }

    async isLoggedIn() {
        return this.auth.currentUser != null;
    }


    async login(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    }
}

const loginService = new LoginService();
export default loginService;
