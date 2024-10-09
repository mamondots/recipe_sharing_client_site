/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
// import JoditEditor from "jodit-react";
import { GoTrash } from "react-icons/go";
import { FiPlus } from "react-icons/fi";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";

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

const AddRecipeModel = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const methods = useForm();

  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  console.log(imageFiles);

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

  // const editor = useRef(null);
  // const [content, setContent] = useState("");

  // const config = {
  //   readonly: false,
  // };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      ingredients: data.ingredients.map(
        (ingredient: { value: string }) => ingredient.value
      ),
    };
    console.log(postData);
  };

  return (
    <div>
      <Button
        className="text-[12px] font-semibold px-4 py-2 
      rounded-full  
     tracking-wider bg-[#B92B27] hover:bg-[#9c2c29] text-[#fff]  cursor-pointer duration-300
     "
        onPress={onOpen}
      >
        Add Recipe
      </Button>
      <Modal
        className="rounded relative lg:top-28"
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="text-center py-2 border-b border-[#f8696991]">
                  <h2 className="text-xl font-semibold text-[#B92B27]">
                    Add Your Recipe
                  </h2>
                </div>

                <div>
                  <FormProvider {...methods}>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col gap-2"
                    >
                      <div className="flex flex-col gap-1">
                        <label>Add Title</label>
                        <input
                          {...register("title", { required: true })}
                          className="border border-[#636262] outline-none px-4 py-2 rounded w-full"
                          type="text"
                          placeholder="recipe title.."
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <h2>Images</h2>
                        <label
                          className="border border-[#636262] text-[#636262] outline-none px-4 py-2 rounded w-full"
                          htmlFor="image"
                        >
                          upload Image
                        </label>
                        <input
                          onChange={(e) => handleImageChange(e)}
                          multiple
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
                          name="content"
                          control={control}
                          render={({
                            field: { onChange, onBlur, value, ref },
                          }) => (
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
                        {/* <FXTextEditor
                          label="Recipe Content"
                          name="recipe"
                        ></FXTextEditor> */}
                      </div>

                      {/* <div>
                        <div>
                          {fields.map((field, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <div key={field.id}>
                              <input
                                {...register(`ingredients.${index}.value`)}
                                type="text"
                                placeholder="add ingidents"
                              />
                              <button onClick={() => remove(index)}>
                                remove
                              </button>
                            </div>
                          ))}
                        </div>
                        <button onClick={() => handleAddAppend()}>
                          Append
                        </button>
                      </div> */}

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
                          <div
                            key={field.id}
                            className="flex gap-2 items-center"
                          >
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
                          className="border border-[#636262] outline-none px-4 py-2 rounded w-full"
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddRecipeModel;
