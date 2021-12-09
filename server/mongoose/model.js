
require('dotenv').config()
const mongoose = require('mongoose')

const schema = require('./schema')

const db = mongoose.connection;
// 데이터 베이스 커넥션 


const model = (()=>{
  db.on('error',console.error)
  db.on('open',()=>{
    console.log("Connectiong mongodb~!")
  })

  

  // DB 연결
  mongoose.connect(
      `mongodb+srv://test:${process.env.DB_PASSWORD}@cluster0.zakxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      { useNewUrlParser:true}
    )

  // 스키마 연결
  const model = {}
  for(let key in schema){
    model[key] = mongoose.model(key,schema[key])
    console.log('model[k] = ',model[key])
  }
  console.log('model{} = ',model)
  return model

})();

module.exports = model