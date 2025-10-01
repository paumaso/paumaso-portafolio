<template>
  <section
    id="about"
    class="flex items-center justify-center py-16 px-6 bg-background"
  >
    <div
      class="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10 md:p-16 text-text text-lg md:text-xl leading-relaxed transition-transform hover:scale-[1.02]"
    >
      <h2
        class="text-4xl md:text-5xl font-bold text-primary-dark mb-8 text-center"
      >
        {{ $t("about.title") }}
      </h2>

      <p class="mb-6">
        {{ $t("about.description") }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
