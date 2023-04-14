<template >
  <el-menu 
    :router="true" 
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item >
         <el-image
      style="width: 50px; height: 50px"
      :src="img"
      :zoom-rate="1.2"
      :initial-index="4"
      fit="cover"
    />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item > <router-link to="/home">  {{ $t("main.hello") }}</router-link> |
            
            </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Espace d'etudiant</template>
      <el-menu-item ><router-link to="/about">Les étudiant</router-link></el-menu-item>
      <el-menu-item ><router-link  to="/profile">profile</router-link></el-menu-item>
      <!-- <el-menu-item > -->
        <el-select v-model="$i18n.locale">
      <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.text }}
      </el-option>
    </el-select>
    <!-- </el-menu-item> -->
      <el-menu-item > <a type="submit"   @click="UserLogout()">log`out </a></el-menu-item>
      
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import img from "../assets/home.png";
import router from '../router'
import { useI18n } from 'vue-i18n'
// import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js';
// const t = useI18n()
// const t = useI18n();

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const  isLoggedIn=()=> {
    return window.localStorage.getItem("ms_username");
  }
  const UserLogout=()=> {
            
            localStorage.removeItem('ms_username');
            // console.warn('log out ');
            // alert('hh')
            router.push('/');
            
            
        }
const langs =ref( [
        { code: "en", text: "English" },
        { code: "fr", text: "Francais" },
      ] )
 
</script>

<style>
.flex-grow {
  flex-grow: 1;
}

</style>

