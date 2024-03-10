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
          <button class="group align-middle rounded-2xl inline-flex p-2 w-54 hover:bg-gray-200 text-white transition ease delay-150 hover:-translate-y-1">
            <Icon name="material-symbols:account-circle" class="transition ease delay-150 mr-2 text-white text-4xl group-hover:text-gray-800"/>
            <div class="transition ease delay-150 group-hover:text-gray-800 text-left text-sm">
                <p class="font-semibold">Bem-Vindo</p>
                <p>Entre ou Cadastre-se</p>
            </div>
            
          </button>

        </div>
      </nav>
    </div>
  </template>