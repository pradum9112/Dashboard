import React from "react";

const Alert = () => {
  return (
    <div class="w-[26rem] h-[12rem] max-w-md">
      <div class="mb-3 ms-2 text-xl font-bold">
        Confirm Delete Visit Session
      </div>
      <div className="px-2 my-4">
        Are you sure that you want to delete This visit session
      </div>
      <div class="flex items-center justify-between">
        <button
          class="mt-14 bg-[red] hover:bg-[#011638]/90 w-[26rem] text-white  py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline"
          type="button"
        >
          Delete Log
        </button>
      </div>
    </div>
  );
};

export default Alert;
