'use client'

import Loading from '@/app/components/Loading';
import { authStore } from '@/app/store/authStore';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

const LoginPage = () => {

    const { auth, loading } = authStore();
    const router = useRouter();

    const [role, setRole] = useState('student');

    const emptyData = {
        studentId: '',
        adminId: '',
        password: '',
        role
    };

    const [formData, setFormData] = useState(emptyData);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    useEffect(() => {
        setFormData(prev => ({
            ...prev, role
        }))
    }, [role])

    const formSubmit = async (e) => {
        e.preventDefault();

        const res = await auth(formData, 'login');

        if (res?.success) {
            if (formData.role === 'student') router.replace('/client/student');
            if (formData.role === 'admin') router.replace('/client/admin');
        }
    }

    return (
        <div className="flex items-center justify-center h-screen p-5">
            <div className="max-w-lg w-full p-5 shadow-lg shadow-black/50 border border-slate-200 dark:border-slate-600 dark:bg-slate-900 rounded-2xl flex flex-col">
                <h1 className='text-2xl text-center font-semibold'>Welcome Back | Study Point Login</h1>

                <p className='text-center mt-1 text-slate-700 dark:text-slate-300 font-medium text-sm'>Sign in to your Study Point account to manage your membership</p>

                <div className="grid grid-cols-2 gap-7 mt-5 w-full">
                    <button
                        onClick={() => { setRole('student'); setFormData(emptyData) }} className={`${role === 'student' && 'bg-black/80 dark:bg-white dark:text-black text-white scale-105'} rounded-lg py-2 border border-slate-400 dark:border-slate-600 `}>Student Login
                    </button>

                    <button
                        onClick={() => { setRole('admin'); setFormData(emptyData) }}
                        className={`${role === 'admin' && 'bg-black/80 dark:bg-white dark:text-black text-white scale-105'} rounded-lg py-2 border border-slate-400 dark:border-slate-600`}>Admin Login
                    </button>
                </div>

                <form onSubmit={formSubmit} className="flex flex-col gap-5 mt-7">
                    <div className="flex flex-col">
                        <label className='text-slate-600 dark:text-slate-400 font-medium'>{role === 'student' ? 'Student Id' : 'Admin Id'}</label>

                        <input
                            required
                            onChange={(e) => inputChange(e)}
                            type="text"
                            value={role === 'student' ? formData?.studentId || '' : formData?.adminId || ''}
                            name={role === 'student' ? 'studentId' : 'adminId'}
                            placeholder={role === 'student' ? 'Enter student id' : 'Enter admin id'}
                            className="border border-slate-400 p-2 mt-2 rounded-lg hover:border-black dark:hover:border-slate-300 dark:border-slate-500 transition-all"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className='text-slate-600 dark:text-slate-400 font-medium'>Password</label>

                        <input
                            required
                            onChange={(e) => inputChange(e)}
                            type="text"
                            value={formData?.password || ''}
                            name='password'
                            placeholder='Password'
                            className="border border-slate-400 p-2 mt-2 rounded-lg hover:border-black dark:hover:border-slate-300 dark:border-slate-500 transition-all"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className={`disabled:cursor-not-allowed disabled:opacity-50 rounded-lg py-3 mt-5 text-white bg-black/80 dark:bg-white/80 dark:hover:bg-white dark:text-black hover:bg-black/90 hover:scale-105 transition-transform flex items-center justify-center gap-3 font-semibold group overflow-hidden`}>
                        {
                            loading && <Loading />
                        }
                        Login <ArrowRight className='translate-x-70 group-hover:translate-x-0 transition-transform duration-300 size-6' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage