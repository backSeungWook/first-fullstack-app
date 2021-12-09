// ex mysql 테이블 

const mongoose = require('mongoose')
const Article = new mongoose.Schema({
  content:{type:String, default:"", required:true}, // 게시글 본문
  createdAt:{type:Date,default:Date.now,required:true} // 등록 날짜 
})

module.exports = Article