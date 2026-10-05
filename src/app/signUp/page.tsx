"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            image: string;
        };

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Your Sign-Up Successfully!");
            redirect("/");
        }

        if (error) {
            toast.error(error.message ?? "An error occurred");
            console.log(error);
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
                            সাইন আপ
                        </h1>

                        <p className="text-sm text-base-content/60 mt-2">
                            নতুন অ্যাকাউন্ট তৈরি করুন
                        </p>
                    </div>

                    {/* Email Sign Up Form */}
                    <form onSubmit={onSubmit}>
                        <fieldset className="space-y-4">

                            {/* Name */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        নাম
                                    </span>
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    placeholder="আপনার নাম লিখুন"
                                    className="input input-bordered w-full focus:border-red-500"
                                    required
                                />
                            </div>

                            {/* Image */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium">
                                        Image URL
                                    </span>
                                </label>

                                <input
                                    name="image"
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="input input-bordered w-full focus:border-red-500"
                                />
                            </div>

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
                                        পাসওয়ার্ড
                                    </span>
                                </label>

                                <input
                                    name="password"
                                    type="password"
                                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                                    className="input input-bordered w-full focus:border-red-500"
                                    required
                                />
                            </div>

                            {/* Sign Up Button */}
                            <button
                                type="submit"
                                className="btn w-full bg-red-600 hover:bg-red-700 text-white border-none mt-2 rounded-lg"
                            >
                                সাইন আপ করুন
                            </button>
                        </fieldset>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="h-px flex-1 bg-base-300"></div>

                        <span className="text-xs text-base-content/50 font-medium">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-base-300"></div>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="btn w-full bg-base-100 hover:bg-base-300 text-base-content border border-base-300 rounded-lg flex items-center justify-center gap-3 shadow-sm"
                    >
                        <Image
                            src="/search.png"
                            alt="Google"
                            width={20}
                            height={20}
                        />

                        <span className="font-medium">
                            গুগল দিয়ে সাইন আপ করুন
                        </span>
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-sm mt-6 text-base-content/70">
                        অ্যাকাউন্ট আছে?{" "}
                        <a
                            href="/signIn"
                            className="text-red-600 hover:text-red-700 font-semibold"
                        >
                            সাইন ইন করুন
                        </a>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
