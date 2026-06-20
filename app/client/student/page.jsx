'use client'

import { authStore } from '@/app/store/authStore'
import dayjs from 'dayjs';
import { useEffect } from 'react'
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const { profile, getProfile, logout } = authStore();

  useEffect(() => {
    getProfile();
  }, [])

  const logoutProfile = async () => {
    const res = await logout();
    if (res?.success) {
      toast.success('Logout successful')
      window.location.reload();
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-5 dark:bg-black">
      <div className="relative bg-linear-to-br from-purple-50 to-emerald-50 dark:from-slate-800 dark:to-slate-950 flex flex-col items-center md:p-10 p-5 rounded-2xl shadow-lg shadow-black/40 max-w-2xl w-full border border-slate-200 dark:border-slate-700 dark:shadow-white/20 ">

        <h1 className='text-3xl font-semibold capitalize bg-linear-to-br from-rose-600 to-sky-600 dark:from-rose-400 dark:to-sky-300 bg-clip-text text-transparent '>Welcome, {profile?.name}</h1>

        <p className='mt-2 font-medium'>Student ID : {profile?.studentId}</p>
        <p className='text-sm text-slate-700 dark:text-slate-300'>Registration Date : {dayjs(profile?.createdAt).format('DD MMM YYYY, hh:mm A')}</p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5 w-full">

          <div className="flex flex-col gap-1 md:col-span-2">
            <p className='font-medium text-slate-600 dark:text-slate-300'>Full Name</p>
            <div className="border border-slate-300 dark:border-slate-600 py-2 px-2 capitalize rounded-lg bg-zinc-50 dark:bg-slate-800">{profile?.name || "Full Name"}</div>
          </div>

          <div className="flex flex-col gap-1">
            <p className='font-medium text-slate-600 dark:text-slate-300'>Village</p>
            <div className="border border-slate-300 dark:border-slate-600 py-2 px-2 capitalize rounded-lg bg-zinc-50 dark:bg-slate-800">{profile?.village || "Village"}</div>
          </div>

          <div className="flex flex-col gap-1">
            <p className='font-medium text-slate-600 dark:text-slate-300'>State</p>
            <div className="border border-slate-300 dark:border-slate-600 py-2 px-2 capitalize rounded-lg bg-zinc-50 dark:bg-slate-800">{profile?.state || "State"}</div>
          </div>

          <div className="flex flex-col gap-1">
            <p className='font-medium text-slate-600 dark:text-slate-300'>District</p>
            <div className="border border-slate-300 dark:border-slate-600 py-2 px-2 capitalize rounded-lg bg-zinc-50 dark:bg-slate-800">{profile?.district || "District"}</div>
          </div>

          <div className="flex flex-col gap-1">
            <p className='font-medium text-slate-600 dark:text-slate-300'>Monthly Fee</p>
            <div className="border border-slate-300 dark:border-slate-600 py-2 px-2 capitalize rounded-lg bg-zinc-50 dark:bg-slate-800">{profile?.monthlyFee || "Monthly Fee"}</div>
          </div>

        </div>

        <div className="w-full mt-7">
          <button onClick={logoutProfile} className="border border-slate-300 dark:border-slate-600 hover:bg-black/80 dark:hover:bg-slate-800 transition-all hover:text-white py-2 px-5 rounded-lg float-right active:scale-80">Logout</button>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage