/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect } from "react";
import "./index.css";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const { handleSubmit, register } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPending, isSuccess]);
  return (
    <div className="logBg py-20">
      <div className="flex items-center justify-center lg:px-0 md:px-0 sm:px-0 px-12">
        <div className="lg:w-2/5 md:w-3/4 sm:w-3/4 w-full lg:px-0 px-12 bg-[#fff] border border-[#B92B27]">
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-[#B92B27]">
              Mamon_<span>dots</span>
            </h2>
            <p className="text-[#646464] font-semibold py-2 quete">
              A place to share recipes and know the cooked better
            </p>
          </div>
          <div className="lg:px-12 pb-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#5f5f5f]">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="border outline-none px-4 py-2 rounded"
                  type="email"
                  placeholder="Enter Email ...."
                />
              </div>

              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-semibold text-[#5f5f5f]">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className="border outline-none px-4 py-2 rounded"
                  type="password"
                  placeholder="Enter password ...."
                />
                <div className="right-0 absolute bottom-[-28px]">
                  <p className="text-sm font-semibold text-[#5f5f5f] cursor-pointer hover:text-[#B92B27] duration-300">
                    Forget Password
                  </p>
                </div>
              </div>

              <div className="py-6 mt-6">
                <input
                  className="py-2 text-center bg-[#2E69FF] hover:bg-[#3259bb] duration-300 rounded text-[#fff] font-semibold cursor-pointer w-full"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>

            <div>
              <Link href="/register" className="text-center cursor-pointer">
                Do not have an account?{" "}
                <span className="text-[#B92B27]">Sign up for free</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
