import React from "react"
import { Link, Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import { Parts } from "./pages/Parts"
import { Tools } from "./pages/Tools"
import TrackOrder from "./pages/TrackOrder"
import { Clients } from "./pages/clients"

function App() {
  return (
    <>
      <div className='text-gray-900 h-screen bg-white flex'>
        <div>
          <div className='border-r w-56 h-screen'>
            <div className='h-full px-3 py-4 overflow-y-auto'>
              <ul className='space-y-2 font-medium '>
                <li className='text-center border-b pb-10'>
                  <Link to='/'>
                    <img
                      src='../../public/logo.png'
                      className='h-20 mx-auto'
                      alt='icrepairs Logo'
                    />
                    <span>ICREPAIRS</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to='/'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Clients'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='ml-3'>Clients</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to='/tools'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Equipments
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to='/Invoices'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Invoices
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/parts'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Spare_Parts
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/Suppliers'
                    className='flex items-center p-2  rounded-lg hover:bg-gray-100 group'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Suppliers
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path='/'
            element={<TrackOrder />}
          />
          <Route
            path='/Login'
            element={<Login />}
          />
          <Route
            path='/clients'
            element={<Clients />}
          />
          <Route
            path='/tools'
            element={<Tools />}
          />
          <Route
            path='/parts'
            element={<Parts />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
