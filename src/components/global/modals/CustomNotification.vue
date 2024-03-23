<script setup lang="ts">
// icons
import CloseIcon from '@/assets/icons/CloseIcon.vue'

// functions
const contentColor = (type: string) => {
  switch (true) {
    case type === 'success':
      return 'border-bottom-success-default'
    case type === 'error':
      return 'border-bottom-error-emphasis'
    case type === 'warn':
      return 'border-bottom-warning-emphasis'
  }
}
const svgStrokeColor = (type: string) => {
  switch (true) {
    case type === 'success':
      return '#25B669'
    case type === 'error':
      return '#b82e24'
    case type === 'warn':
      return '#f48a06'
  }
}
</script>
<template>
  <notifications>
    <template #body="props">
      <div class="my-notification bg-surface shadow-lg relative">
        <p class="text-xs lg:text-sm text-fg-default pl-12 font-semibold px-4 pt-1">
          {{ props.item.title }}
        </p>
        <button
          class="close absolute top-1 right-2"
          :class="{ 'top-0.5': props.item.title }"
          @click="props.close"
        >
          <close-icon size="h-4 w-4" />
        </button>
        <span class="absolute bottom-3 left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            :stroke="svgStrokeColor(props.item.type)"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </span>
        <div
          class="pl-12 pt-0.5 text-[10px] lg:text-xs rounded-xl pb-2 font-light text-fg-muted"
          style="word-break: normal"
          :class="contentColor(props.item.type)"
          v-html="props.item.text"
        />
      </div>
    </template>
  </notifications>
</template>
<style scoped>
.my-notification {
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 1.2rem;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
}
</style>
