<template>
<el-main style="height: 100vh;">
  <div class="login">
    <div class="ms-login">
      <div class="ms-title">Login</div>
      <el-form ref="login" :model="param" :rules="rules" class="ms-content" >
        <el-form-item prop="username">
          <el-input placeholder="username" v-model="param.username">
<!--          Form  -->
            <template #prepend><el-button icon="el-icon-user"/></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter="submitForm">
            <template #prepend><el-button icon="el-icon-lock"/></template>
          </el-input>
        </el-form-item>
        <div class="login-btn" @click="submitForm"><el-button type="primary">Submit</el-button></div>
        <p class="login-tips">entrez votre informations</p>
      </el-form>
    </div>
  </div>
  </el-main>
</template>

<script>
export default {
  name: "Login",
  props: ['username'],
  data() {
    return {
      param: {
        username: undefined,
        password: undefined
      },
      //rules
      rules: {
        username: [
          {
            required: true,
            message: 'entrer username',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'entrer password',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      let {username, password} = this.param;
      if(username && password) {
        //全局引入element后，element已经在app.config.globalProperties添加了全局方法$message
        this.$message.success("bienvenu");
        // alert('登录成功！');
        localStorage.setItem('ms_username', username);
        this.$router.push("/home")
      } else {
        this.$message.error("information incorrect");
      }
    }
  }
}
</script>

<style scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../assets/log-back.png") ;
    background-size: 100% 100%;
  }
  .ms-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
  .ms-title {
    height: 60px;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
  }
  .ms-content {
    padding: 30px 30px 40px;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid #fff;
  }
  .login-btn {
    width: 100%;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
  }
  .login-tips {
    margin-top: 20px;
    font-size: 14px;
    color: #fff;
  }
</style>
