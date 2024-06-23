'use client';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import userManagementService from "@/features/login/services/user_management_service";


export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    userManagementService.auth.authStateReady().then(() => {
        userManagementService.isLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                if (document.referrer.includes(window.location.host)) {
                    router.back();
                } else {
                    router.push('/routines');
                }
            }
        });

    });

    const handleLogin = async () => {
        try {
            console.log("Logging in with email:", email);
            await userManagementService.login(email, password);
            if (document.referrer.includes(window.location.host)) {
                router.back();
            } else {
                // No referrer from the same site or no history, navigate to a default route
                router.push('/routines'); // Change '/routines' to your desired default route
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="flex h-screen w-screen">
                <div className="flex-1 flex items-center justify-center">
                    <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                            <h3 className="text-xl font-semibold">Welcome at Routines </h3>
                            <p className="text-sm text-gray-500">Use your email and password to sign in</p>
                        </div>
                        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
                            <div>
                                <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Email Address</label>
                                <input id="email" placeholder="" onChange={(e) => setEmail(e.target.value)} autoComplete="email" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" type="email" name="email" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-xs text-gray-600 uppercase">Password</label>
                                <div className="relative mt-1">
                                    <input id="password" required onChange={(e) => setPassword(e.target.value)} className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm" type={showPassword ? "text" : "password"} name="password" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" onClick={handleLogin} className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none ">Sign in<span className="sr-only" aria-live="polite" role="status">Submit form</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </main >

    );
}
