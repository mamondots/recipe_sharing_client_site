// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";
// import axiosInstance from "@/lib/AxiosInstance";

// export const createPost = async (formData: FormData): Promise<any> => {
//   try {
//     const { data } = await axiosInstance.post("/recipe", formData, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to create post");
//   }
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/AxiosInstance";

export const createPost = async (formData: any): Promise<any> => {
  try {
    // Sending a POST request to "/recipe" endpoint with JSON data
    const { data } = await axiosInstance.post("/recipe", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error: any) {
    if (error.response) {
      console.log("Error response data:", error.response.data);
      console.log("Error response status:", error.response.status);
      console.log("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.log("Error request:", error.request);
    } else {
      console.log("Error message:", error.message);
    }
    throw new Error("Failed to create post");
  }
};

export const getRecipes = async () => {
  try {
    const { data } = await axiosInstance.get("/recipe");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/recipe/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch recipe with id ${id}: ${error.message}`);
  }
};
