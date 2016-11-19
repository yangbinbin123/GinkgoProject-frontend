<template>
<div class="container">
<div class="newteam">
<h4>加入新的团队</h4>
</div>
<div class="divider"></div>

<div class="searchbar">
<div class="row">
<div class="row">
  <div class="input-field col s2">
    <i class="material-icons prefix">search</i>
    <input id="icon_prefix" type="text" class="validate">
    <label for="icon_prefix">输入团队号</label>
  </div>

  <div class="input-field col s2">
    <button class="btn">查询</button>
  </div>

</div>

</div>
</div>
<div class="divider"></div>
 <div class="row">
      <div class="row">

        <div class="input-field col s12">
        <i class="material-icons prefix">account_circle</i>
          <input disabled id="TeamId" type="text" value="团队编号" class="validate">
        </div>


        <div class="input-field col s12">
          <i class="material-icons prefix">supervisor_account</i>
          <input disabled id="TeamName" type="text" value="团队名称" class="validate">
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">perm_identity</i>
          <input disabled id="TeamLeader" type="text" value="团队管理员" class="validate">
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">input</i>
          <textarea id="TeamInfo" disabled class="materialize-textarea">团队信息简要介绍</textarea>
        </div>

      </div>
      <div class="subton">
      <button class="btn waves-effect waves-light" type="submit" name="action">确认加入<i class="material-icons right">send</i>
      </button>
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
	background-color: green;
	width: 300px;
	margin: 0 auto;
}
.CheckInfo{
	margin-left: 70px;
}
.searchbar{
  margin-top: 10px;
}
.subton{
  margin-left:500px;
}
</style>