/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { createPost, getRecipeById, getRecipes } from "@/service/PostRecipe";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetRecipes = () => {
  return useQuery({
    queryKey: ["GET_RECIPES"],
    queryFn: async () => await getRecipes(),
  });
};

export const useGetRecipe = (id: string) => {
  return useQuery({
    queryKey: ["GET_RECIPE", id],
    queryFn: async () => await getRecipeById(id),
    enabled: !!id,
  });
};
