"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Your Sign In Successfully!");
        }

        if (error) {
            toast.error(error.message ?? "Sign in failed");
        }
    };

    const handleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Main Card */}
                <div className="bg-base-200 rounded-2xl shadow-lg border border-base-300 p-6 sm:p-8">

                    {/* Heading */}
                    <div className="text-center mb-7">
                        <h1 className="text-3xl font-bold text-red-600">
                            সাইন ইন
                        </h1>

                        <p className="text-sm text-base-content/60 mt-2">
                            আপনার অ্যাকাউন্টে প্রবেশ করুন
                        </p>
                    </div>

                    {/* Email Sign In Form */}
                    <form onSubmit={onSubmit}>
                        <fieldset className="space-y-4">

                            {/* Email */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        ইমেইল
                                    </span>
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="input input-bordered w-full focus:border-red-500"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        পাসওয়ার্ড
                                    </span>
                                </label>

                                <input
                                    name="password"
                                    type="password"
                                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                                    className="input input-bordered w-full focus:border-red-500"
                                    required
                                />
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="btn w-full bg-red-600 hover:bg-red-700 text-white border-none mt-2 rounded-lg"
                            >
                                সাইন ইন করুন
                            </button>
                        </fieldset>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-3">
                        <div className="h-px flex-1 bg-base-300"></div>

                        <span className="text-xs text-base-content/50 font-medium">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-base-300"></div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        onClick={handleSignIn}
                        type="button"
                        className="btn w-full bg-base-100 hover:bg-base-300 text-base-content border border-base-300 rounded-lg flex items-center justify-center gap-3 shadow-sm"
                    >
                        <Image
                            src="/search.png"
                            alt="Google"
                            width={20}
                            height={20}
                        />

                        <span className="font-medium">
                            গুগল দিয়ে সাইন ইন করুন
                        </span>
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm mt-6 text-base-content/70">
                        অ্যাকাউন্ট নেই?{" "}
                        <a
                            href="/signUp"
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            সাইন আপ করুন
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignInPage;
