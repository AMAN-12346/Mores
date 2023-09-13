"use client"
const TopBar = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center h-32"
      style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/04a3/a78b/521630aaef5248838da3451f8492e3be?Expires=1695600000&Signature=F5NVmKUg-RpvG5f7rlS5OJmA7C8M5S9kkSqd4xQmNWcBTea9HbTzp3J0iEZ5FkvdryeKuqYjvvZA2jtW0fuFGLeFqkYeWxDiHos1UXejHM3-O4bxasBGMw1qao~Vw0-qYpFztec7z~Zx6m5zts9sbo3U6RnoHRNqy47fiHyAHEYzMJH0GpEpR8y92NuJLYtdPAMas14O1e0hRMDfdrF~MHOptSYotWTrRTAMj5Q8GPw-KRUOZ50xg1E748zddW55buaRwrNq28SFk67LlowwduoC4QDbuSncoruOg-n7hB2IPGH3i8guFpUWqP1lxOZBn0m~DXtk1X2InMmMz9fdhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)` }}
    >
      <div className="absolute inset-0"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        
        <h1 className="text-3xl font-semibold p-1 px-8 absolute z-10">Buy</h1>
        <div className="bg-slate-600 opacity-70 rounded-3xl h-10 w-40   "></div>
        
      </div>
    </div>
  );
};
export default TopBar