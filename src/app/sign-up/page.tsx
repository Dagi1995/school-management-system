"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-inter">
      {/* LEFT: Branding & Image */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-between bg-lamaSky p-12 overflow-hidden">
        <div className="relative z-10 flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold text-slate-800 tracking-tight">Tibeb School</span>
        </div>
        <div className="relative z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">Start Your Journey Today</h1>
          <p className="text-lg text-slate-700">Join our community to access a world-class school management system designed for excellence.</p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lamaPurple/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* RIGHT: Auth Form */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white/50 backdrop-blur-xl overflow-y-auto">
        <div className="w-full max-w-[440px] space-y-8 py-8">
          <div className="text-center space-y-2 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Create an account</h2>
            <p className="text-sm text-slate-500">Sign up to get started</p>
          </div>

          <SignUp.Root>
            <SignUp.Step
              name="start"
              className="space-y-6 rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <Clerk.GlobalError className="text-sm text-red-500" />

              <div className="space-y-4">
                <Clerk.Field name="emailAddress" className="space-y-2">
                  <Clerk.Label className="text-sm font-medium text-slate-700">Email address</Clerk.Label>
                  <Clerk.Input
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lamaSky focus:bg-white focus:ring-2 focus:ring-lamaSky/20"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <Clerk.FieldError className="text-xs text-red-500" />
                </Clerk.Field>

                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label className="text-sm font-medium text-slate-700">Password</Clerk.Label>
                  <Clerk.Input
                    className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-lamaSky focus:bg-white focus:ring-2 focus:ring-lamaSky/20"
                    type="password"
                    placeholder="Create a password"
                  />
                  <Clerk.FieldError className="text-xs text-red-500" />
                </Clerk.Field>
              </div>

              <SignUp.Action
                submit
                className="w-full rounded-xl bg-lamaSky px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-lamaSky/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-lamaSky focus:ring-offset-2"
              >
                Sign Up
              </SignUp.Action>

              <div className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <a href="/sign-in" className="font-semibold text-lamaSky transition hover:text-lamaSky/80">
                  Sign in
                </a>
              </div>
            </SignUp.Step>
          </SignUp.Root>
        </div>
      </div>
    </div>
  );
}
