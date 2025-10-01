<template>
  <section
    class="flex flex-col items-center justify-center py-16 px-6 bg-background text-center mt-2"
  >
    <!-- Texto presentación -->
    <h1
      class="text-5xl md:text-6xl font-extrabold text-primary-dark leading-snug drop-shadow-lg"
    >
      {{ $t("presentation.name") }} <br />
      <span class="text-primary">{{ $t("presentation.role") }}</span>
    </h1>

    <!-- Tarjeta con flip -->
    <div
      class="relative mt-10 w-72 h-72 md:w-[24rem] md:h-[24rem] perspective cursor-pointer"
      @click="flipped = !flipped"
    >
      <div
        class="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        :class="{ 'rotate-y-180': flipped }"
      >
        <!-- Cara frontal (Foto) -->
        <div
          class="absolute inset-0 backface-hidden rounded-full overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform"
          style="box-shadow: 0 0 80px 0 rgba(128, 0, 255, 0.18)"
        >
          <img
            src="../assets/foto_perfil.jpg"
            alt="Foto de Pau"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Cara trasera (Datos de contacto) -->
        <div
          class="absolute inset-0 backface-hidden rotate-y-180 rounded-full flex flex-col items-center justify-center shadow-2xl bg-gradient-to-br from-primary/90 to-primary-dark text-white p-6"
        >
          <h3 class="text-xl font-bold mb-4">
            {{ $t("presentation.contact") }}
          </h3>

          <div class="flex flex-col gap-3 text-center text-sm md:text-base">
            <a href="mailto:paumartinezsoria@gmail.com" class="hover:underline">
              📧 paumartinezsoria@gmail.com
            </a>
            <a href="tel:+34616375837" class="hover:underline">
              📱 +34 616375837
            </a>
            <p>📍 Barcelona, España</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Iconos sociales -->
    <div class="flex gap-12 justify-center mt-12">
      <a
        href="https://www.linkedin.com/in/pau-martinez-soria-b25248250"
        target="_blank"
        class="text-primary-dark hover:text-primary transition relative group"
      >
        <Icon icon="mdi:linkedin" class="w-10 h-10" />
        <span
          class="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {{ $t("social.linkedin") }}
        </span>
      </a>

      <a
        href="https://github.com/paumaso"
        target="_blank"
        class="text-primary-dark hover:text-primary transition relative group"
      >
        <Icon icon="mdi:github" class="w-10 h-10" />
        <span
          class="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {{ $t("social.github") }}
        </span>
      </a>

      <a
        href="mailto:paumartinezsoria@gmail.com"
        class="text-primary-dark hover:text-primary transition relative group"
      >
        <Icon icon="mdi:email" class="w-10 h-10" />
        <span
          class="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary-dark text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {{ $t("social.email") }}
        </span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const flipped = ref(false);
</script>

<style scoped>
.perspective {
  perspective: 1200px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
