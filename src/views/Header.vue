<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <img alt="logo" src="/images/logo.svg" height="40" class="mr-2" />
    </Menubar>
  </div>
</template>

<script setup>
import "primevue/resources/themes/lara-light-teal/theme.css";

import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-pencil",
  },
  {
    label: "About Me",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "Web Developer",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Frontend Developer",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Strong JUNIOR",
        icon: "pi pi-fw pi-users",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-fw pi-calendar",
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  },
]);
</script>

<style scoped>
.card {
  width: 80%;
  margin: auto;
  backdrop-filter: blur(5px) !important;
  z-index: 22;
}

@media (min-width: 320px) and (max-width: 576px){
  .card{
    width: 100%;
    height: auto;
  }
}
@media (min-width: 576px) and (max-width: 768px){
  .card{
    width: 100%;
    height: auto;
  }
}
@media (min-width: 768px) and (max-width: 992px){
  .card{
    width: 100%;
    height: auto;
  }
}

 
 
</style>
