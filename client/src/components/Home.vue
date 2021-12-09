<template>
  <div>
    <h1>t새 게시글 만들기</h1>
    <textarea v-model="content"></textarea>
    <div>
      <button @click="createArticle">생성하기</button>
    </div>
    <h2>작성된 게시글</h2>
    <ul>
      <li v-for='a in articles' :key='a.id'>{{a.content}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      content:"",
      articles:[]
    }
  },
  created(){
    this.findOneArticle()
  },
  methods:{    
    async findOneArticle(){
           
      const {data} = await axios.get(`http://localhost:3000/read`)
      this.articles = data
      
    },
    async createArticle(){
      if(this.content.length === 0){
        window.alert('글을 입력해주세요')  
        return
      }
      const {data} = await axios.post('http://localhost:3000/create',{
        content:this.content
      })
      if(!data){
        window.alert('생성 실패!')
        return
      }
      
      this.articles.push(data)
      this.content = ''
    }
  }
}
</script>

<style scoped>
</style>