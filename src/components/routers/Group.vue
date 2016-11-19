<template>
<div class="container">
<h4>所有团队</h4>
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

  <div class="Team">
    <div class="col s12">
    <div class="card horizontal hoverable">
      <div class="card-image">
        <img src="images/1.jpg">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div class="card-title">电子科技大学创新工坊</div>
          <div class="title">管理员：<span>蓝皮鼠与大脸猫</span></div>
        </div>
        <div class="card-action">
          <a v-link="{path:'/sgroupinside'}">进入团队</a>
        </div>
      </div>
    </div>
    </div>
  </div>


</div>
  <div class="fixed-action-btn horizontal click-to-toggle">
    <a class="btn-floating btn-large red">
      <i class="material-icons">menu</i>
    </a>
    <ul>
      <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
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
	width: 300px;
}
</style>