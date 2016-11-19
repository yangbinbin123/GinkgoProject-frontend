<template>
<div class="container">
<div class="newteam">
<h4>电子科技大学学生创新创业项目</h4>
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
          <input disabled id="TeamName" type="text" value="开心麻花" class="validate">
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">perm_identity</i>
          <input disabled id="TeamLeader" type="text" value="老四" class="validate">
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">input</i>
          <textarea id="TeamInfo" class="materialize-textarea"></textarea>
        </div>

        <div class="CheckInfo">
        <input type="checkbox" id="checkinfo" />
        <label for="checkinfo">我确认以上信息无误</label>
        </div>

      </div>
      <div class="subton">
      <button class="btn waves-effect waves-light" type="submit" name="action">点击确认<i class="material-icons right">send</i>
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
.row{
	margin-top: 10px;
}
.CheckInfo{
	margin-left: 70px;
}
.subton{
	margin-left: 500px;
}
</style>