<script lang="ts" setup>
export interface CloseIconProps {
  size?: string
}
const props = withDefaults(defineProps<CloseIconProps>(), {
  size: 'w-6 h-6'
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    :class="props.size"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</template>
