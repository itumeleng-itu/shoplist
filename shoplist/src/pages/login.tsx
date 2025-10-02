import React from "react";
import imej from "../assets/images/Blurred Shopping Cart.png"
import LoginForm from "@/components/ui/form";

export default function Login(){
    return(
        <div className="flex gap-3 h-screen overflow-hidden">
            <div className="flex-1 h-full overflow-hidden p-1">
                <img className="h-full w-full object-cover rounded-xl" src={imej} alt="cart" />
            </div>
            <div className="flex-1 h-full overflow-hidden p-4">
                <div className="m-6 p-4">
                    <h2 className="font-bold text-3xl ml-26">Welcome back to ListWise</h2>
                    <p className="text-gray-600 text-sm mb-5 ml-33">Create and track different shopping lists seamlessly.</p>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}