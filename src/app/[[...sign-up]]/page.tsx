"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaPurpleLight via-white to-lamaSkyLight">
      <div className="w-full max-w-5xl flex flex-col md:flex-row-reverse bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
        
        {/* Right Side - Branding (Reversed for variation) */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-between bg-gradient-to-br from-lamaSky to-lamaPurple relative overflow-hidden hidden md:flex">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-0" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <Image src="/logo.png" alt="SchooLama Logo" width={32} height={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">SchooLama</h1>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Join the future<br />of education.
            </h2>
            <p className="text-gray-700 text-lg">
              Create an account to streamline your administration and enhance the learning experience.
            </p>
          </div>
          
          <div className="relative z-10 text-sm text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} SchooLama. All rights reserved.
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lamaYellow rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-lamaPurple rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000" />
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <SignUp.Root>
            <SignUp.Step name="start" className="w-full max-w-md mx-auto space-y-5">
              
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-500">Sign up to get started with SchooLama</p>
              </div>

              <Clerk.GlobalError className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-200" />
              
              <div className="flex gap-4">
                <Clerk.Field name="firstName" className="flex flex-col gap-2 relative group w-1/2">
                  <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                    First Name
                  </Clerk.Label>
                  <Clerk.Input
                    type="text"
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                    placeholder="John"
                  />
                  <Clerk.FieldError className="text-xs text-red-500 mt-1" />
                </Clerk.Field>

                <Clerk.Field name="lastName" className="flex flex-col gap-2 relative group w-1/2">
                  <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                    Last Name
                  </Clerk.Label>
                  <Clerk.Input
                    type="text"
                    required
                    className="w-full p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                    placeholder="Doe"
                  />
                  <Clerk.FieldError className="text-xs text-red-500 mt-1" />
                </Clerk.Field>
              </div>

              <Clerk.Field name="emailAddress" className="flex flex-col gap-2 relative group">
                <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                  Email Address
                </Clerk.Label>
                <Clerk.Input
                  type="email"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                  placeholder="john.doe@example.com"
                />
                <Clerk.FieldError className="text-xs text-red-500 mt-1" />
              </Clerk.Field>

              <Clerk.Field name="password" className="flex flex-col gap-2 relative group">
                <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                  Password
                </Clerk.Label>
                <Clerk.Input
                  type="password"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                  placeholder="Create a secure password"
                />
                <Clerk.FieldError className="text-xs text-red-500 mt-1" />
              </Clerk.Field>

              <SignUp.Action
                submit
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 mt-4"
              >
                Sign Up
              </SignUp.Action>
              
              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <a href="/sign-in" className="text-lamaPurple font-semibold hover:underline">
                  Sign in
                </a>
              </p>
            </SignUp.Step>
            
            <SignUp.Step name="verifications" className="w-full max-w-md mx-auto space-y-6">
               <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h2>
                <p className="text-gray-500">We've sent a verification code to your email.</p>
              </div>
              <SignUp.Strategy name="email_code">
                <Clerk.Field name="code" className="flex flex-col gap-2">
                  <Clerk.Label className="text-sm font-medium text-gray-700">Verification Code</Clerk.Label>
                  <Clerk.Input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lamaPurple" />
                  <Clerk.FieldError className="text-xs text-red-500" />
                </Clerk.Field>
                <SignUp.Action submit className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl mt-4">
                  Verify & Continue
                </SignUp.Action>
              </SignUp.Strategy>
            </SignUp.Step>
          </SignUp.Root>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
