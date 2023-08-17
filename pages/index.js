import Image from "next/image";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const  Home = () => {
  console.log("hello")
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl"> index </h1>
    </div>
  );
}

export default Home;
