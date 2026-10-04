const SignUpPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-start bg-base-100">
            <div className="w-full max-w-md px-4 pt-6">
                <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
                    সাইন আপ
                </h1>
                <form className="bg-base-200 p-5 rounded-lg">
                    <fieldset className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">নাম</span>
                            </label>

                            <input
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                            />
                        </div>
                        {/* Image */}
                        <div>
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>

                            <input
                                name="image"
                                type="url"
                                className="input input-bordered w-full"
                            />
                        </div>
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
                            সাইন আপ করুন
                        </button>

                    </fieldset>

                    {/* Login */}
                    <p className="text-center text-sm mt-4">
                        অ্যাকাউন্ট আছে?{" "}
                        <a href="/signIn" className="text-red-600 font-medium">
                            সাইন ইন করুন
                        </a>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default SignUpPage;