<template>
    <!-- drawer init and show -->
    <div class="text-left">
        <button
            class="flex items-center lg:hidden justify-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 rounded-lg w-10 h-10 focus:outline-none mx-2 my-2"
            type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation">
            <span class="sr-only">Toggle navigation</span>
            <Icon name="mi:menu" class="text-2xl" />
        </button>
    </div>

    <!-- drawer component -->
    <div id="drawer-navigation"
        class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-50 lg:translate-x-0"
        tabindex="-1" aria-labelledby="drawer-navigation-label">
        <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu
        </h5>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg lg:hidden text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon name="ic:round-dashboard-customize"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        <span class="ms-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon name="ic:baseline-account-circle"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Perfil</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon name="ic:baseline-settings"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Gerenciar títulos</span>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <Icon name="ic:baseline-cancel"
                        class="text-2xl h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        <span class="flex-1 ms-3 whitespace-nowrap">Encerrar seção</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>