<template>
  <div>
    <div class="bg-white">
      <div>
        <!-- NORMAL SCREEN -->
        <main class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <!-- BOTAO TELA  < MD -->
          <div class="flex items-baseline border-b border-gray-200 pb-6 pt-2">
            <div class="flex items-center">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button"
                class="m-2 mr-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" aria-expanded="false">
                <Icon name="fa-solid:filter" class="text-sm" />
                <span class="pl-2">Filtros</span>
              </button>
            </div>
          </div>
          <section class="pb-24 pt-3">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <!-- Filters -->
              <div id="default-sidebar"
                class="fixed lg:relative top-0 left-0 z-40 w-64 h-screen lg:h-auto transition-transform -translate-x-full lg:translate-x-0 bg-white pl-3"
                aria-label="Sidebar">
                <form class="lg:block">
                  <div class="border-b border-gray-200 py-5 space-y-3">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Títulos</h3>
                    <div class="flex items-center">
                      <input id="filter-category-0" value="new-arrivals" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Nota promissória</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-1" value="new-arrivals" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Cheque</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-2" value="new-arrivals" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Debenture</label>
                    </div>
                    <div class="flex items-center">
                      <input id="filter-category-3" value="new-arrivals" type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                      <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Factoring</label>
                    </div>
                  </div>

                  <div class="border-b border-gray-200 py-5">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Data de vencimento</h3>
                    <!-- Filter section, show/hide based on section state. -->
                    <div class="pt-6" id="filter-section-0">
                      <div class="space-y-4">
                        <div class="flex items-center">                          
                          <div class="flex items-center">
                            <span class="text-gray-500">Entre:</span>                            
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date" 
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center">                          
                          <div class="flex items-center">
                            <span class="mx-2 text-gray-500">Até:</span>
                            <div class="relative mx-1">
                              <input datepicke name="star" type="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200 py-6">
                    <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Preço</h3>
                    <!-- Filter section, show/hide based on section state. -->
                    <div class="pt-6" id="filter-section-1">
                      <div class="space-x-1">
                        <div class="flex items-center space-x-2">
                          <input type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Min.">
                          <input type="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                            placeholder="Max.">
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <!-- Product grid -->
              <div class="lg:col-span-3">
                <!-- Your content -->
                <div>
                  <div class="bg-white p-5 flex">
                    <div>
                    </div>
                    <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8      
                      md:max-w-3xl
                      lg:max-w-5xl lg:px-8 rounded-xl shadow">
                      <div class="grid grid-cols-1 gap-y-5 gap-x-10
                        sm:grid-cols-2
                        md:grid-cols-3
                        xl:grid-cols-4
                        ">

                        <a href="#" class="group transition rounded-lg ease-in-out delay-10 duration-100
                            hover:-translate-y-1 hover:scale-100">
                          <div class="w-full overflow-hidden shadow-md rounded-lg border-t-2 border-gray-50">
                            <img src="~/assets/image/teste.jpg"
                              class="h-64 w-full object-contain object-center group-hover:opacity-70 md:h-52 lg:h-56 ">
                          </div>
                          <div class="text-gray-700 rounded-b-lg bg-gradient-to-r 
                          group-hover:from-indigo-700/30 group-hover:via-indigo-500/20 group-hover:to-indigo-700/30 
                          group-hover:text-whie">
                            <h3 class="mt-2 ml-2 text-sm ">Earthen Bottle</h3>
                            <p class="mt-1 ml-2 text-lg font-bold">$48</p>
                          </div>
                        </a>                      
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>