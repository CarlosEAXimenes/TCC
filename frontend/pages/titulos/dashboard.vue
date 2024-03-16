<template>
  <div class="flex">
    <!-- Barra lateral fixa -->
    <DashboardSideBar/>

    <!-- Conteúdo principal -->
    <div class="flex-1 ml-64"> <!-- Ajuste o valor de 'ml-64' para coincidir com a largura da barra lateral -->
      <div class="max-w-screen-lg mx-auto pl-2 pr-2">
        <header class="mb-4">
          <h1 class="text-2xl font-semibold text-gray-600 mb-3">Dashboard</h1>
          <p class="text-sm text-gray-600 mb-5">Informações em tempo real da sua carteira</p>
          <hr class="my-2 border-gray-100">
        </header>
        <DashboardCard />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
