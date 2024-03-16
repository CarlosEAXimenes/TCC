<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg md:px-6 justify-center">
      <a v-for="(card, index) in cards" :key="index" :href="card.link"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ card.title }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{{ card.description }}</p>
      </a>
    </div>
  </template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: 'Valor Antecipado',
                    description: 'Valor Total',
                    link: '#'
                },
                {
                    title: 'Volume Antecipado',
                    description: 'Volume Total',
                    link: '#'
                },
                {
                    title: 'Lucro',
                    description: 'Valor Total',
                    link: '#'
                },

            ]
        };
    },
};
</script>

<style></style>