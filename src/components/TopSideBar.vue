<template>
  <!--顶部导航条-->

  <ul id="dropbar" class="dropdown-content">
    <li><a v-link="{path: '/account'}">我的账户</a></li>
    <li><a href="C:/Users/爱拼搏的豆子Bean/Desktop/happy/Start.html">切换账户</a></li>
  </ul>

  <nav class="brown darken-2">
     <div class="nav-wrapper">
    <a id="slidemenubtn" class="brand-logo left" data-activates="slidenav"><i class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="#">帮助</a></li>
      <li><a v-link="{path: '/notifications'}">通知</a></li>
      <li><a class="dropdown-button" data-activates="dropbar">账户管理<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
     </div>
  </nav>

  <!--左边导航-->
  <ul id="slidenav" class="side-nav">
    <li><div class="logo">
      <a href="#!" class="brand-logo">Logo</a>
    </div></li>
    <li><div class="divider"></div></li>
    <ul class="collapsible" data-collapsible="expandable">
      <li>
        <div class="collapsible-header waves-effect waves-teal font-nav"><i class="mdi-image-filter-drama"></i>团队</div>
        <div class="collapsible-body">
          <ul>
            <li><a v-link="{path: '/groups'}" class="waves-effect waves-teal">所有团队</a></li>
            <li><a v-link="{path: '/created'}" class="waves-effect waves-teal">我创建的</a></li>
            <li><a v-link="{path: '/participation'}" class="waves-effect waves-teal">我参加的</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header waves-effect waves-teal font-nav"><span class="mdi-communication-email"></span>任务</div>
        <div class="collapsible-body">
          <ul>
            <li><a v-link="{path: '/tasksubmit'}" class="waves-effect waves-teal">提交任务</a></li>
            <li><a v-link="{path: '/homeworkcreate'}" class="waves-effect waves-teal">布置任务</a></li>
            <li><a v-link="{path: '/homeworkcheck'}" class="waves-effect waves-teal">任务批改</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="collapsible-header waves-effect waves-teal font-nav"><span class="mdi-communication-email"></span>通知</div>
        <div class="collapsible-body">
          <ul>
            <li><a v-link="{path: '/notifications'}" class="waves-effect waves-teal">系统通知<span class="new badge">1</span></a></li>
            <li><a v-link="{path: '/commonmessage'}" class="waves-effect waves-teal">普通通知<span class="new badge">1</span></a></li>
          </ul>
        </div>
      </li>
      <li><div class="collapsible-header waves-effect wave-teal font-nav" v-link="{path: '/account'}">账户</div></li>
    </ul>
  </ul>
</template>

<script>
export default {
  ready: function () {
	let menuBtn=$('#slidemenubtn');
    	menuBtn.sideNav({		 //初始化侧边滑动菜单
		menuWidth: 300,
	});
	menuBtn.sideNav('hide');	 //默认收起侧滑菜单
	$('.collapsible').collapsible(); //初始化列表收拢效果
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
	margin-left:2%;
}
</style>
