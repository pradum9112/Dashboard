import React from "react";

const VisitorForm = () => {
 

  return (
   
  <div class="w-[28rem] h-[22rem] max-w-md ">
     <div class="mb-3 ms-2 text-3xl font-bold">Create Visitor</div>
     <form class="bg-white  rounded px-3 py-3">
    <div class="mb-3">
      
      <input class="shadow-inner appearance-none  border border-gray-300 hover:border-[#98adea]  rounded w-[26rem] py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="Surname" type="text" placeholder="Surname"/>
    </div>
    
    <div class="mb-3">
      
      <input class="shadow-inner appearance-none border border-gray-300 hover:border-[#98adea]  rounded w-[26rem] py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="OtherNames" type="text" placeholder="Other names"/>
    </div>
    <div class="mb-3">
      
      <input class="shadow-inner appearance-none border border-gray-300 rounded w-[26rem] hover:border-[#98adea] py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="Residence" type="text" placeholder="Residence"/>
    </div>
    <div class="mb-3">
      
      <input class="shadow-inner appearance-none border border-gray-300 rounded w-[26rem] hover:border-[#98adea] py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email"/>
    </div>
    
    <div class="mb-4">
        <input  class="shadow-inner appearance-none border border-gray-300  rounded w-[26rem] hover:border-[#98adea] py-1 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="number-input"  type="number" placeholder="Phone Number" aria-describedby="helper-text-explanation" required />
    </div>

   
    <div class="flex items-center justify-between">
      <button class="bg-[#011638] hover:bg-[#011638]/90 w-[26rem] text-white  py-2 px-4 rounded-lg  focus:outline-none focus:shadow-outline" type="button">
       Create Visitor
      </button>
     
    </div>
  </form>
 
</div>
    
  );
};

export default VisitorForm;
