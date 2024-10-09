/* eslint-disable prefer-const */
/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
// import JoditEditor from "jodit-react";
import { GoTrash } from "react-icons/go";
import { FiPlus } from "react-icons/fi";

import { ChangeEvent, useRef, useState } from "react";
import {
  Controller,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import JoditEditor from "jodit-react";
import { useCreatePost } from "@/hooks/post.hook";

const AddRecipeModel = () => {
  const methods = useForm();

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess,
  } = useCreatePost();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const handleAddAppend = () => {
    append({ name: "ingredients", value: "" });
  };

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
    const postData = {
      ...data,
      ingredients: data.ingredients.map(
        (ingredient: { value: string }) => ingredient.value
      ),
    };
    formData.append("data", JSON.stringify(postData));
    for (let image of imageFiles) {
      formData.append("image", image);
    }
    handleCreatePost(formData);
  };

  return (
    <div className="lg:px-28 md:px-20 sm:px-16 px-4 py-2 relative top-16">
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-[#B92B27]">
          Add Your Recipe
        </h2>
        <p className="text-[#757474] py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit
          veritatis saepe!
        </p>
      </div>

      <div className="lg:px-20">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1">
              <label>Add Title</label>
              <input
                {...register("title", { required: true })}
                className="border border-[#636262] outline-none px-4 py-2 rounded w-full bg-[#fff]"
                type="text"
                placeholder="recipe title.."
              />
            </div>

            <div className="flex flex-col gap-1">
              <h2>Images</h2>
              <label
                className="border bg-[#fff] border-[#636262] text-[#636262] outline-none px-4 py-2 rounded w-full"
                htmlFor="image"
              >
                upload Image
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

            <div className="flex flex-col gap-1">
              <label>Recipe Description and Instructions</label>
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <JoditEditor
                    ref={ref}
                    value={value}
                    onBlur={(newContent) => {
                      onBlur();
                      onChange(newContent);
                    }} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                )}
              />
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-base">Add Ingredients</h1>
              <button
                className=" p-2 rounded cursor-pointer text-lg border bg-[#2E69FF] text-[#fff]"
                onClick={() => handleAddAppend()}
              >
                <FiPlus />
              </button>
            </div>

            <div className="space-y-3">
              {fields.map((field, index) => (
                <div key={field.id} className="flex gap-2 items-center">
                  <input
                    {...register(`ingredients.${index}.value`)}
                    className="border border-[#636262] outline-none px-4 py-2 rounded w-full"
                    type="text"
                    placeholder="add ingidents"
                  />
                  <button
                    className=" p-3 rounded cursor-pointer text-lg border bg-[#B92B27] text-[#fff]"
                    onClick={() => remove(index)}
                  >
                    <GoTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <label>Category</label>
              {/* <input
                          {...register("title", { required: true })}
                          className="border border-[#636262] outline-none px-4 py-2 rounded w-full"
                          type="text"
                          placeholder="recipe title.."
                        /> */}

              <select
                {...register("category", { required: true })}
                className="border bg-[#fff] border-[#636262] outline-none px-4 py-2 rounded w-full"
              >
                <option value="indian">Select category</option>
                <option value="indian">Indian</option>
                <option value="bnangladeshi">Bangladeshi</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="uk">UK</option>
              </select>
            </div>
            <div>
              <input
                className="border  bg-[#2E69FF] text-[#fff] hover:bg-[#2a4a9c] cursor-pointer outline-none px-4 py-2 rounded w-full my-2"
                type="submit"
                value="Add Recipe"
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default AddRecipeModel;
