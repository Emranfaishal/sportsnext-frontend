'use client'

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { FaGraduationCap, FaPencil } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Profile = () => {
    const userData = authClient?.useSession();
    console.log("Session:", userData);
    const user = userData.data?.user;
    console.log("user", user);
    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const url = e.target.url.value;

        const { data, error } = await authClient.updateUser({
            name: name,
            image: url,
        })
        if (error) {
            toast.error("Something went wrong!");
            return;
        }
        toast.success("Profile Update Successfully");

    }
    return (
        <div className='max-w-5xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-3  gap-10 my-10'>

            <div className='border border-gray-200 rounded-2xl shadow-2xl lg:col-span-1 space-y-3 p-2'>
                <div>
                    <div className='flex justify-center items-center '>
                        <Avatar className='h-35 w-35 mt-5 border-4 border-[#FD2951] shadow-2xl p-2'>
                            <Avatar.Image
                                alt={user?.name}
                                src={user?.image}
                                referrerPolicy='no-referrer'
                            />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                    </div>
                </div>

                <div className='text-center'>
                    <h3 className='text-2xl font-bold text-[#0B1C30]'>{user?.name}</h3>
                    <p className='text-xs text-[#777587]'>{user?.email}</p>
                </div>

                <div className='p-4 space-y-3'>
                    <p className='flex items-center justify-center p-2 bg-indigo-100 rounded-xl gap-3 text-sm'>
                        <FaGraduationCap size={20} className="text-[#FD2951]" />Your Account is active</p>
                    <p className='flex items-center justify-center p-2 bg-indigo-100 rounded-xl gap-3 text-sm'>
                        <RiVerifiedBadgeFill size={20} className="text-[#FD2951]" />
                        Active Now</p>
                </div>
                <div className='p-4'>
                    <button className='btn bg-[#FD2951] text-white rounded-xl w-full'><FaPencil />Update Information</button>
                </div>
            </div>


            <div className='col-span-1 lg:col-span-2 p-6 border border-gray-200 shadow space-y-3 rounded-2xl'>
                <form onSubmit={handleUpdate}>
                    <div>
                        <h2 className='text-[#0B1C30] text-2xl font-semibold'>Profile Settings</h2>
                        <p className='text-sm text-[#777587]'>Manage your public identity and digital presence across SkillSphere.</p>
                    </div>
                    <div className='flex justify-center flex-col items-center gap-5'>
                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend text-xs font-semibold text-[#464555]">Name</legend>
                            <input
                                type="text"
                                name='name'
                                className="input bg-base-200 w-full border-none"
                                placeholder="Enter Name" />
                        </fieldset>

                        <fieldset className="fieldset w-full">
                            <legend className="fieldset-legend font-semibold text-[#464555]">Image URL</legend>
                            <input
                                name='url'
                                type="text"
                                className="input  bg-base-200 w-full border-none"
                                placeholder="Enter Image URL" />
                            <p className="label text-xs text-gray-400">Provide a direct link to your preferred avatar image.</p>
                        </fieldset>
                    </div>

                    <div className='grid grid-cols-3 gap-2 px-4 pt-4 border-t border-gray-100 mt-4'>
                        <div className='text-center'>
                            <p className='text-lg font-bold text-[#FD2951]'>15+</p>
                            <p className='text-[10px] text-gray-500 uppercase'>Projects</p>
                        </div>
                        <div className='text-center border-x border-gray-100'>
                            <p className='text-lg font-bold text-[#FD2951]'>200+</p>
                            <p className='text-[10px] text-gray-500 uppercase'>Commits</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-lg font-bold text-[#FD2951]'>5</p>
                            <p className='text-[10px] text-gray-500 uppercase'>Rank</p>
                        </div>
                    </div>
                    <div className='px-6 py-1 pt-5'>
                        <p className='text-[11px] text-[#FD2951] font-semibold bg-indigo-50 py-1 rounded-full uppercase text-center'>
                            🚀 Passionate Web Developer
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 sm:flex-row justify-between mt-5 items-center'>
                        <button
                            type='reset'
                            className='btn btn-outline w-full sm:w-auto'>Reset</button>
                        <button
                            type='submit'
                            className='btn bg-[#FD2951] rounded-xl text-white w-full sm:w-auto'><FaPencil />Update Information</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Profile;