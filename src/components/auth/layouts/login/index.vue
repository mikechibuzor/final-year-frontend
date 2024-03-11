<script setup lang="ts">
// components
import LoginForm from '../../forms/LoginForm.vue'
</script>
<template>
  <main class="w-[86%] md:w-[65%] lg:w-[49.69%] 2xl:w-[35rem] mx-auto flex flex-col lg:justify-center max-lg:mt-52">
    <!-- header -->
    <section>
      <h3 class="text-2xl lg:text-3xl text-center font-medium">Online Past Projects Repository</h3>
      <p class="text-xs lg:text-sm text-center text-gray-1 font-normal">...of Computer Science Department, University of Ibadan.</p>
      <div class="flex items-center gap-x-5 mt-6 w-full text-sm lg:text-lg">
        <h4>Don't have an account?</h4>
        <h4 class="text-primary cursor-pointer">Create one here</h4>
      </div>
    </section>
    <!-- form -->
    <login-form />
  </main>
</template>