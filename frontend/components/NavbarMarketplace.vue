<template>
  <div>
    <nav class="bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800">
    <!-- <nav class="bg-indigo-600"> -->
      <div class="flex flex-wrap items-center justify-between mx-aut p-4 pr-5">

        <!-- LOGO -->
        <a href="/titulos" class="flex items-center space-x-3 rtl:space-x-reverse text-white">
          <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> -->
          <span class="self-center text-2xl font-bold whitespace-nowrap tracking-widest">NapierCapital</span>
        </a>
        <!-- BOTAO DE MENU -->
        <button data-dropdown-trigger="hover" data-dropdown-toggle="dropdown" type="button" class="inline-flex  items-center p-2 w12 h10 
        justify-center  rounded-lg hover:bg-gray-300 md:order-1 text-white/80 hover:text-black text
        focus:outline-none focus:ring-2 focus:ring-gray-200" aria-expanded="false">
        <Icon name="mi:menu" class="text-2xl" />
        <span class="font-semibold">Menu</span>
        </button>
        <!-- BARRA DE PESQUISA -->
        <div class="items-center justify-between hidde w-full flex md:w-auto">
          <div class="relative md:block lg:w-96 mt-4 md:mt-0 md:order-none" style="width: 450px;">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon name="material-symbols:search-rounded" color="black" class="text-2xl opacity-50" aria-hidden="true" />
            </div>
            <input type="text" id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500"
              placeholder="Pesquisar">
          </div>
        </div>
        <!-- MENU -->
        <div class="items-center justify-between w-full md:flex md:w-auto">
          <div class="relative md:block md:mt-0 md:order-none">
            <div id="dropdown" class="hidden z-10 ">
              <div class="w-screen md:max-w-sm flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5
                max-w-full mt-1">
                <div class="p-2">
                  <a href="#" class="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Icon name="ic:baseline-account-circle"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div class="flex items-center justify-center">
                      <p href="#" class="font-semibold text-gray-900">
                        Perfil
                      </p>
                    </div>
                  </a>
                  <a href="/gerenciar-titulos" class="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Icon name="ic:baseline-settings"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div class="flex items-center justify-center">
                      <p href="#" class="font-semibold text-gray-900">
                        Gerenciar títulos
                      </p>
                    </div>
                  </a>
                  <a href="#" class="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Icon name="ic:round-dashboard-customize"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div class="flex items-center justify-center">
                      <p href="#" class="font-semibold text-gray-900">
                        Dashboard
                      </p>
                    </div>
                  </a>
                  <a href="#" class="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <Icon name="ic:baseline-cancel"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div class="flex items-center justify-center">
                      <p href="#" class="font-semibold text-gray-900">
                        Encerrar seção
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>