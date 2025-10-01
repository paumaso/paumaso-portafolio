<template>
  <section
    id="languages"
    class="flex flex-col items-center justify-center bg-background px-6 py-16"
  >
    <!-- Título -->
    <h2 class="text-3xl md:text-5xl font-bold text-primary-dark mb-12 text-center">
      {{ $t("languages.title") }}
    </h2>

    <!-- Grid de idiomas -->
    <div class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="lang in languages"
        :key="lang.name"
        class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
      >
        <!-- Icono de bandera -->
        <Icon :icon="lang.flag" class="w-12 h-12 mb-3 sm:w-10 sm:h-10" />

        <!-- Nombre y nivel -->
        <h3 class="text-xl sm:text-2xl font-semibold text-primary mb-1">{{ lang.name }}</h3>
        <p class="text-gray-700 mb-4 text-sm sm:text-base">{{ lang.level }}</p>

        <!-- Barra de progreso -->
        <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            class="h-4 bg-primary rounded-full transition-all duration-1000 ease-out"
            :style="{ width: animatedProgress[lang.name] + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const languages = [
  { name: "Español", level: "Nativo", progress: 100, flag: "openmoji:flag-spain" },
  { name: "Català", level: "Nativo", progress: 100, flag: "openmoji:catalonia-flag" },
  { name: "English", level: "B1/B2", progress: 65, flag: "openmoji:flag-united-kingdom" },
];

// Para animación: empieza en 0 y luego se llena
const animatedProgress = ref({});

onMounted(() => {
  languages.forEach(lang => {
    animatedProgress.value[lang.name] = 0;
  });

  // Animar después de render
  setTimeout(() => {
    languages.forEach(lang => {
      animatedProgress.value[lang.name] = lang.progress;
    });
  }, 100);
});
</script>

<style scoped>
/* Opcional: hacer que la transición sea más fluida */
</style>
