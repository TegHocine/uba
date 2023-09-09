import React from 'react'
import SearchToolForm from './SearchToolForm'

function SearchToolFormContainer() {
  return (
    <div className='w-3/4 md:w-2/3 mx-auto p-12' >
        
        <SearchToolForm/>
        <div class="relative overflow-x-auto pt-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Serial Number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Equipment Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Equipment Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cost
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          RB300173463SG
                        </th>
                        <td class="px-6 py-4">
                            Printer
                        </td>
                        <td class="px-6 py-4">
                          HP OfficeJet 8015e
                        </td>
                        <td class="px-6 py-4">
                            Processing
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                    </tr>
                    
                  
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default SearchToolFormContainer