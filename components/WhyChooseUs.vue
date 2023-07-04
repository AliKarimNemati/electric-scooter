<template>
  <div>
    <div class="text-center lg:py-[150px] py-[75px] lg:px-0 px-[25px]">
      <div class="h-[48px] mb-6">
        <span class="border border-red-700 h-[48px] inline-block"></span>
      </div>
      <h2 class="md:text-[44px] text-[34px] font-bold">Why choose us</h2>
      <p class="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>

      <div class="grid grid-cols-12">
        <div class="md:col-span-4 col-span-12 lg:p-[40px] p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="#fff"
            class="bi bi-truck text-white bg-red-700 p-2 hover:bg-black rounded-full mx-auto mb-3"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>

          <h2 class="font-bold md:text-2xl text-lg mb-2">Fast Delivery</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
        <div class="md:col-span-4 col-span-12 lg:p-[40px] p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="#fff"
            class="bi bi-truck text-white bg-red-700 p-2 hover:bg-black rounded-full mx-auto mb-3"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>

          <h2 class="font-bold md:text-2xl text-lg mb-2">Order Tracking</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
        <div class="md:col-span-4 col-span-12 lg:p-[40px] p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="#fff"
            class="bi bi-truck text-white bg-red-700 p-2 hover:bg-black rounded-full mx-auto mb-3"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
            />
          </svg>

          <h2 class="font-bold md:text-2xl text-lg mb-2">Secure Payment</h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            consectetur incididunt ut labore
          </p>
        </div>
      </div>
    </div>

    <div class="why-choose-us-background-img lg:p-[8%] p-[3%]">
      <div class="md:w-1/2 md:mb-[0px] md:text-start text-center w-full mb-[65%] bg-white px-[8%] py-[7%] ml-auto">
        <p class="text-gray-600 font-bold text-lg">$650</p>
        <h2 class="md:text-[44px] text-[34px] font-semibold mb-2">SilverPath Y100</h2>
        <p class="text-gray-600 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <PrimaryBtn content="SHOP NOW" />
      </div>
    </div>
  </div>
</template>