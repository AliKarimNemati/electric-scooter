<template>
  <div class="bg-[#f4fafc]">
    <div class="flex flex-wrap justify-between w-full mx-auto max-w-[1200px] lg:pt-[100px] lg:pb-[150px] md:py-[65px] md:px-[45px] p-[20px] pt-[50px] ">
      <div class="lg:w-1/5 md:w-2/5 w-full">
        <div>
          <img src="/img/logo-footer.png" alt="" />
        </div>
        <p class="text-gray-600 mb-[15px] mt-2">
          Duis aute irure dolor in reprehen derit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <div class="flex mt-10">
          <a href="#">
            <span class="bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[27px] h-[27px] text-white bg-black p-1 hover:bg-red-700"
                viewBox="0 0 320 512"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </span>
          </a>

          <a href="#" class="ml-3">
            <span class="bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="w-[27px] h-[27px] text-white bg-black p-1 hover:bg-red-700"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </span>
          </a>

          <a href="#" class="ml-3">
            <span class="bg-black">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[27px] h-[27px] text-white bg-black p-1 hover:bg-red-700">
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div class="lg:w-1/5 md:w-2/5 w-full md:mt-[0px] mt-[50px]">
        <h2 class="font-bold lg:text-lg text-base md:mb-[42px] mb-9">Contact us</h2>
        <ul class="text-[17px]">
          <li><span class="font-semibold text-gray-600">E: </span><a href="#" class="text-red-700">info@example.com</a></li>
          <li class="text-gray-600"><span class="font-semibold ">P: </span><span>+1 234 567 890</span></li>
          <li class="text-gray-600"><span class="font-semibold ">A: </span><span>123 Fifth Avenue, New York, NY 10160</span></li>
        </ul>
      </div>
      <div class="lg:w-1/5 md:w-2/5 font-semibold lg:mt-[0px] mt-[50px] w-full">
        <h2 class="font-bold lg:text-lg text-base md:mb-[42px] mb-9">Useful links</h2>
        <div><NuxtLink to="/shop" class="text-red-700">Shop All</NuxtLink></div>
        <div><NuxtLink to="/shop/electric-scooters" class="text-red-700">Electric Scooters</NuxtLink></div>
        <div><NuxtLink to="/shop/accessories" class="text-red-700">Accessories</NuxtLink></div>
        <div><NuxtLink to="/about" class="text-red-700">About</NuxtLink></div>
        <div><NuxtLink to="/contact" class="text-red-700">Contact</NuxtLink></div>
      </div>
      <div class="lg:w-1/5 md:w-2/5 lg:mt-[0px] mt-[50px] w-full">
        <h2 class="font-bold lg:text-lg text-base md:mb-[42px] mb-9">Sign up for special offers</h2>
        <input type="text" class="p-2 border border-gray-300 focus:outline-white mb-3 w-full" placeholder="Email address">
        <PrimaryBtn content="Subscribe" class="mb-7"/>
      </div>
    </div>
    <div class="border-t flex justify-between flex-wrap  py-5 px-4">
      <p class="text-gray-600 text-sm md:w-auto w-full md:text-start text-center">Copyright © 2023 Electric Scooter | Powered by Electric Scooter</p>
      <div class="md:w-auto w-full">
        <img src="/img/payment-icons.png" class="md:m-0 mx-auto my-4">
      </div>
    </div>
  </div>
</template>
