<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'
// vue router
import { useRouter } from 'vue-router'
// element plus
import type { FormInstance, FormRules } from 'element-plus'

import PasswordIcon from '@/assets/icons/PasswordIcon.vue'

import { useAuthStore } from '@/store/auth.store'
import { useHandleError } from '@/composables/useHandleError'

// composable
const router = useRouter()
const { handleErrorResponseNotification, isLoading, notify } = useHandleError()
const { adminLogin } = useAuthStore()

// interface
interface LoginForm {
  code: string
}

// emit
const emit = defineEmits<{
  (e: 'toggleLoginForm', index: number): void
}>()

// refs
const ruleFormRef = ref<FormInstance>()

// reactive
const loginForm = reactive<LoginForm>({
  code: ''
})
const rules = reactive<FormRules<LoginForm>>({
  code: [
    { required: true, message: 'Please enter a valid admin code', trigger: ['blur', 'change'] }
  ]
})

// functions
const adminLoginEndpoint = async () => {
  isLoading.value = true
  await adminLogin(loginForm)
    .then(() => {
      isLoading.value = false
      router.push('/home')
    })
    .catch((error) => {
      handleErrorResponseNotification(error)
    })
}
const handleToggleLoginForm = () => emit('toggleLoginForm', 0)
const validateForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any): any => {
    if (valid) {
      adminLoginEndpoint()
    } else {
      notify({
        title: 'Error',
        type: 'error',
        text: 'Please fill all inputs correctly'
      })
    }
  })
}
</script>
<template>
  <main class="w-full mt-12 lg:mt-32">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="loginForm"
      :rules="rules"
      label-position="top"
      @keydown.enter="validateForm(ruleFormRef)"
    >
      <!-- password -->
      <el-form-item label="Code" prop="code">
        <el-input
          v-model="loginForm.code"
          type="password"
          show-password
          placeholder="Enter admin code"
        >
          <template #prefix>
            <password-icon />
          </template>
        </el-input>
      </el-form-item>
      <!-- login as user -->
      <div class="flex items-center justify-between">
        <p class="text-xs font-medium underline cursor-pointer" @click="handleToggleLoginForm">
          Login as User?
        </p>
      </div>
      <!-- login button -->
      <div class="flex items-center justify-end mt-10">
        <el-button
          @click="validateForm(ruleFormRef)"
          :loading="isLoading"
          :disabled="isLoading"
          class="bg-primary text-white w-36 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
        >
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
