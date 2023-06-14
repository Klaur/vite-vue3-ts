<template>
  <div class="login-page">
    登录一级路由
    <el-row :gutter="20">
      <el-col :span="12" :offset="0"></el-col>
      <el-col :span="12" :offset="0">
        <el-form
          class="login-form-container"
          :model="formData"
          ref="form"
          :rules="rules"
          label-position="top"
        >
          <el-form-item label="账 户" prop="username">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密 码" prop="password">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item style="margin: 0">
            <el-button :loading="loading" type="primary" @click="onSubmit">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import useUserStore from '@/store/user'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
const $store = useUserStore()
const $router = useRouter()
let loading = ref(false)
let form = ref()
let formData = reactive({
  username: '',
  password: ''
})
let rules = {
  username: [{ required: true, message: '请输入用户账号', trigger: 'blur' }],
  password: [{ required: true, min: 6, max: 10, message: '密码长度至少6位，最多10位' }]
}
async function onSubmit() {
  loading.value = true
  let valid = await form.value.validate().catch(() => {
    loading.value = false
  })
  if (valid) {
    try {
      await $store.login(formData)
      $router.push({ name: 'home' })
      loading.value = false
      ElNotification.success({
        message: '登录成功',
        title: '欢迎回来！'
      })
    } catch (error) {
      loading.value = false
    }
  }
}
</script>
<style scoped lang="scss">
.login-form-container {
  padding: 16px;
  border-radius: 8px;
  background-color: aquamarine;
}
</style>
