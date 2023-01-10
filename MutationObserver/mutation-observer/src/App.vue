<template>
 <div>
   <textarea v-model="comIptVal"></textarea>
  <button @click="addCommentItem">添加</button>
  <ul class="comment-list" ref="commentListRef">
    <li class="comment-item" v-for="(item, index) in commentList" :key="item.id" :data-id="item.id">
      <div v-html="item.text" :ref="(el: any) => child[index] = el"></div>
      <button v-if="item.showBtn" @click="showAllBtnClick(child[index] as HTMLElement, item)">
        更多
      </button>
    </li>
  </ul>
 </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';

interface ICommentItem {
  id: string;
  text: string;
  showBtn: boolean;
}

const comIptVal = ref('');
const commentList = reactive<ICommentItem[]>([]);
const commentListRef = ref<HTMLElement | null>(null);
const child = reactive<HTMLElement[]>([]); // 循环绑定 DOM
const MaxSize = 50; // 每一项最大高度

const observer = new MutationObserver(mutationRecord => {
  const currRecord = mutationRecord[mutationRecord.length - 1]; // 最新的记录
  const newNode = currRecord.addedNodes[currRecord.addedNodes.length - 1] as HTMLElement; // 新添加的节点
  
  // 新增加的按钮也会触发观察，所以要判断新增加节点是否是评论  
  if (newNode.className === 'comment-item') {
    const id = newNode.dataset.id;
    const item = commentList.find(item => item.id === id);

    if (newNode.clientHeight > MaxSize) {
      // 如果超出最大高度
      const oText = newNode.children[0] as HTMLElement;
      oText.style.height = MaxSize + 'px';
      oText.style.overflow = 'hidden';
      item.showBtn = true;
    }
  }
});
onMounted(() => {
  observer.observe(commentListRef.value as HTMLElement, {
    subtree: true,
    childList: true,
  });
});

const addCommentItem = () => {
  commentList.push({
    id: String(new Date().getTime()), // 评论的 id
    text: parseComment(comIptVal.value), // 解析输入文本内容
    showBtn: false, // 默认不超出最大高度
  });
};

const parseComment = (str: string) => {
  return str.replace(/[\n\r]/g, '<br />'); // 将 \n 换行解析成 <br /> 元素
};

const showAllBtnClick = (el: HTMLElement, item: ICommentItem) => {
  el.style.overflow = 'visible';
  el.style.height = 'auto';
  item.showBtn = false; // 隐藏点击更多按钮
};


</script>
<style>
li{
  border: 1px solid black;
  width: 300px;
  list-style: none;
  border-radius: 11px;
  box-shadow: 1px 1px 1px rgb(87,157,248);
  
}
button{
  width: 50px;
  background-color:rgb(87,157,248);
  border: 1px solid rgb(87,157,248);
  border-radius: 10px;
}
</style>


