<template>
  <div>
    <div class="md:p-[50px] px-[20px] text-center">
      <div class="max-w-[940px] mx-auto">
        <div class="h-[48px] mb-6">
          <span class="border border-red-700 h-[48px] inline-block"></span>
        </div>
        <h2 class="font-bold text-sm text-gray-600">ABOUT US</h2>
        <p class="font-[650] md:text-[40px] text-[30px] lg:px-[150px] mb-5">
          If you’re looking for a brand new electric scooter, you’re in the
          right place
        </p>
        <p class="text-gray-600 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
    </div>
    <div class="about-us-background-img md:pt-32 md:pl-12">
      <div
        class="bg-[#f4fafc] w-[49%] relative md:top-16 top-7 lg:p-[100px] p-[20px] text-center"
      >
        <div>
          <img src="/img/scooter-02.png" class="w-full" />
        </div>
        <p class="text-gray-600 text-sm">CITY</p>
        <h2 class="font-semibold md:text-2xl">Electric Scooter Z400</h2>
        <p class="text-red-700 font-bold">$650</p>
      </div>
    </div>

    <div class="lg:pt-[300px] lg:pb-[200px] pt-[100px] pb-[75px] px-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        fill="currentColor"
        class="bi bi-quote text-red-700 mx-auto lg:mb-10 mb-6"
        viewBox="0 0 16 16"
        style="transform: rotate(180deg)"
      >
        <path
          d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"
        />
      </svg>
      <p class="font-semibold md:text-2xl text-xl text-center mb-7">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.”
      </p>
      <div class="mb-4">
        <img class="mx-auto" src="/img/signature-01.png" />
      </div>
      <p class="text-gray-600 text-center">MARIA OLIVER</p>
    </div>

    <div class="grid grid-cols-12 p-[25px] pb-[60px] bg-[#f4fafc]">
      <div class="md:col-span-6 col-span-12 md:text-start text-center md:pr-[50px] md:pb-[0px] pb-[20px]">
        <h2 class="md:text-[44px] text-[34px] font-bold">Shop Electric Scooter Accessories</h2>
        <p class="text-gray-600 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <PrimaryBtn content="Shop Accessories" />
      </div>
      <div class="md:col-span-6 col-span-12">
        <div class="bg-[#fceade] p-[40px] md:mt-[-86px]" style="box-shadow: 50px 50px 50px -25px rgba(0,0,0,.15);">
          <div class="md:ml-[-78px]">
            <img src="/img/accessories-01.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>