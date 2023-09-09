
import { Routes, Route } from 'react-router-dom'


import Home from "./pages/Home"
import Login from "./pages/Login"
import Tools from "./pages/Tools"
import TrackOrder from "./pages/TrackOrder"

import NavbarContainer from "./components/navbar/NavbarContainer"


function App() {
  

  return (
    <>
      <div  className='text-white h-screen dark:bg-gray-800' >

        {/* <nav>
          <NavbarContainer/>
        </nav>
         */}
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" class="border-r fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul class="space-y-2 font-medium " >
                <li className='text-center border-b pb-20'>
                  <img
                    src='../../public/logo.png'
                    className='h-20 mx-auto'
                    alt='icrepairs Logo'
                  />
                  <span>ICREPAIRS</span>
                </li>

                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="ml-3">Clients</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Contains</span>
                      
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Equipments</span>
                      
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Includes</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Invoices</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Spare_Parts</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      
                      <span class="flex-1 ml-3 whitespace-nowrap">Suppliers</span>
                    </a>
                </li>
              </ul>
          </div>
        </aside>

        

      
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/trackorder" element={<TrackOrder/>} />
        </Routes>

        
      </div>
    </>
  )
 
}

export default App
