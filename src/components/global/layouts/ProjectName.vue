<script setup lang="ts">
export interface ProjectNameProps {
  scale?: string
}

const props = withDefaults(defineProps<ProjectNameProps>(), {
  scale: 'scale=100'
})
</script>
<template>
  <section class="transform" :class="props.scale">
    <h3 class="text-2xl lg:text-3xl text-center font-medium">Web-Based Past Projects Repository</h3>
    <p class="text-xs lg:text-sm text-center text-gray-1 font-normal">
      ...of Computer Science Department, University of Ibadan.
    </p>
  </section>
</template>
