


import React from 'react';
import ecommerce from '../../images/ecommerce.png';
import { Button, Sparkline, Stacked } from '../../components';

import { earningData, SparklineAreaData } from '../../data/dummy';

const Ecommerce = () => {
  return (
    <>
      <div className="container flex flex-col ">
        {/* Top Section */}
        <div className='flex  items-center justify-center'>
          {/* Earnings Box */}
          <div className="flex flex-col p-6 rounded-lg shadow-md">
            <p className='font-bold'>Earnings</p>
            <p className='text-2xl'>$63,448</p>
            <div className='mt-6'>
              <Button
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-grow  m-auto flex items-center justify-center">
            <img src={ecommerce} alt="Ecommerce" className="w-1/2 h-auto max-w-full" />
          </div>

        </div>

        {/* Cards Section */}
        <div className='flex flex-wrap gap-1 justify-center'>
          {earningData?.map((item, index) => (
            <div
              key={index}
              className='bg-white dark:text-gray-200 text-center dark:bg-secondary-dark-bg w-full md:w-1/3 lg:w-1/4 p-4 pt-9 rounded-2xl shadow-lg'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl p-3 rounded-full'
              >
                {item.icon}
              </button>
              <p className="mt-4 text-lg text-gray-500 font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.amount}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          {/* Card 1 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Card Title 1</h5> */}
            <p className="flex-1 p-4 text-2xl">Revenue Updates</p>
            <div className="border-red-400  pr-10 mt-4  space-y-5">
              <div>
                <p>
                  <span className='text-3xl font-semibold '>
                    $93,438
                  </span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $48,438
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className="mt-5">
                <Sparkline
                  currentColor="blue"
                  id="line-sparkline"
                  height="80"
                  width="250"
                  data={[5, 15, 20, 15, 25]}
                  color="blue"
                />

              </div>
              <div>
                <Button
                  color="white"
                  bgColor="blue"
                  text={"Download Report"}
                  borderRadius={"10px"}
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Card Title 2</h5> */}
            <div className="flex-1  p-4 text-white ">
              <div className="flex space-x-4">
                <div className='flex items-center align-middle gap-2'>
                  <span className="inline-block w-4 h-4 bg-red-400 rounded-full"></span>
                  <p className='text-black'>Expense</p>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                  <p className='text-black'>Budget</p>
                </div>
              </div>
            </div>
            <Stacked />
          </div>
        </div>

        {/* <div className="flex container mt-5 float-end ">
          <p className="flex-1 p-4 text-2xl">Revenue Updates</p>
          <div className="flex-1  p-4 text-white ">
            <div className="flex space-x-4">
              <div className='flex items-center align-middle gap-2'>
                <span className="inline-block w-4 h-4 bg-red-400 rounded-full"></span>
                <p className='text-black'>Expense</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
                <p className='text-black'>Budget</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex  flex-wrap justify-center">
          <div className="border-red-400  pr-10  space-y-5">
            <div>
              <p>
                <span className='text-3xl font-semibold '>
                  $93,438
                </span>
                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                  23%
                </span>
              </p>
              <p className='text-gray-500 mt-1'>Budget</p>
            </div>
            <div>
              <p>
                <span className='text-3xl font-semibold'>
                  $48,438
                </span>
              </p>
              <p className='text-gray-500 mt-1'>Expense</p>
            </div>
            <div className="mt-5">
              <Sparkline
                currentColor="blue"
                id="line-sparkline"
                height="80"
                width="250"
                data={[5, 15, 20, 15, 25]}
                color="blue"
              />

            </div>
            <div>
              <Button
                color="white"
                bgColor="blue"
                text={"Download Report"}
                borderRadius={"10px"}
              />
            </div>
          </div>
          <Stacked />
        </div> */}
      </div>
    </>
  );
};

export default Ecommerce;
