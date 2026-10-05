"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateProfile = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newUserData = Object.fromEntries(formData.entries()) as {
            name: string;
            image: string;
        };

        try {
            setIsUpdating(true);

            const { error } = await authClient.updateUser({
                name: newUserData.name,
                image: newUserData.image,
            });

            if (error) {
                toast.error(error.message ?? "Profile update failed");
                return;
            }

            toast.success("Profile updated successfully!");

            setIsEditing(false);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setIsUpdating(false);
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">
                        Please sign in to view your profile.
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-100 px-4 py-10">

            <div className="max-w-3xl mx-auto">

                {/* Main Profile Card */}
                <div className="bg-base-200 border border-base-300 rounded-2xl shadow-lg overflow-hidden">

                    {/* Cover */}
                    <div className="h-32 sm:h-40 bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                    </div>

                    {/* Profile Content */}
                    <div className="px-5 sm:px-8 pb-8">

                        {/* Profile Image */}
                        <div className="-mt-16 sm:-mt-20 mb-5">
                            <div className="avatar">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full ring-4 ring-base-200 shadow-xl bg-base-100">

                                    <img
                                        src={
                                            user.image ||
                                            "https://placehold.co/200x200?text=User"
                                        }
                                        alt={user.name || "User profile"}
                                    />

                                </div>
                            </div>
                        </div>

                        {/* Profile Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                            <div>
                                <div className="flex items-center gap-2 flex-wrap">

                                    <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
                                        {user.name}
                                    </h1>

                                    {user.emailVerified && (
                                        <span className="badge badge-success text-white">
                                            ✓ Verified
                                        </span>
                                    )}

                                </div>

                                <p className="text-base-content/60 mt-1 break-all">
                                    {user.email}
                                </p>
                            </div>

                            {/* Edit / Cancel */}
                            {!isEditing && (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="btn btn-outline border-red-500 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white rounded-lg"
                                >
                                    Edit Profile
                                </button>
                            )}

                        </div>

                        {/* Divider */}
                        <div className="divider"></div>

                        {/* Edit Profile Form */}
                        {isEditing ? (

                            <form onSubmit={handleUpdateProfile}>

                                <div className="space-y-5">

                                    {/* Edit Section Heading */}
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Edit Profile
                                        </h2>

                                        <p className="text-sm text-base-content/60 mt-1">
                                            Update your name and profile image.
                                        </p>
                                    </div>

                                    {/* Name */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Full Name
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={user.name}
                                            required
                                            className="input input-bordered w-full focus:border-red-500"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Image URL */}
                                    <div>
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Profile Image URL
                                            </span>
                                        </label>

                                        <input
                                            type="url"
                                            name="image"
                                            defaultValue={user.image || ""}
                                            className="input input-bordered w-full focus:border-red-500"
                                            placeholder="https://example.com/image.jpg"
                                        />

                                        <p className="text-xs text-base-content/50 mt-2">
                                            Use a valid image URL.
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">

                                        <button
                                            type="submit"
                                            disabled={isUpdating}
                                            className="btn flex-1 bg-red-600 hover:bg-red-700 text-white border-none rounded-lg"
                                        >
                                            {isUpdating ? (
                                                <>
                                                    <span className="loading loading-spinner loading-sm"></span>
                                                    Updating...
                                                </>
                                            ) : (
                                                "Save Changes"
                                            )}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            disabled={isUpdating}
                                            className="btn btn-outline flex-1 rounded-lg"
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                </div>

                            </form>

                        ) : (

                            /* Account Information */
                            <div>

                                <h2 className="text-lg font-semibold mb-4">
                                    Account Information
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* Full Name */}
                                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                                        <p className="text-xs text-base-content/50 mb-1">
                                            Full Name
                                        </p>

                                        <p className="font-medium">
                                            {user.name}
                                        </p>
                                    </div>

                                    {/* Email */}
                                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                                        <p className="text-xs text-base-content/50 mb-1">
                                            Email Address
                                        </p>

                                        <p className="font-medium break-all">
                                            {user.email}
                                        </p>
                                    </div>

                                    {/* Email Status */}
                                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                                        <p className="text-xs text-base-content/50 mb-1">
                                            Email Status
                                        </p>

                                        <p
                                            className={
                                                user.emailVerified
                                                    ? "font-medium text-green-600"
                                                    : "font-medium text-red-600"
                                            }
                                        >
                                            {user.emailVerified
                                                ? "✓ Email Verified"
                                                : "✕ Email Not Verified"}
                                        </p>
                                    </div>

                                    {/* User ID */}
                                    <div className="bg-base-100 border border-base-300 rounded-xl p-4">
                                        <p className="text-xs text-base-content/50 mb-1">
                                            User ID
                                        </p>

                                        <p className="font-medium text-sm break-all">
                                            {user.id}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        )}

                        {/* Bottom Message */}
                        {!isEditing && (
                            <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-4">
                                <p className="text-sm text-red-700">
                                    Welcome back,{" "}
                                    <span className="font-semibold">
                                        {user.name}
                                    </span>
                                    ! Your account is active and ready to use.
                                </p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
