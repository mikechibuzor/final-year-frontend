<script setup lang="ts">
// vue
import { ref, reactive, onMounted } from 'vue'
// element plus
import type { FormInstance, FormRules } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

// icons
import UploadProjectIcon from '@/assets/icons/UploadProjectIcon.vue'

// store
import { useProjectStore } from '@/store/project.store'
import { useSupervisorStore } from '@/store/supervisor.store'
import { useHandleError } from '@/composables/useHandleError'

import { type UploadProjectPayload } from '@/services/project'

// emit
const emit = defineEmits<{
  (e: 'toggleUploadProjectForm', index: number): void
}>()
// composable
const { uploadProject } = useProjectStore()
const { handleErrorResponseNotification, isLoading, notify } = useHandleError()
const { fetchAllSupervisors, getAllSupervisors } = useSupervisorStore()
const router = useRouter()
// refs
const ruleFormRef = ref<FormInstance>()

// reactive
const uploadProjectForm = reactive<UploadProjectPayload>({
  title: '',
  authorLastName: '',
  authorFirstName: '',
  year: '',
  matricNo: '',
  supervisorId: '',
  citation: '232323e',
  projectDoc: null
})
const rules = reactive<FormRules<UploadProjectPayload>>({
  title: [
    { required: true, message: 'Please enter a valid project title', trigger: ['blur', 'change'] }
  ],
  authorLastName: [
    {
      required: true,
      message: 'Please enter a valid author last name',
      trigger: ['blur', 'change']
    }
  ],
  authorFirstName: [
    {
      required: true,
      message: 'Please enter a valid author first name',
      trigger: ['blur', 'change']
    }
  ]
})

// function
const uploadProjectHandler = async () => {
  isLoading.value = true
  await uploadProject(uploadProjectForm)
    .then(() => {
      isLoading.value = false
      router.push('/home')
    })
    .catch((error) => {
      handleErrorResponseNotification(error)
    })
}
const validateForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid: any): any => {
    if (valid) {
      uploadProjectHandler()
    } else {
      notify({
        title: 'Error',
        type: 'error',
        text: 'Please fill all inputs correctly'
      })
    }
  })
}
const handleBeforeUpload = (file: File) => {
  uploadProjectForm.projectDoc = file
  return !file
}
// hooks
onMounted(() => {
  fetchAllSupervisors()
})
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
        <el-form-item label="Author" prop="authorFirstName">
          <el-input v-model="uploadProjectForm.authorFirstName" placeholder="First name" />
        </el-form-item>
        <el-form-item label="." prop="authorLastName">
          <el-input v-model="uploadProjectForm.authorLastName" placeholder="Last name" />
        </el-form-item>
      </div>
      <!-- supervisor -->
      <el-form-item label="Supervisor" prop="supervisor">
        <el-select v-model="uploadProjectForm.supervisorId">
          <el-option
            v-for="(supervisor, index) in getAllSupervisors"
            :key="index"
            :value="supervisor.id"
            >{{
              supervisor.title + ' ' + supervisor.initials + ' ' + supervisor.lastName
            }}</el-option
          >
        </el-select>
      </el-form-item>
      <!-- year and matric -->
      <div class="flex items-center gap-5">
        <el-form-item label="Year" prop="year">
          <el-input v-model="uploadProjectForm.year" placeholder="Enter year" />
        </el-form-item>
        <el-form-item label="Matric Number" prop="matric">
          <el-input v-model="uploadProjectForm.matricNo" placeholder="Enter matric" />
        </el-form-item>
      </div>
      <!-- citation -->
      <!-- <el-form-item label="Citation" prop="citation">
        <el-input
          v-model="uploadProjectForm.citation"
          :rows="8"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item> -->
      <!-- upload file -->
      <el-upload accept="pdf" drag :before-upload="handleBeforeUpload">
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
