<template>
  <section
    id="skills"
    class="flex flex-col items-center bg-background px-6 py-16"
  >
    <!-- Título -->
    <h2
      class="text-4xl md:text-5xl font-bold text-primary-dark mb-12 text-center"
    >
      {{ $t("skills.title") }}
    </h2>

    <!-- Grid de habilidades -->
    <div
      class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
    >
      <SkillCard
        v-for="skill in skills"
        :key="skill.name"
        :name="skill.name"
        :icon="skill.icon"
        :level="skill.level"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SkillCard from "../components/SkillCard.vue";

const skills = ref([
  // 🌐 Frontend
  { name: "html", icon: "mdi:language-html5", level: 100 },
  { name: "css", icon: "mdi:language-css3", level: 80 },
  { name: "javascript", icon: "mdi:language-javascript", level: 80 },
  { name: "typescript", icon: "mdi:language-typescript", level: 45 },

  // ⚛️ Frameworks frontend
  { name: "vue", icon: "mdi:vuejs", level: 80 },
  { name: "react", icon: "mdi:react", level: 60 },

  // 🖥️ Backend / Lenguajes
  { name: "php", icon: "fa7-brands:php", level: 90 },
  { name: "laravel", icon: "mdi:laravel", level: 90 },
  { name: "java", icon: "mdi:language-java", level: 60 },
  { name: "csharp", icon: "devicon-plain:csharp", level: 60 },
  { name: "c", icon: "mdi:language-c", level: 70 },

  // 📦 CMS
  { name: "wordpress", icon: "mdi:wordpress", level: 70 },

  // 🎨 Frameworks de estilos
  { name: "bootstrap", icon: "mdi:bootstrap", level: 65 },
  { name: "tailwind", icon: "mdi:tailwind", level: 60 },

  // 🗄️ Bases de datos
  { name: "mysql", icon: "simple-icons:mysql", level: 75 },
  { name: "postgresql", icon: "simple-icons:postgresql", level: 50 },

  // 🔧 Herramientas / DevOps
  { name: "git", icon: "mdi:git", level: 70 },
  { name: "docker", icon: "mdi:docker", level: 40 },
]);
</script>
