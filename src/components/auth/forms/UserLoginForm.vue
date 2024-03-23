<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'
// element plus
import type { FormInstance, FormRules } from 'element-plus'

//icons
import EmailIcon from '@/assets/icons/EmailIcon.vue'
import PasswordIcon from '@/assets/icons/PasswordIcon.vue'

// interface
interface LoginForm {
  email: string
  password: string
}

// emits
const emit = defineEmits<{
  (e: 'toggleLoginForm', index: number): void
}>()

// refs
const ruleFormRef = ref<FormInstance>()

// reactive
const loginForm = reactive<LoginForm>({
  email: '',
  password: ''
})
const rules = reactive<FormRules<LoginForm>>({
  email: [
    { required: true, message: 'Please enter a valid email address', trigger: ['blur', 'change'] }
  ],
  password: [{ required: true, message: 'Please enter your password', trigger: ['blur', 'change'] }]
})

// functions
const handleToggleLoginForm = () => emit('toggleLoginForm', 1)
</script>
<template>
  <main class="w-full">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="loginForm"
      :rules="rules"
      label-position="top"
    >
      <!-- email -->
      <el-form-item label="Email Address" prop="email">
        <el-input v-model="loginForm.email" placeholder="Enter your email address">
          <template #prefix>
            <email-icon />
          </template>
        </el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          show-password
          placeholder="Enter your password"
        >
          <template #prefix>
            <password-icon />
          </template>
        </el-input>
      </el-form-item>
      <!-- login as admin -->
      <div class="flex items-center justify-between">
        <p class="text-xs font-medium underline cursor-pointer" @click="handleToggleLoginForm">
          Login as Admin?
        </p>
        <p class="text-xs font-medium underline text-primary cursor-pointer">Forgot Password?</p>
      </div>
      <!-- login button -->
      <div class="flex items-center justify-end mt-10">
        <el-button class="bg-primary text-white w-36 py-6 px-8 rounded-lg cursor-pointer shadow-sm">
          Login
        </el-button>
      </div>
    </el-form>
  </main>
</template>
<style scoped>
:deep(.el-form-item) {
  margin-top: 2.5rem;
}
:deep(.el-form-item__label) {
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 0.85rem;
  font-weight: 400;
}
:deep(.el-input__wrapper) {
  border-radius: 0.5rem;
  border: 1px solid #76453b;
  background-color: #f5f4f4;
}
:deep(.el-input__inner) {
  height: 3rem;
  padding: 0 0.75rem;
}

@media screen and (max-width: 768px) {
  :deep(.el-form-item__label) {
    font-size: 0.75rem;
  }
}
</style>
