// ex mysql 테이블 

const mongoose = require('mongoose')
const Article2 = new mongoose.Schema({
  content:{type:String, default:"", required:true}, // 게시글 본문
  createdAt:{type:Date,default:Date.now,required:true}, // 등록 날짜 
  title:{type:String, default:"", required:false}, // 게시글 본문 required: treu = 필수값
})

module.exports = Article2