<template>
  <div class="relative">
    <Navbar />

    <main> 
      <Home id="home"/>
      <About id="about"/>
      <Skills id="skills"/>
      <Language id="language"/>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Skills from "./pages/Skills.vue";
import Language from "./pages/Language.vue";
</script>

