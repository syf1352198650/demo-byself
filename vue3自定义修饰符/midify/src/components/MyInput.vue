<template>
 <input type="text" :value="props.title" @input="emitValue" />
</template>

<script setup>
const emit=defineEmits(['update:title'])
const props=defineProps({
  title:{
    type:String,
    default:()=>'0'
  },
  //对不带参数的v-model绑定,检查对象名称为：modelModifiers
    //对于带prop参数的v-model绑定，检查对象名称为：prop + modelModifiers
  titleModifiers:{
    type:Object,
    default:()=>{}
  }
})
const emitValue=(e)=>{
  let value=e.target.value;
  console.log(value);
  if(props.titleModifiers.capitalize){
    value=value.charAt(0).toUpperCase()+value.slice(1);
  }
  emit('update:title',value)
}

</script>

<style scoped>

</style>