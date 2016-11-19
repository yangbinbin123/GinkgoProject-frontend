<template>
<div class="container">
<h4>我的账户信息</h4>
<div class="divider"></div>

<div class="row">

      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">perm_identity</i>
          <input name= "name" id="icon_prefix" type="text" class="validate" value="">
          <label for="icon_prefix">我的姓名</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">grade</i>
          <input name= "school" id="School" type="text" class="validate" value="">
          <label for="School">我的学校</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">work</i>
          <input name = "specialty" id="Major" type="text" class="validate" value="">
          <label for="Major">我的专业</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">contacts</i>
          <input name = "userId" id="ID" type="text" class="validate" value="">
          <label for="ID">学工号</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input name = "email" id="email" type="email" class="validate">
          <label for="email" data-error="wrong" data-success="right">我的邮箱</label>
        </div>

     </div>
       <div class="CheckInfo">
        <input type="checkbox" id="checkinfo" />
        <label for="checkinfo">我确认以上信息无误</label>
       </div>
      <div class="subton">
      <a class="btn" onclick="Materialize.toast('信息保存成功', 4000)" v-link="{path:'/Login'}"> 点击保存<i class="material-icons right">send</i></a>
      </div>
  </div>

</div>
</template>

<script>

export default {
  data () {
    return {
      content: 'Home'
    }
  }
}
</script>

<style scoped>
p{
	background-color: blue;
	width: 300px;
	margin: 0 auto;
}

.row{
	margin-top: 10px;
}
.subton{
	margin-left: 500px;
}
.CheckInfo{
	margin-left: 70px;
}
</style>