<template>

<article   >
    <div class='card-click' @click="moveToArticle">
      <div v-if='!isEditing' class="content">{{article.content}}</div>
      <textarea v-else class="content" v-model="content"></textarea>      
      <div @click="moveToArticle1" class="created-at">{{ article.createdAt | moment('MM월DD일 HH:mm')  }}</div>
    </div>
    <button class='btn' @click="toggleTextArea">{{!isEditing ? '수정' : '수정 취소'}}</button>
    <button class='btn' v-if='!isEditing' @click="deleteArticle">삭제</button>
    <button class='btn' v-else @click="updateArticle">수정 완료</button>
  </article>

  
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      content:'',
      isEditing:false,
    }
  },
 
  props:{
   article:{
     default:{
       content:null,
       _id:null,
       createdAt:null
     }
   }
  },
  methods:{
    toggleTextArea(){
      console.log('Toggle')
      this.content = this.article.content
      this.isEditing=!this.isEditing
    },
    async updateArticle(){
      const {data} = await axios.patch(
        `http://localhost:3000/update`,
        {
          id:this.article._id,
          content: this.content
        }
      )
      if(!data) return
      this.$emit('update',
        {
          content:this.content,
          id:this.article._id
        }
      )
      this.isEditing = false
    },
    async deleteArticle(){
      const {data} = await axios.delete(`http://localhost:3000/delete/${this.article._id}`)
      if(!data) return
      this.$emit('delete',this.article._id)
    },
    moveToArticle(){
      console.log('1')
      this.$router.push({
        name:'Article',
        params:{
          id:this.article._id
        }
      }).catch(() => {})
    },
    moveToArticle1(){
      console.log('2')
    }
  }

}
</script>

<style>
.card-click{
 cursor: pointer;
}
article{
  position: relative;
  padding: 1em;
  box-shadow: 0 3px 3px #22222222;
  margin-bottom:1em;
  background: #fafafa;
 
}
.btn{
  width:150px ;
  margin-right:10px ;
  height: 1.5em;
}

</style>