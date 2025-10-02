"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormValues>()
  const navigate = useNavigate()

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form submitted:", data)
    // 👉 here you would send data to your backend
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto mt-10">
      {/* Email */}
      <div className="grid gap-2">
        <label className="w-24 text-sm text-start font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {/* Password */}
      <div className="grid gap-2">
        <label className="w-24 text-start text-sm font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="flex-1 border rounded-lg p-2"
        />
      </div>
      <div className="gap-2">
        <p className="text-sm text-start">Forgot Password?</p> {/*nav*/}
      </div>

      {/* Submit */}
      <button type="submit" className="w-full bg-black text-white p-2 rounded">
        Sign in
      </button>

      <div className="gap-2">
        <p 
          className="text-sm text-start font-medium text-gray-600">Dont have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
        </p> {/*nav*/}
      </div>
    </form>
  )
}
