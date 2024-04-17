<script setup lang="ts">
// vue
import { ref, reactive } from 'vue'
// element plus
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

// icons
import UploadProjectIcon from '@/assets/icons/UploadProjectIcon.vue'
// notification
import { useNotification } from '@kyvg/vue3-notification'

// interface
interface UploadProjectForm {
  title: string
  firstName: string
  lastName: string
  year: string
  matric: string
  supervisor: string
  citation: string
}

// emit
const emit = defineEmits<{
  (e: 'toggleUploadProjectForm', index: number): void
}>()
// composable
const { notify } = useNotification()
// refs
const ruleFormRef = ref<FormInstance>()
const isLoading = ref(false)

// reactive
const uploadProjectForm = reactive<UploadProjectForm>({
  title: '',
  lastName: '',
  firstName: '',
  year: '',
  matric: '',
  supervisor: '',
  citation: ''
})
const rules = reactive<FormRules<UploadProjectForm>>({
  title: [
    { required: true, message: 'Please enter a valid admin code', trigger: ['blur', 'change'] }
  ]
})

// function
const validateForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any): any => {
    if (valid) {
      console.log('ok')
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
  <main class="lg:w-[30rem] mx-auto mt-10">
    <el-form
      hide-required-asterisk
      ref="ruleFormRef"
      :model="uploadProjectForm"
      :rules="rules"
      label-position="top"
    >
      <!-- project title -->
      <el-form-item label="Project Title" prop="title">
        <el-input v-model="uploadProjectForm.title" placeholder="Title" />
      </el-form-item>
      <!-- author -->
      <div class="flex items-center gap-5">
        <el-form-item label="Author" prop="firstName">
          <el-input v-model="uploadProjectForm.firstName" placeholder="First name" />
        </el-form-item>
        <el-form-item label="." prop="lastName">
          <el-input v-model="uploadProjectForm.lastName" placeholder="Last name" />
        </el-form-item>
      </div>
      <!-- supervisor -->
      <el-form-item label="Supervisor" prop="supervisor">
        <el-select v-model="uploadProjectForm.supervisor">
          <el-option value="Dr. O. Adeleke">Dr. O. Adeleke</el-option>
        </el-select>
      </el-form-item>
      <!-- year and matric -->
      <div class="flex items-center gap-5">
        <el-form-item label="Year" prop="year">
          <el-input v-model="uploadProjectForm.firstName" placeholder="Enter year" />
        </el-form-item>
        <el-form-item label="Matric Number" prop="matric">
          <el-input v-model="uploadProjectForm.lastName" placeholder="Enter matric" />
        </el-form-item>
      </div>
      <!-- citation -->
      <el-form-item label="Citation" prop="citation">
        <el-input
          v-model="uploadProjectForm.citation"
          :rows="8"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <!-- upload file -->
      <el-upload accept="pdf" :multiple="false" drag :auto-upload="false">
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">Drop file here or <em>click to upload a project</em></div>
        <template #tip>
          <div class="el-upload__tip">pdf file with a size less than 4500kb</div>
        </template>
      </el-upload>
      <!-- add another project -->
      <div class="flex items-center gap-x-2 cursor-pointer text-primary text-xs lg:text-sm">
        <span>Add another project</span>
        <upload-project-icon />
      </div>
      <div class="flex items-center justify-end mt-5">
        <el-button
          @click="validateForm(ruleFormRef)"
          :loading="isLoading"
          :disabled="isLoading"
          class="bg-primary text-white w-36 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
        >
          {{ isLoading ? 'Submitting...' : 'Submit' }}
        </el-button>
      </div>
    </el-form>
  </main>
</template>
<style scoped lang="scss">
:deep(.el-form-item) {
  margin-top: 1rem;
  width: 100%;
}
:deep(.el-form-item__label) {
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 0.85rem;
  font-weight: 400;
}
:deep(.el-input__wrapper),
:deep(.el-select__wrapper) {
  border-radius: 0.5rem;
  border: 1px solid #76453b;
  background-color: #f5f4f4;
  height: 3.5rem;
}
:deep(.el-input__inner) {
  padding: 0 0.75rem;
}

@media screen and (max-width: 768px) {
  :deep(.el-form-item__label) {
    font-size: 0.75rem;
  }
}
</style>
