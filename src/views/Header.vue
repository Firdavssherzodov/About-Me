<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <img alt="logo" src="/images/logo.svg" height="40" class="mr-2" />
    </Menubar>
  </div>
</template>

<script setup>

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
  background-color: #240145;
}
}
@media (min-width: 576px) and (max-width: 768px){
  .card{
    width: 100%;
    height: auto;
  }
}
</style>