<template>
  <!-- Botón en el nav -->
  <button
    @click="openModal = true"
    class="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
  >
    {{ t("navbar.dowload") }}
  </button>

  <!-- Modal teletransportado -->
  <teleport to="body">
    <div
      v-if="openModal"
      class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    >
      <div class="bg-white rounded-2xl shadow-xl w-96 p-6 animate-fadeIn">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          {{ t("navbar.modal.text1") }}
        </h2>
        <p class="text-gray-600 mb-6">
          {{ t("navbar.modal.text2") }}
        </p>

        <div class="flex justify-end gap-4">
          <button
            @click="openModal = false"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            {{ t("navbar.modal.cancel") }}
          </button>

          <a
            :href="cvPath"
            download="CV-Pau-Martinez.pdf"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            @click="openModal = false"
          >
            {{ t("navbar.modal.dowload") }}
          </a>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const openModal = ref(false);
const cvPath = "CV-Pau-Martinez.pdf";

const { t } = useI18n();
</script>

<style>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
</style>
