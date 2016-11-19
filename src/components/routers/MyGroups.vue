<template>
<div class="container">
<h4>我创建的团队</h4>
<div class="divider"></div>

<div class="row">

<div class="Team">
   <div class="col s12">
    <div class="card horizontal hoverable">
      <div class="card-image">
        <img src="images/1.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div class="card-title">银杏黄-伙伴任务管理系统</div>
          <div class="title">管理员：<span>聪明的阿凡提</span></div>
        </div>
        <div class="card-action">
          <a v-link="{path:'/mgroupinside'}">进入团队</a>
        </div>
      </div>
    </div>
    </div>
 </div>

</div>
<div class="NewBut">
<a class="btn-floating btn-large waves-effect waves-light red" id="NewCreate" v-link="{path:'/mgroupcreate'}"><i class="material-icons">add</i></a>
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

.NewBut{
  margin-left: 520px;
}
</style>