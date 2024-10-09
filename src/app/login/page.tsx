import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col  border">
      <div className="text-center py-2">
        <h2 className="lg:text-xl md:text-xl sm:text-xl text-md font-bold text-[#B92B27] py-2">
          Mamon_<span>dots</span>
        </h2>
        <p>Welcome Back to Mamon_dots</p>
      </div>
      <div className="">
        <form>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Email ...." />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
