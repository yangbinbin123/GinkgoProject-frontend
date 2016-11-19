<template>
<div class="container">
<h4>创建新的团队</h4>
<div class="divider"></div>

  <div class="row">
      <div class="row">

        <div class="input-field col s12">
          <i class="material-icons prefix">supervisor_account</i>
          <input id="TeamName" type="text" class="validate">
          <label for="TeamName">团队名称</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">perm_identity</i>
          <input id="AdName" type="text" class="validate">
          <label for="AdName">管理员姓名</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">input</i>
          <textarea id="TeamInfo" class="materialize-textarea"></textarea>
          <label for="TeamInfo">团队信息简要介绍</label>
        </div>

      </div>
      <div class="subton">
      <a  class="btn" v-link="{path:'/msuccesscreate'}">点击创建<i class="material-icons right">send</i>
      </a>
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
	background-color: red;
	width: 300px;
	margin: 0 auto;
}
.row{
	margin-top: 10px;
}
.subton{
	margin-left: 500px;
}
</style>