import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from '../../components/header';
import Popup from '../../components/popup/Popup';
import VisitorForm from '../visitorForm/visitorForm';

const Visitors = () => {
   const[openPopup,setOpenPopup]=useState(false);
   
  return (
    <div style={{height:"100vh",width:"100%",overflowY: 'auto',scrollbarWidth: 'thin'}}>
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="VISITOR" subtitle="Visitors list" />
        </Box>
    <Box>
        <div className=" p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 ">
          <div className="flex items-center">
            <div class="flex items-center">
              <div class="w-[40rem] h-10 flex">
                <input
                  type="text"
                  class="w-full border rounded p-2"
                  placeholder="Search Items for your use..."
                />
                <div class=" items-center mt-4 lg:mt-0">
                  <div class="ml-4  lg:ml-0">
                    <button class="ms-2 bg-[#3e63dd] text-white rounded p-2 h-10 w-[7rem] hover:bg-blue-600">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center  ">
              <div className="flex items-center mt-4 lg:mt-0">
                <div className="ml-4 lg:ml-0">
                  <button className="ms-[26rem] bg-[#3e63dd] text-white rounded p-2 hover:bg-blue-600" onClick={()=>setOpenPopup(true)}>
                    Create Visitor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Popup onClick={()=>{setOpenPopup(false)}}  openPopup={openPopup}
          setOpenPopup={setOpenPopup}>      
           <VisitorForm/>
          </Popup>
          
          <div className="  lg:col-span-2">
            <div className="bg-white rounded-lg shadow  mb-8 ">
              <table className="min-w-full border-collapse table-auto ">
                <thead>
                  <tr>
                    <th className="px-3 py-2 bg-zinc-100 border-b text-left ">
                      Full name
                    </th>
                    <th className="px-3 py-2 bg-zinc-100 border-b text-left  ">
                      Email
                    </th>
                    <th className="px-3 py-2 bg-zinc-100 border-b text-left  ">
                      Phone Number
                    </th>
                    <th className="px-3 py-2 bg-zinc-100 border-b text-left  ">
                      Residence
                    </th>
                    <th className="px-3 py-2 bg-zinc-100 border-b text-left  ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      John Doe
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      john@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      4001
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Jane Smith
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      jane@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      3021
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      John Doe
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      john@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      4001
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Jane Smith
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      jane@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      3021
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      John Doe
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      john@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      4001
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Jane Smith
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      jane@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      3021
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      Bob Johnson
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      bob@ex.com
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b  text-left border-gray-300">
                      2041
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      Logon Hal
                    </td>
                    <td className="px-3 py-2 whitespace-no-wrap border-b text-left border-gray-300">
                      text
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Box>
      </Box>
    </div>
  );
};

export default Visitors;