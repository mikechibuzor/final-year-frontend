<script setup lang="ts">
const props = defineProps({
  details: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <section class="border border-primary rounded-xl shadow-sm flex flex-col px-8 py-6">
    <!-- image -->
    <div class="h-48 w-32 bg-primary rounded-sm shadow-sm mx-auto"></div>
    <!-- title -->
    <p class="text-center font-semibold mt-4 h-20 overflow-hidden overflow-ellipsis">
      {{ props.details.title }}
    </p>
    <!-- author -->
    <p class="text-sm font-normal mt-10">{{ props.details.author }}</p>
    <!-- year -->
    <p class="text-sm font-normal text-left">{{ props.details.year }}</p>
    <!-- buttons -->
    <div class="w-full flex items-center justify-between mt-8 text-primary font-normal text-sm">
      <p class="cursor-pointer">Citation</p>
      <p class="cursor-pointer">Download as PDF</p>
    </div>
  </section>
</template>
