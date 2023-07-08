<template>
  <div>
    <div class="lg:my-[100px] lg:mx-auto m-[20px] mt-[50px] lg:w-2/5">
      <h1 class="text-center lg:text-6xl text-5xl font-bold">Contact us</h1>
      <h2 class="text-center lg:text-2xl text-2xl font-bold m-4 px-8">
        If you have any questions, please feel free to get in touch with us,
        we’ll get back to you shortly.
      </h2>
    </div>
    <div
      class="lg:my-[100px] lg:mx-auto m-[20px] mt-[50px] lg:w-4/5 flex flex-wrap justify-between"
    >
      <div class="md:w-2/6 w-full md:text-start text-center">
        <p class="text-gray-600 font-bold md:mb-7 mb-5">CONTACT DETAILS</p>
        <ul class="md:text-[22px] text-[18px] font-bold mb-8">
          <li class="mb-2">
            <span class="font-semibold text-red-700">E: </span
            ><a href="#" class="text-red-700">info@example.com</a>
          </li>
          <li class="mb-2">
            <span class="font-semibold">P: </span><span>+1 234 567 890</span>
          </li>
          <li class="mb-2">
            <span class="font-semibold">A: </span
            ><span>123 Fifth Avenue, New York, NY 10160</span>
          </li>
        </ul>
        <p class="text-gray-600 font-bold mb-4">FOLLOW US</p>
        <div class="flex md:justify-start justify-center md:mb-0 mb-6">
          <a href="#">
            <span class="bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[36px] h-[36px] text-white bg-black p-2 hover:bg-red-700 rounded-full"
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
                class="w-[36px] h-[36px] text-white bg-black p-2 hover:bg-red-700 rounded-full"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </span>
          </a>

          <a href="#" class="ml-3">
            <span class="bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-[36px] h-[36px] text-white bg-black p-2 hover:bg-red-700 rounded-full"
              >
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div class="md:w-3/6 w-full">
        <form>
          <p class="font-bold">Name <span class="text-red-700">*</span></p>
          <div class="flex w-full gap-x-2 mt-1">
            <input
              type="text"
              class="w-1/2 p-2 rounded border border-gray-200"
              placeholder="First name"
            />
            <input
              type="text"
              class="w-1/2 p-2 rounded border border-gray-200"
              placeholder="First name"
            />
          </div>

          <p class="font-bold mt-4">
            Email <span class="text-red-700">*</span>
          </p>
          <input
            type="email"
            class="w-full p-2 rounded border border-gray-200 mt-1"
            placeholder="Email address"
          />

          <p class="font-bold mt-4">
            Message <span class="text-red-700">*</span>
          </p>
          <textarea
            type="email"
            class="w-full p-2 rounded border border-gray-200 mt-1 h-[120px]"
            placeholder="Your message"
          ></textarea>

          <PrimaryBtn content="SEND" />
        </form>
      </div>
    </div>
  </div>
</template>