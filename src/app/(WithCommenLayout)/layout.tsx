import Navbar from "@/components/UI/NavBar/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-[#F4F2EE]">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default layout;
