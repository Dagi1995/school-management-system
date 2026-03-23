"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-inter">
      {/* LEFT: Branding & Image */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-between bg-lamaPurple p-12 overflow-hidden">
        <div className="relative z-10 flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold text-white tracking-tight">Tibeb School</span>
        </div>
        <div className="relative z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-bold text-white leading-tight">Empower the Future of Education</h1>
          <p className="text-lg text-white/80">Manage your school efficiently with our all-in-one platform designed for teachers, students, and administrators.</p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lamaSky/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* RIGHT: Auth Form */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white/50 backdrop-blur-xl">
        <div className="w-full max-w-[440px] space-y-8">
          <div className="text-center space-y-2 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h2>
            <p className="text-sm text-slate-500">Sign in to your account to continue</p>
          </div>

          <SignIn.Root>
            <SignIn.Step
              name="start"
              className="space-y-6 rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <div className="grid grid-cols-2 gap-4">
                <Clerk.Connection
                  name="google"
                  className="flex items-center justify-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
                >
                  <Clerk.Icon className="h-5 w-5" />
                  Google
                </Clerk.Connection>
                <Clerk.Connection
                  name="github"
                  className="flex items-center justify-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
                >
                  <Clerk.Icon className="h-5 w-5" />
                  GitHub
                </Clerk.Connection>
              </div>

              <div className="relative flex items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="mx-4 flex-shrink-0 text-xs text-slate-400 uppercase tracking-wider">Or continue with email</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <div className="space-y-4">
                <Clerk.Field name="identifier" className="space-y-2">
                  <Clerk.Label className="text-sm font-medium text-slate-700">Email address</Clerk.Label>
                  <Clerk.Input
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lamaPurple focus:bg-white focus:ring-2 focus:ring-lamaPurple/20"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Clerk.FieldError className="text-xs text-red-500" />
                </Clerk.Field>

                <Clerk.Field name="password" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Clerk.Label className="text-sm font-medium text-slate-700">Password</Clerk.Label>
                    <a href="#" className="text-xs font-medium text-lamaPurple hover:text-lamaPurple/80 transition">Forgot password?</a>
                  </div>
                  <Clerk.Input
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lamaPurple focus:bg-white focus:ring-2 focus:ring-lamaPurple/20"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <Clerk.FieldError className="text-xs text-red-500" />
                </Clerk.Field>
              </div>

              <SignIn.Action
                submit
                className="w-full rounded-xl bg-lamaPurple px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lamaPurple/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:ring-offset-2"
              >
                Sign In
              </SignIn.Action>

              <div className="text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <a href="/sign-up" className="font-semibold text-lamaPurple transition hover:text-lamaPurple/80">
                  Sign up
                </a>
              </div>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
}
