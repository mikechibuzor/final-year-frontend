<script setup lang="ts">
// icons
import ScholarIcon from '@/assets/icons/ScholarIcon.vue'
</script>
<template>
  <div class="absolute left-5 top-5">
    <scholar-icon size="h-12 w-12" class="lg:hidden" />
  </div>
  <section class="section bg-secondary hidden lg:flex items-center justify-center">
    <scholar-icon size="h-52 w-52" />
  </section>
</template>
<style>
.section {
  box-shadow: 2px 0 2px -2px rgba(0, 0, 0, 0.2);
}
.main {
  display: grid;
  grid-template-columns: 35% 65%;
}
@media screen and (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
  }
}
</style>
