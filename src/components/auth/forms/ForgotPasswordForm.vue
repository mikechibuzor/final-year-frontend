<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'

import { useRouter } from 'vue-router'
// element plus
import type { FormInstance, FormRules } from 'element-plus'
// notification
import { useNotification } from '@kyvg/vue3-notification'

// icons
import EmailIcon from '@/assets/icons/EmailIcon.vue'

// interface
interface ForgotPasswordForm {
  email: string
}

// composable
const { notify } = useNotification()
const router = useRouter()

// refs
const ruleFormRef = ref<FormInstance>()
const hiddenInput = ref('')
const isLoading = ref(false)

// reactive
const forgotPasswordForm = reactive<ForgotPasswordForm>({
  email: ''
})
const rules = reactive<FormRules<ForgotPasswordForm>>({
  email: [
    { required: true, message: 'Please enter a valid email address', trigger: ['blur', 'change'] }
  ]
})

// functions
const mockForgotPasswordEndpoint = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockResponse = {
        status: 200,
        data: {
          message: 'Account created successfully',
          accountId: '123456789'
        }
      }
      Math.random() * 10 > 2 ? resolve(mockResponse) : reject()
    }, 1000)
  })
}
const createAccountEndpoint = async () => {
  isLoading.value = true
  await mockForgotPasswordEndpoint()
    .then(() => {
      isLoading.value = false
      router.push('/check-your-email?type=forgot-password')
    })
    .catch(() => {
      isLoading.value = false
      notify({
        title: 'Error',
        type: 'error',
        text: 'Something went wrong'
      })
    })
}
const validateForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any): any => {
    if (valid) {
      createAccountEndpoint()
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
  <main class="w-full">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="forgotPasswordForm"
      :rules="rules"
      label-position="top"
      @keydown.enter="validateForm(ruleFormRef)"
    >
      <!-- password -->
      <el-form-item label="Email Address" prop="email">
        <el-input v-model="forgotPasswordForm.email" placeholder="Enter email address">
          <template #prefix>
            <email-icon />
          </template>
        </el-input>
        <el-input class="hidden" v-model="hiddenInput" />
      </el-form-item>
      <!-- login as user -->
      <router-link to="/login" class="text-xs font-medium underline cursor-pointer">
        Login as User?
      </router-link>
      <!-- login button -->
      <div class="flex items-center justify-end mt-10">
        <el-button
          class="bg-primary text-white w-40 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
          @click="validateForm(ruleFormRef)"
          :loading="isLoading"
          :disabled="isLoading"
          >{{ isLoading ? 'Sending...' : 'Continue' }}</el-button
        >
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
