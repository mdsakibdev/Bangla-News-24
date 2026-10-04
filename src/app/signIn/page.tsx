import React from 'react';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-start bg-base-100">
            <div className="w-full max-w-md px-4 pt-6">
                <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
                    সাইন ইন
                </h1>
                <form className="bg-base-200 p-5 rounded-lg">
                    <fieldset className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">ইমেইল</span>
                            </label>

                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>

                            <input
                                name="password"
                                type="password"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="btn w-full bg-red-600 hover:bg-red-700 text-white border-none mt-2"
                        >
                            সাইন ইন করুন
                        </button>

                    </fieldset>

                    {/* Login */}
                    <p className="text-center text-sm mt-4">

                        অ্যাকাউন্ট নেই?{" "}
                        <a href="/signUp" className="text-red-600 font-medium">
                            সাইন আপ করুন
                        </a>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default SignInPage;