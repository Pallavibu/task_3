import { useState } from "react";
const Input = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div className="flex justify-start  my-4 text-lg ">
        <div className="mx-4">
          <p> &lt;</p>
        </div>
        <div className="mx-auto">
          <p className="font-semibold">Edit Experience</p>
        </div>
      </div>

      <div className="bg-blue-200 flex justify-between mx-auto p-2">
        <div>
          <p className="font-medium mx-2"> Notify Network</p>
        </div>
        <div className="bg-blue-500 w-12 rounded-xl"></div>
      </div>

      <div className="flex flex-col justify-center mx-4">
        <p className="mt-8 text-base">
          Company name <span className="text-red-600">*</span>{" "}
        </p>
        <input
          type="text"
          className="border border-blue-400 rounded-md my-3 py-2"
        />
      </div>

      <div className="flex flex-col justify-center mx-4">
        <p className="mt-4 text-base">Location</p>
        <input
          type="text"
          className="border border-blue-400 rounded-md my-3 py-2"
        />
      </div>

      <div>
        <label className="mx-4 gap-2 flex">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="text-base"> I am currently working here</p>
        </label>
      </div>

      <div className="flex flex-col justify-between w-auto">
        <div className="mx-4">
          <div className="text-base py-4">Start Date</div>
          <div className="flex gap-6 w-auto">
            <div className="flex border border-blue-400 rounded-md p-2 gap-14 w-auto">
              <input type="text" />
              <div>V</div>
            </div>
            <div className="flex border border-blue-400 rounded-md p-2 gap-14  w-auto">
              <input type="text" />
              <div>V</div>
            </div>
          </div>
        </div>
        <div className="mx-4">
          <div className="text-base py-4">End Date</div>
          <div className="flex gap-6 w-auto">
            <div className="flex border border-blue-400 rounded-md p-2 gap-14  w-auto">
              <input type="text" />
              <div>V</div>
            </div>
            <div className="flex border border-blue-400 rounded-md p-2 gap-14  w-auto">
              <input type="text" />
              <div>V</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <p className="mx-4">Description</p>
        </div>
        <div className="border border-blue-400 m-4 rounded-md w-auto">
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <div>
          <button className=" py-1 px-12 my-4 border border-blue-900 text-blue-900 text-base font-medium rounded-md">
            Delete experience
          </button>
        </div>
        <div>
          <button className="bg-blue-700 my-4 px-20 text-white font-medium py-1 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
