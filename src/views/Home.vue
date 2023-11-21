<template>
    <div>
<HeaderVue/>
<About/>
<content1/>
<content2/>
<content3/>
<content4/>
<content5/>
<footer1/>


 
    </div>
</template>

<script setup>
import HeaderVue from './Header.vue'
import About from '../views/Aboutme.vue'
import content1 from '../views/Section_one.vue'
import content2 from '../views/Section_two.vue'
import content3 from '../views/Section_three.vue'
import content4 from '../views/Section_foure.vue'
import content5 from '../views/Section_five.vue'
import footer1 from '../views/Footer.vue'
 
import {onMounted } from 'vue'

onMounted(()=>{
    

    setTimeout(()=>{
        alert(`Asalamu alekum va rohmatullohi va barakatuh
Xush kelibsiz`);
    },3000)})




//  alert(`Dasturlash sohasida oid qiziqtirgan savolaringzini bemalol berishingiz munkin pastdagi ${xabar} yonidagi aloqa tugmasi bilan men bilan only chat orqali muloqot qilishingiz mumkin`)
</script>

<style scoped>

</style>