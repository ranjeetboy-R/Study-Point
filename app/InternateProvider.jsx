'use client'

import { useEffect, useState } from 'react'

const InternateProvider = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [showMsg, setShowMsg] = useState(false);

    useEffect(() => {
        setIsOnline(navigator.onLine);

        const online = () => {
            setIsOnline(true);
            setShowMsg(true);

            setTimeout(() => {
                setShowMsg(false);
            }, 3000);
        }

        const offline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", online);
        window.addEventListener("offline", offline);

        return () => {
            window.removeEventListener("online", online);
            window.removeEventListener("offline", offline);
        };

    }, [])

    return (
        <>
            {
                showMsg &&
                <div className="fixed top-0 left-0 right-0 bg-green-600 text-white py-2 w-full text-center">Internate Connected</div>
            }
            {
                !isOnline &&

                <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black/30 backdrop-blur-sm flex items-center justify-center p-5">
                    <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 text-center">

                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-10 h-10 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.111 16.404a5 5 0 117.778 0M12 20h.01"
                                />
                            </svg>
                        </div>

                        <h1 className="text-3xl font-bold text-slate-800 mb-2">
                            Library Point
                        </h1>

                        <p className="text-xl font-semibold text-slate-700 mb-3">
                            You're Offline
                        </p>

                        <p className="text-slate-500 leading-relaxed mb-6">
                            It looks like your internet connection has been lost.
                            Please check your network connection and try again.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                            <p className="text-sm text-slate-600">
                                Some features may be unavailable until your connection is restored.
                            </p>
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300"
                        >
                            Retry Connection
                        </button>

                    </div>
                </div>
            }

        </>
    )
}

export default InternateProvider