<template>
  <nav class="w-full fixed top-0 left-0 backdrop-blur-md bg-background/80 shadow-inner z-50 border-b border-gray-200">
    <div class="mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo izquierda -->
      <div class="text-2xl md:text-3xl font-bold text-primary-dark tracking-widest select-none gap-2">
        PMS
      </div>

      <!-- Links centrados -->
      <div class="hidden md:flex flex-1 justify-center">
        <ul class="flex space-x-6 text-text text-lg md:text-xl font-medium">
          <li><a href="#home" class="hover:text-primary transition">{{ $t("navbar.home") }}</a></li>
          <li><a href="#about" class="hover:text-primary transition">{{ $t("navbar.about") }}</a></li>
          <li><a href="#skills" class="hover:text-primary transition">{{ $t("navbar.skills") }}</a></li>
          <li><a href="#language" class="hover:text-primary transition">{{ $t("navbar.language") }}</a></li>
        </ul>
      </div>

      <!-- Acciones derecha -->
      <div class="hidden md:flex items-center gap-4">
        <DowloadCv />
        <div class="relative">
          <button @click="showDropdown = !showDropdown" class="text-primary-dark hover:text-primary transition p-1 md:p-2 rounded focus:outline-none">
            <Icon icon="mdi:translate" class="w-7 md:w-8 h-7 md:h-8" />
          </button>
          <div v-show="showDropdown" class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50 animate-fade-in">
            <button v-for="lang in languages" :key="lang.code" class="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    @click="changeLanguage(lang.code)">
              <span>{{ lang.label }}</span>
              <svg v-if="currentLang === lang.code" class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Hamburger mobile -->
      <div class="md:hidden flex items-center">
        <button @click="openMobileMenu = !openMobileMenu" class="focus:outline-none">
          <svg v-if="!openMobileMenu" class="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-fade">
      <div v-show="openMobileMenu" class="md:hidden bg-background/95 border-t border-gray-200 shadow-inner">
        <ul class="flex flex-col divide-y divide-gray-200 px-6 py-4 text-text font-medium space-y-4">
          <li class="py-2"><a href="#home" @click="openMobileMenu = false" class="hover:text-primary transition block">{{ $t("navbar.home") }}</a></li>
          <li class="py-2"><a href="#about" @click="openMobileMenu = false" class="hover:text-primary transition block">{{ $t("navbar.about") }}</a></li>
          <li class="py-2"><a href="#skills" @click="openMobileMenu = false" class="hover:text-primary transition block">{{ $t("navbar.skills") }}</a></li>
          <li class="py-2"><a href="#language" @click="openMobileMenu = false" class="hover:text-primary transition block">{{ $t("navbar.language") }}</a></li>

          <li class="py-2"><DowloadCv /></li>

          <li class="py-2">
            <div class="flex flex-col space-y-2 mt-2">
              <span class="font-semibold text-gray-700">{{ $t("navbar.language") }}</span>
              <button v-for="lang in languages" :key="lang.code"
                      class="text-gray-700 hover:text-primary text-left px-2 py-1 rounded transition"
                      @click="changeLanguage(lang.code); openMobileMenu = false">
                {{ lang.label }}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";
import DowloadCv from "./DowloadCv.vue";

const { locale } = useI18n();
const showDropdown = ref(false);
const openMobileMenu = ref(false);

const languages = [
  { code: "ca", label: "Català" },
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

const currentLang = computed(() => locale.value);

function changeLanguage(lang) {
  locale.value = lang;
  showDropdown.value = false;
}

onMounted(() => {
  document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".relative");
    if (dropdown && !dropdown.contains(e.target)) {
      showDropdown.value = false;
    }
  });
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
