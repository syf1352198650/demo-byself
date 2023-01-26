<template>
  <div>
    父{{content  }}
<MyInput v-model:title.capitalize="content"></MyInput>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MyInput from "../src/components/MyInput.vue"
const content=ref('syf')

</script>

<style  scoped>

</style>