"use client";
import CreatePost from "@/components/UI/CreatePost/CreatePost";
import PostCard from "@/components/UI/PostCard/PostCard";
import UserSideBar from "@/components/UI/UserSideBar/UserSideBar";
import { useGetRecipes } from "@/hooks/post.hook";
import { TRecipe } from "@/types";

export default function Home() {
  const { data: recipes } = useGetRecipes();
  console.log(recipes);
  return (
    <div className="relative top-16 lg:px-28 md:px-20 sm:px-16 px-4 py-2 bg-[#F4F2EE]">
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <div className="lg:w-5/6  flex flex-wrap lg:flex-nowrap gap-6">
          <div className="lg:w-1/3">
            <UserSideBar></UserSideBar>
          </div>
          <div className="lg:w-2/3">
            <CreatePost></CreatePost>

            <div className="flex flex-col gap-2 my-2">
              {recipes?.data.map((recipe: TRecipe) => (
                <PostCard key={recipe._id} recipeData={recipe}></PostCard>
              ))}
              {/* <PostCard></PostCard>
              <PostCard></PostCard> */}
            </div>
          </div>
        </div>
        <div className="w-2/6 border hidden lg:flex md:flex">3</div>
      </div>
    </div>
  );
}
