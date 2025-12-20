"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lamaSkyLight via-white to-lamaPurpleLight">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
        
        {/* Left Side - Branding */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-between bg-gradient-to-br from-lamaPurple to-lamaSky relative overflow-hidden hidden md:flex">
          <div className="absolute top-0 left-0 w-full h-full bg-black/5 z-0" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <Image src="/logo.png" alt="SchooLama Logo" width={32} height={32} />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-tight">SchooLama</h1>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Empower your<br />educational journey.
            </h2>
            <p className="text-gray-700 text-lg">
              Manage students, teachers, and parents in one unified platform designed for modern schools.
            </p>
          </div>
          
          <div className="relative z-10 text-sm text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} SchooLama. All rights reserved.
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-lamaYellow rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-lamaSky rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <SignIn.Root>
            <SignIn.Step name="start" className="w-full max-w-md mx-auto space-y-6">
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500">Please sign in to your account to continue</p>
              </div>

              <Clerk.GlobalError className="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-200" />
              
              <Clerk.Field name="identifier" className="flex flex-col gap-2 relative group">
                <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                  Username
                </Clerk.Label>
                <div className="relative">
                  <Clerk.Input
                    type="text"
                    required
                    className="w-full p-3 pl-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                    placeholder="Enter your username"
                  />
                </div>
                <Clerk.FieldError className="text-xs text-red-500 mt-1" />
              </Clerk.Field>

              <Clerk.Field name="password" className="flex flex-col gap-2 relative group">
                <div className="flex justify-between items-center">
                  <Clerk.Label className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-lamaPurple">
                    Password
                  </Clerk.Label>
                  <a href="#" className="text-xs text-lamaPurple hover:text-purple-700 transition-colors">Forgot password?</a>
                </div>
                <div className="relative">
                  <Clerk.Input
                    type="password"
                    required
                    className="w-full p-3 pl-4 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-transparent transition-all shadow-sm"
                    placeholder="Enter your password"
                  />
                </div>
                <Clerk.FieldError className="text-xs text-red-500 mt-1" />
              </Clerk.Field>

              <SignIn.Action
                submit
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Sign In
              </SignIn.Action>
              
              <p className="text-center text-sm text-gray-500 mt-6">
                Don&apos;t have an account?{" "}
                <a href="/sign-up" className="text-lamaPurple font-semibold hover:underline">
                  Sign up
                </a>
              </p>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
