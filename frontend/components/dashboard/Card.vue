<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-lg md:px-4 justify-center">
        <a v-for="(card, index) in cards" :key="index" :href="card.link"
            class="block max-w-md p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <Icon name="tdesign:money" class="text-green-500 text-3xl mb-2"/>
            <h2 class="mb-1 text-lg font-bold tracking-tight text-gray-600 dark:text-white">{{ card.title }}</h2>
            <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">{{ card.description }}</p>
            <hr class="my-2 border-gray-200 dark:border-gray-600">
            <p class="text-base font-medium text-gray-500 dark:text-gray-400" v-if="card.tipo == 'valor'">{{ formatarValor(card.valor) }} <span>BRL</span></p>
            <p class="text-base font-medium text-gray-500 dark:text-gray-400" v-else>{{ card.valor }}</p>
        </a>
    </div>
</template>

<script setup>

const cards = ref([
    {
        title: 'Antecipado',
        description: 'Valor Total',
        valor: 1200.00,
        tipo: "valor",
        perfil: "Ambos"
    },
    {
        title: 'Antecipado',
        description: 'Volume Total',
        valor: 200,
        tipo: "volume",
        perfil: "Ambos"
    },
    {
        title: 'Lucro',
        description: 'Valor Total',
        valor: 2500.00,
        tipo: "valor",
        perfil: "Ambos"
    },
    {
        title: 'Ofertado',
        description: 'Valor Total',
        valor: 2500.00,
        tipo: "valor",
        perfil: "Credor"
    },
    {
        title: 'Ofertado',
        description: 'Volume Total',
        valor: 2500,
        tipo: "volume",
        perfil: "Credor"
    },
]);

</script>

<style></style>