"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

type RegisterFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterFormValues>()
  const navigate = useNavigate()

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register submitted:", data)
    // 👉 send data to backend for registration
    navigate('/login')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-sm mx-auto mt-10"
    >
      {/* Name */}
      <div className="grid gap-2">
        <label className="w-24 text-sm text-start font-medium">Username</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border rounded-lg p-2"
          placeholder="Enter your name"
        />
      </div>

      {/* Email */}
      <div className="grid gap-2">
        <label className="w-24 text-sm text-start font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-lg p-2"
          placeholder="Enter your email"
        />
      </div>

      {/* Password */}
      <div className="grid gap-2">
        <label className="w-24 text-sm text-start font-medium">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full border rounded-lg p-2"
          placeholder="Enter your password"
        />
      </div>

      {/* Confirm Password */}
      <div className="grid gap-2">
        <label className="w-30 text-sm text-start font-medium">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full border rounded-lg p-2"
          placeholder="Re-enter your password"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-black text-white p-2 rounded"
      >
        Sign Up
      </button>

      {/* Navigation */}
      <div className="gap-2">
        <p className="text-sm text-start font-medium text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
        </p>
      </div>
    </form>
  )
}
