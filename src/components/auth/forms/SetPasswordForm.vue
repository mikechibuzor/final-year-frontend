<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'
// vue router
import { useRouter } from 'vue-router'
// element plus
import type { FormInstance, FormRules } from 'element-plus'

//icons
import PasswordIcon from '@/assets/icons/PasswordIcon.vue'

import { useAuthStore } from '@/store/auth.store'
import { useHandleError } from '@/composables/useHandleError'

// composable
const { handleErrorResponseNotification, isLoading, notify } = useHandleError()
const { setPassword, getExtractedEmailVerificationId } = useAuthStore()

// interface
interface SetPasswordForm {
  password: string
  confirmPassword: string
}
// composable
const router = useRouter()

// refs
const ruleFormRef = ref<FormInstance>()
const hiddenInput = ref('')

// reactive
const setPasswordForm = reactive<SetPasswordForm>({
  confirmPassword: '',
  password: ''
})

// functions
const validatePasswordRequirement = (): void => {
  // Check if the password is at least 8 characters long
  setPasswordForm.password.length < 8
    ? (passwordRequirements[0].validity = false)
    : (passwordRequirements[0].validity = true)
  // Check if the password contains at least one uppercase letter (A-Z)
  !/[A-Z]/.test(setPasswordForm.password)
    ? (passwordRequirements[1].validity = false)
    : (passwordRequirements[1].validity = true)
  // Check if the password contains at least one lowercase letter (a-z)
  !/[a-z]/.test(setPasswordForm.password)
    ? (passwordRequirements[2].validity = false)
    : (passwordRequirements[2].validity = true)
  // Check if the password contains at least one special character
  // eslint-disable-next-line no-useless-escape
  !/[!@#\$%^&*(),.?":{}|<>]/.test(setPasswordForm.password)
    ? (passwordRequirements[3].validity = false)
    : (passwordRequirements[3].validity = true)
  // Check if the password contains at least one digit (0-9)
  !/\d/.test(setPasswordForm.password)
    ? (passwordRequirements[4].validity = false)
    : (passwordRequirements[4].validity = true)
}

const validatePasswordHandler = (rule: any, value: any, callback: any): void => {
  // check all conditions
  let allPasswordRequirements = 0
  passwordRequirements.forEach((requirements) => {
    if (requirements.validity) {
      allPasswordRequirements += 1
    }
  })
  if (allPasswordRequirements >= 5) {
    callback()
  } else {
    callback(new Error('Password is Invalid!'))
  }
}

const setPasswordHandler = async () => {
  isLoading.value = true
  const payload = {
    id: getExtractedEmailVerificationId,
    password: setPasswordForm.password
  }
  await setPassword(payload)
    .then(() => {
      isLoading.value = false
      notify({
        title: 'Success',
        type: 'success',
        text: 'Password set successfully!'
      })
      router.push('/login')
    })
    .catch((error) => {
      isLoading.value = false
      handleErrorResponseNotification(error)
    })
}
const validateForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any): any => {
    if (valid) {
      setPasswordHandler()
    } else {
      notify({
        title: 'Error',
        type: 'error',
        text: 'Please fill all inputs correctly'
      })
    }
  })
}
const rules = reactive<FormRules>({
  confirmPassword: [
    { required: true, message: 'Please enter a valid email address', trigger: ['blur', 'change'] }
  ],
  password: [{ validator: validatePasswordHandler, trigger: ['blur', 'change'], required: true }]
})
const passwordRequirements = reactive([
  {
    name: '8 Characters',
    validity: false
  },
  {
    name: 'An Uppercase Letter',
    validity: false
  },
  {
    name: 'A Lowercase Letter',
    validity: false
  },
  {
    name: 'A Special Character',
    validity: false
  },
  {
    name: 'A Number',
    validity: false
  }
])
</script>
<template>
  <main class="w-full">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="setPasswordForm"
      :rules="rules"
      label-position="top"
      @keydown.enter="validateForm(ruleFormRef)"
    >
      <!-- password -->
      <el-form-item label="Password" prop="password">
        <el-input
          v-model="setPasswordForm.password"
          type="password"
          show-password
          @input="validatePasswordRequirement"
          placeholder="Enter a new password"
        >
          <template #prefix>
            <password-icon />
          </template>
        </el-input>
        <el-input v-model="hiddenInput" class="hidden" />
      </el-form-item>
      <!-- confirm password -->
      <div v-if="setPasswordForm.password">
        <p class="text-black font-light text-xs lg:text-sm mt-3">At least</p>
        <div class="flex items-center gap-x-2 gap-y-1.5 flex-wrap my-2">
          <p
            v-for="(passwordRequirement, index) in passwordRequirements"
            :key="index"
            class="text-[11px] border-primary border text-gray-300 font-light rounded-full px-2 py-1.5 transition-all duration-300 ease-in flex"
            :class="
              passwordRequirement.validity
                ? 'bg-primary text-white border-secondary'
                : 'border-gray-300'
            "
          >
            <check-icon v-if="passwordRequirement.validity" />
            <span>{{ passwordRequirement.name }}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <router-link to="/login" class="text-xs font-medium underline text-primary cursor-pointer"
          >Remember password? Login</router-link
        >
      </div>
      <!-- login button -->
      <div class="flex items-center justify-end mt-10">
        <el-button
          @click="validateForm(ruleFormRef)"
          :loading="isLoading"
          :disabled="isLoading"
          class="bg-primary text-white w-36 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
        >
          {{ isLoading ? 'Logging in...' : 'Login' }}
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
