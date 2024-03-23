<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'
// element plus
import type { FormInstance, FormRules } from 'element-plus'

import EmailIcon from '@/assets/icons/EmailIcon.vue'

// interface
interface CreateAccountForm {
  email: string
}

// refs
const ruleFormRef = ref<FormInstance>()

// reactive
const createAccountForm = reactive<CreateAccountForm>({
  email: ''
})
const rules = reactive<FormRules<CreateAccountForm>>({
  email: [{ required: true, message: 'Please enter a valid email address', trigger: ['blur', 'change'] }]
})
</script>
<template>
  <main class="w-full">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="createAccountForm"
      :rules="rules"
      label-position="top"
    >
      <!-- password -->
      <el-form-item label="Email Address" prop="email">
        <el-input v-model="createAccountForm.email" placeholder="Enter email address">
          <template #prefix>
            <email-icon />
          </template>
        </el-input>
      </el-form-item>
      <!-- login button -->
      <div class="flex items-center justify-end mt-10">
        <el-button class="bg-primary text-white w-36 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
          >Continue</el-button
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
