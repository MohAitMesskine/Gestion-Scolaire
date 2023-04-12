<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue' 
import Footer from './components/Footer.vue'
const nav =ref(false);
</script>

<template>
           


<router-view/>


 
</template>

<style scoped >
@import './assets/base.css';



</style>