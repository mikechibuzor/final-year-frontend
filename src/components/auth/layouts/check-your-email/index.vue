<script setup lang="ts">
// icons
import EmailIcon from '@/assets/icons/EmailIcon.vue'

</script>
<template>
  <main class="flex items-center mt-[10rem] lg:mt-0 lg:justify-center flex-col max-w-[20rem] mx-auto">
    <email-icon size="lg:h-[8rem] lg:w-[8rem] h-[4rem] w-[4rem]" stroke="#76453B" />
    <h3 class="text-primary my-3 text-lg lg:text-xl">Check Your Email</h3>
    <p class="text-center text-xs lg:text-sm">Please click on the link sent to your email to continue creating your account.</p>
      <el-button class="bg-primary text-xs lg:text-base text-white w-[13rem] lg:w-[20rem] mt-10 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
          >Resend Link</el-button
        >
  </main>
</template>