<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-lg md:px-5 justify-center">
        <a v-for="(card, index) in cards" :key="index" :href="card.link"
            class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <Icon name="tdesign:money" class="text-green-500 text-3xl mb-2" />
            <h2 class="mb-1 text-lg font-bold tracking-tight text-gray-600 dark:text-white">{{ card.title }}</h2>
            <p class="mb-2 text-sm text-gray-700 dark:text-gray-400">{{ card.description }}</p>
            <hr class="my-2 border-gray-200 dark:border-gray-600">
            <p class="text-base font-medium text-gray-500 dark:text-gray-400" v-if="card.tipo == 'valor'">{{
            formatarValor(card.valor) }} <span>BRL</span></p>
            <p class="text-base font-medium text-gray-500 dark:text-gray-400" v-else>{{ card.valor }}</p>
        </a>
    </div>
    <hr class="my-4 border-gray-200 dark:border-gray-600 mt-8 mb-8">
    <div class="grid grid-cols-1 gap-4 max-w-screen-lg justify-center md:px-5 mb-10">
        <a v-for="(titulo, index) in titulos" :key="index" :href="titulo.link"
            class="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 max-w-lg">
            <div class="p-6">
                <Icon name="tdesign:money" class="text-green-500 text-3xl mb-2" />
                <h2 class="text-lg font-bold text-gray-800 dark:text-white">{{ titulo.title }}</h2>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ titulo.description }}</p>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Vencimento: {{ titulo.dataVencimento }}</p>
                <hr class="my-4 border-gray-200 dark:border-gray-600">
                <div class="flex flex-col sm:flex-row justify-between items-center">
                    <div class="flex items-center">
                        <p class="text-base font-medium text-gray-600 dark:text-gray-400">{{
            formatarValor(titulo.valor) }} BRL</p>
                    </div>
                    <div class="flex items-center mt-2 sm:mt-0">
                        <p class="text-base font-medium text-green-600" v-if="titulo.lucro >= 0">+ {{
                            formatarValor(titulo.lucro) }} BRL</p>
                            <p class="text-base font-medium text-red-600" v-else>- {{
                            formatarValor(titulo.lucro) }} BRL</p>
                    </div>
                </div>
            </div>
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

const titulos = ref([
    {
        title: "Nota Promissória",
        description: "Título com data de vencimento próxima",
        valor: 2010.00,
        lucro: 210.00,
        dataVencimento: "18/03/2024"
    }
])

</script>

<style></style>