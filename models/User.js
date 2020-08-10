const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 20,
  },
  email: {
    type: String,
    trim: true,
    //trim = 작성할때 스페이스바가 있으면 지워줌
    unique: 1,
    // unique = 똑같은 이메일 사용 x
  },
  password: {
    type: String,
    minlength: 5,
  },
  nickname: {
    type: String,
    minlength: 10,
  },
  role: {
    type: Number,
    default: 0,
    // role은 관리자, 일반 유저 분간 할 수 있음 ex) Number가 1이면 관리자 0이면 일반 유저, default = 지정하지 않으면 0 임의지정
  },
  image: String,
  // image = 유저 사진
  token: { type: String },
  // token 유효성 검사 할때 사용
  tokenExp: { type: Number },
  // token 유효기간
});

const User = mongoose.model('User', userSchema);
module.export = { User };
