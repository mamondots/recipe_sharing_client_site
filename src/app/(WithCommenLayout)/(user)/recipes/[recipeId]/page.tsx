import PostCardDetails from "@/components/UI/PostCardDetails/PostCardDetails";
import UserSideBar from "@/components/UI/UserSideBar/UserSideBar";
import { getRecipeById } from "@/service/PostRecipe";

interface RecipeId {
  params: {
    recipeId: string;
  };
}

const page = async ({ params }: RecipeId) => {
  const recipe = await getRecipeById(params.recipeId);

  return (
    <div className="relative top-16 lg:px-28 md:px-20 sm:px-16 px-4 py-2 bg-[#F4F2EE]">
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        <div className="lg:w-5/6  flex flex-wrap lg:flex-nowrap gap-6">
          <div className="lg:w-1/3">
            <UserSideBar></UserSideBar>
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-2 my-2">
              <PostCardDetails recipe={recipe.data}></PostCardDetails>
            </div>
          </div>
        </div>
        <div className="w-2/6 border hidden lg:flex md:flex">3</div>
      </div>
    </div>
  );
};

export default page;
