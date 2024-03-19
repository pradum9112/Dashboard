import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from '../../components/header';
import Popup from '../../components/popup/Popup';
import Alert from '../../components/alert/Alert';


const Dashboard = () => {
   const[openPopup,setOpenPopup]=useState(false);

    useEffect(() => {
        // Effect
    }, []);

    return (
        <div style={{height:"100vh",width:"100%",overflowY: 'auto',scrollbarWidth: 'thin'}}>
        <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>
        <Box>
                
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-4 h-[9rem]  ">
          <div className="bg-white rounded-lg shadow p-4">
            <div className=" text-left">
              <h1 className=" text-4xl font-bold">7</h1>
              <span class="text-blue-500 dark:text-blue-500 text-sm">
                Open Visit Logs
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className=" text-left">
              <h1 className=" text-4xl font-bold">1.1k</h1>
              <span class="text-blue-500 dark:text-blue-500 text-sm">
                Total Residents
              </span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className=" text-left">
              <h1 className=" text-4xl font-bold">81</h1>
              <span class="text-blue-500 dark:text-blue-500 text-sm">
                Key Logs
              </span>
            </div>
          </div>
        </div>
         

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-4 ">
          <button
            type="button"
            className="text-white bg-[#011638] hover:bg-[#011638]/90 font-medium rounded-lg text-sm p-3 me-[-2px] inline-flex items-center justify-center me-2 mb-2"
             
          >
            Log Visit
          </button>

          <button
            type="button"
            className="text-white bg-[#011638] hover:bg-[#011638]/90 font-medium rounded-lg text-sm p-3 me-[-2px] inline-flex items-center justify-center me-2 mb-2"
            onClick={()=>setOpenPopup(true)}
          >
            Log Key
          </button>
          
          <button
            type="button"
            className="text-white bg-[#011638] hover:bg-[#011638]/90 font-medium rounded-lg text-sm p-3 me-[-2px] inline-flex items-center justify-center me-2 mb-2"
          >
            Create Visitor
          </button>
          <Popup onClick={()=>{setOpenPopup(false)}}  openPopup={openPopup}
           setOpenPopup={setOpenPopup}>
            <Alert/>            
          </Popup>
        </div>

        <div className=" p-4 grid grid-cols-1  lg:grid-cols-3 gap-10 ">
          <div className="bg-white  rounded-lg shadow p-4">
            {/* Tile content goes here */}
            <h1 className="text-2xl text-align-center mt-12">Visit Sessions</h1>
            <p>circle</p>
          </div>
          <div className="  lg:col-span-2">
            {/* Table */}
            <h1 class="text-left text-2xl caption-top my-2 ">
              Today's Visitors
            </h1>
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
                      Room
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
                  </tr>
                </tbody>
              </table>
            </div>
            <h1 class="text-left text-2xl caption-top my-2 ">
              Today's Key Logs
            </h1>
            <div className="bg-white rounded-lg shadow   ">
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
                      Room
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
}

export default Dashboard;