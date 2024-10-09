/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./index.css";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUserRegistration } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
const page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const redirect = searchParams.get("redirect");
  const { handleSubmit, register } = useForm();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    const userData = {
      ...data,
      photo: imageFiles,
    };
    formData.append("data", JSON.stringify(userData));
    for (let image of imageFiles) {
      formData.append("image", image);
    }
    handleUserRegistration(formData);
    console.log(userData);
    if (isPending) {
      <h2>loading</h2>;
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
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
                  User Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="border outline-none px-4 py-2 rounded"
                  type="text"
                  placeholder="Enter UserName ...."
                />
              </div>

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
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-semibold text-[#5f5f5f]">
                  {" "}
                  profile image
                </h2>
                <label
                  className="border outline-none px-4 py-2 rounded text-[#a1a1a1]"
                  htmlFor="image"
                >
                  Upload Image
                </label>
                <input
                  onChange={(e) => handleImageChange(e)}
                  className="hidden"
                  id="image"
                  type="file"
                />
              </div>

              {imagePreviews.length > 0 && (
                <div className="flex gap-2 my-2 flex-wrap">
                  {imagePreviews.map((imageDataUrl) => (
                    <div
                      key={imageDataUrl}
                      className="relative w-[120px] h-[120px] rounded-xl border-2 border-dashed border-default-300 p-2"
                    >
                      <img
                        alt="item"
                        className="h-full w-full object-cover object-center rounded-md"
                        src={imageDataUrl}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="py-6">
                <input
                  className="py-2 text-center bg-[#2E69FF] hover:bg-[#3259bb] duration-300 rounded text-[#fff] font-semibold cursor-pointer w-full"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>

            <div>
              <Link href="/login" className="text-center cursor-pointer">
                If you have already an account?{" "}
                <span className="text-[#B92B27]">Login for free</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
