import React from "react";

const ProfileForm = () => {
  return (
    <div className="w-max" >
        <h1 className="ms-4 md:ms-10 py-3 text-xl md:text-2xl lg:text-3xl">Profile Setting</h1>
    
    <div className=" m-5 flex max-sm:flex-col">
        
        
      <div className="border-black p-10 me-2  bg-white rounded">
        <img
          className="rounded-full"
          src="http://localhost:3000/_next/image?url=https%3A%2F%2Fs3-alpha-sig.figma.com%2Fimg%2F22aa%2F3b45%2F6260f5c114826d26f0063851b8322353%3FExpires%3D1693785600%26Signature%3DX0scVn4d3eneQGiJHCUCFGZATEWF3GA5fsx4MNMeYtFzwC7m~4KjS4HFh1Hw6YgaFLPLwVN5D~4BnNwVMpFSmSNTHiRn2CuGV5pqMCMaIHKNN0QXkzadNgpG-EQRUSOw~Dw7gcuUuaHJZ1Fb2YAiJg-vZZV3EA6x5RK2sAzDQ0nFt22F3nysZDJDgVIvsjoBFOUfRzQ4o3xM6VXe12mVZLgtRA4zaMCOIHd6QIoXuN01aIbF8r60ksLtoinf6NG3yQBew1CgRyESShuI7YjrgtLGIzKsvnOZc5EKaGSpuYIqS60SAPkwrJ~tgvYH2rVA38gRSAYEBDrRtMh8TaAv8A__%26Key-Pair-Id%3DAPKAQ4GOSFWCVNEHN3O4&w=128&q=75"
          alt=""
        />
        <div>
            <button className="text-sm p-4 font-semibold  border-slate-600 rounded" >Choose Image</button>
        </div>
      </div>
        <div className="h-full  bg-white p-10 rounded">
        <form action="" className="b-10 text-lg">
          <div className="flex items-center justify-between max-md:flex-col max-md:items-start">
            <label htmlFor="" className="m-3">
              Name
            </label>
            <input type="text" className="  border border-indigo-400 rounded " />
          </div>
          <br />
          <div className="flex max-md:flex-col max-md:items-start items-center justify-between">
            <label htmlFor="" className="m-3">
              Mobile Number
            </label>
            <input type="text" className="  border border-indigo-400 rounded" />
          </div>
          <br />
          <div className="flex max-md:flex-col max-md:items-start items-center justify-between ">
            <label htmlFor="" className="m-3 ">
              Email Id
            </label>
            <input type="text" className="  border border-indigo-400 rounded" />
          </div>
          
          <br />
          <div className="flex items-center  justify-between max-md:flex-col max-md:items-start  ">
            <label htmlFor="" className="m-3 ">
              Monthly Household Income
            </label>
            <select
              name=""
              id="income"
              className="  border border-indigo-400 rounded"
            >
              <option value="">Select</option>
              <option value="">upto 7000</option>
              <option value="">7001-10000</option>
              <option value="">10001-15000</option>
              <option value="">15001-25000</option>
              <option value="">25001-40000</option>
              <option value="">above 40000</option>
            </select>
          </div>
          <br />
          <div className=" flex items-center justify-between max-md:flex-col max-md:items-start">
            <label className = "m-3"htmlFor="">Occupation</label>
            <select
              className="  border border-indigo-400 rounded "
              name=""
              id="income"
            >
              <option value="">Select</option>
              <option value="">upto 7000</option>
              <option value="">7001-10000</option>
              <option value="">10001-15000</option>
              <option value="">15001-25000</option>
              <option value="">25001-40000</option>
              <option value="">above 40000</option>
            </select>
          </div>
        </form>
        </div>
        
    </div>
    </div>
  );
};

export default ProfileForm;
