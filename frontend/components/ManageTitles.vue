<template>
  <div>
    <div class="bg-white">
      <div>
        <main class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
          <div class="flex items-baseline border-b lg:border-none border-gray-200 py-2 lg:py-0">
            <div class="flex items-center">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button"
                class="m-2 mr-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" aria-expanded="false">
                <Icon name="fa-solid:filter" class="text-sm" />
                <span class="pl-2">Filtros</span>
              </button>
            </div>
          </div>
          <section class="pt-3 ">
            <!-- Filters -->
            <div id="default-sidebar" class="fixed lg:static top-0 left-0 z-40 w-64 h-screen lg:h-auto 
            lg:w-auto transition-transform -translate-x-full lg:translate-x-0 bg-white pl-3lg:bg-gray-50 lg:px-16">
              <div class="border-b border-t border-gray-300 p-2 overflow-auto inline-grid lg:grid-cols-4 lg:gap-4">
                <div class="py-2 space-y-3">
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

                <div class="py-2">
                  <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Data de vencimento</h3>
                  <!-- Filter section, show/hide based on section state. -->
                  <div class="pt-6" id="filter-section-0">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <div class="flex items-center">
                          <span class="mx-4 text-gray-500">Até:</span>
                          <div class="relative mx-1">
                            <input datepicke name="star" type="date"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Preço</h3>
                  <div class="pt-6" id="filter-section-1">
                    <div class="space-x-1">
                      <div class="flex items-center space-x-2">
                        <input type="number"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps-3 p-2.5"
                          placeholder="Min.">
                        <input type="number"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full ps- p-2.5"
                          placeholder="Max.">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="py-2 space-y-3">
                  <h3 class="text-md font-medium text-gray-900 mb-2 tracking-wider">Status</h3>
                  <div class="flex items-center">
                    <input id="filter-category-0" value="new-arrivals" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                    <label for="filter-category-0" class="ml-3 text-sm text-gray-600">Não ofertado</label>
                  </div>
                  <div class="flex items-center">
                    <input id="filter-category-1" value="new-arrivals" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                    <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Ofertado</label>
                  </div>
                  <div class="flex items-center">
                    <input id="filter-category-2" value="new-arrivals" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400">
                    <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Antecipado</label>
                  </div>
                </div>

                <div class="lg:col-span-4 flex justify-center lg:justify-end pt-4">
                  <button class="text-white font-semibold p-2 px-7 rounded-xl                  
                  bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-700
                  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700">
                    Aplicar
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div class="flex justify-end mt-4 mr-16">
            <a href="cadastro-titulo" class="text-indigo-700 font-semibold p-2 px-2 rounded-xl                  
                  bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                  hover:from-sky-700 hover:via-sky-600 hover:to-sky-700 hover:text-white cursor-pointer">
              Cadastrar
          </a>
          </div>
          <div>
            <div class="lg:col-span-3">
              <div>
                <div class="bg-white p-5 flex">
                  <div>
                  </div>
                  <div class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8      
                      md:max-w-3xl
                      lg:max-w-5xl lg:px-8 rounded-xl shadow w-screen">
                    <div class="grid gap-y-9 gap-x-10 ">

                      <div class="group rounded-lg ">
                        <div class="w-full overflow-hidden p-3 shadow-md border-t-2 border-gray-50 rounded-lg">
                          <div class="text-gray-700 rounded-b-lg grid grid-cols-1 mt-2 ml-2 gap-y-4 
                          md:gap-y-6 md:gap-x-2 md:grid-cols-3
                          ">
                            <p><b>Nota promissoria - </b>Associação Banco PAN e socios</p>
                            <p><b>Status:</b>
                              <span class="text-green-600">
                                Antecipado
                              </span>
                            </p>
                            <div class="flex grid order-1 md:order-none">
                              <button class="mx-3 w-auto h-14 font-semibold text-white rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400/80 to-indigo-500
                              hover:from-violet-500 hover:via-violet-400/80 hover:to-violet-500">
                                Ofertar
                              </button>
                            </div>
                            <div>
                              <p><b>Preço:</b> <span>R$ 543,54</span></p>
                              <p><b>Data de vencimento:</b> <span>14/02/2025</span></p>
                            </div>
                            <div>
                              <p><b>Antecipado por:</b></p>
                              <p>Daniel Froes de Abreu</p>
                            </div>
                            <div class="grid grid-cols-2 h-14 flex justify-between order-2 md:order-none ">
                              <button class="mx-3 font-semibold text-white rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500
                              hover:from-sky-600 hover:via-sky-500 hover:to-sky-600">
                                <Icon class="text-xl" name="ic:outline-mode-edit-outline" />
                                <span>Editar</span>
                              </button>
                              <button class="mx-3 font-semibold text-white  rounded-xl
                              bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500
                              hover:from-rose-500 hover:via-rose-400 hover:to-rose-500">
                                <Icon class="text-xl" name="material-symbols:delete" />
                                <span>Remover</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
