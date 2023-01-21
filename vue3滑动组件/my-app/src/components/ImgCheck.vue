<template>
  <div class="box">
    <h3>拖动下方滑块完成拼图</h3>
    <div ref="bgImgRef" class="img-box">
      <img class="bg" src="../assets/hycdn.jpeg" alt="" />
      <img
        class="hd"
        src="../assets/hycdn.png"
        :style="{ left: data.left + 'px', top: data.top + 'px' }"
        alt=""
      />
    </div>
    <!-- @mousemove="btnMousemove" -->
    <div class="btn-box">
      <div
        ref="btnRef"
        class="btn"
        :style="{ left: data.left + 'px' }"
        @mousedown="btnMousedown"
      >
        |||
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, toRefs } from "vue";

let $props = defineProps({
  top: {
    type: Number,
    default: 45,
  },
});

let $emit = defineEmits(["getPosition"]);

const data = reactive({
  left: 28,
  top: $props.top,
  btnLeft: 0,
  btnRef: null,
  offsetLeft: 0,
  bgImgRef: null,
});
const { btnRef, bgImgRef } = toRefs(data);

// let btnRef = ref(null)
onMounted(() => {
  data.offsetLeft = data.bgImgRef.offsetLeft;
  console.log("onMounted");
  document.body.addEventListener("mouseup", btnMouseup);
});

//按下
var btnMousedown = (e) => {
  //   console.log(e);
  //计算出鼠标按下的位置 pagex - btn距离窗口的位置  = 鼠标电机的位置距离btn的边距
  data.btnLeft = e.pageX - data.btnRef.offsetLeft;
  document.body.addEventListener("mousemove", btnMousemove);
};
//滑动的时候只要求鼠标没有松开
var btnMousemove = (e) => {
  //   console.log("滑动");
  //left = 鼠标的位置pageX - data.btnRef.offsetLeft -  data.btnLeft
  let x = e.pageX - data.offsetLeft - data.btnLeft;
  //   console.log(x);
  if (x <= 0) x = 0;
  else if (x >= 285) x = 285;
  data.left = x;
};

// 松开
var btnMouseup = (e) => {
  //   console.log(data.left);
  $emit("getPosition", data.left);
  document.body.removeEventListener("mousemove", btnMousemove);
};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  user-select: none;
}
.box {
  width: 340px;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 auto;
  padding: 10px;
}
.img-box {
  position: relative;
}
.bg {
  width: 100%;
}
.hd {
  position: absolute;
  height: 68px;
  width: 68px;
  /* top: 45px; */
  left: 26px;
  cursor: pointer;
}
.btn-box {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #e4e4e4;
  margin-top: 15px;
}
.btn {
  position: relative;
  top: -10px;
  left: 26px;
  width: 55px;
  height: 30px;
  text-align: center;
  letter-spacing: 5px;
  line-height: 30px;
  color: #fff;
  border-radius: 15px;
  background-color: rgb(26, 121, 255);
  box-shadow: rgb(26 121 255 / 52%) 0px 0px 10px 1px;
  cursor: pointer;
}
</style>