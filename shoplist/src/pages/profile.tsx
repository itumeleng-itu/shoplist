import React from "react"
import { useNavigate } from "react-router-dom"
import profImg from "../assets/images/download.jpg"
import ver from "../assets/images/icons8-verified-account-96-removebg-preview.png"

export default function Profile() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8"> 
            <div className="max-w-80 w-full ">
                <div className="bg-black rounded-4xl shadow-3xl overflow-hidden">

                    <div className="relative h-80 bg-gradient-to-b from-transparent to-black">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-full  overflow-hidden">
                                <img className="h-110 w-full object-cover" src={profImg} alt="profile" />
                            </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
                    </div>

                    <div className="p-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-2xl font-bold">john doe</h2>
                            <img className="h-8 w-8" src={ver} alt="" />
                        </div>
                        
                        {/* List count */}
                        <p className="text-gray-300 text-sm mb-1">12 lists made</p>
                        
                        {/* Email */}
                        <p className="text-gray-300 text-sm">johndoe@gmail.com</p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-xl transition-colors"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}
