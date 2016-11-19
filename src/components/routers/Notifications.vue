<template>
<div class="container">
    <h4>系统通知</h4>
    <div class="divider"></div>
    <ul class="collapsible popout" data-collapsible="accordion">
     <li>
       <div class="collapsible-header">
          <i class="material-icons">av_timer</i>
          <span class="time">2016-10-19</span>
          <br>
          <i class="material-icons">work</i>
          <span class="GroupManager">通知标题</span>
          <br>
          <i class="material-icons">perm_identity</i>
          <span class="GroupManager">系统通知</span>

          <div style="float:right">
          <span>状态</span>:&nbsp<span class="state">未读</span>
          </div>
      </div>
       <div class="collapsible-body">

       <div class="container">
          <div class="row">
            <div class="input-field col s6">
            <input disabled id="To" type="text" class="validate">
            <label for="To">发送人：</label>
            </div>
            <div class="input-field col s6">
            <input disabled id="To" type="text" class="validate">
            <label for="To">接收人：</label>
            </div>
             <div class="input-field col s12">
                <textarea id="textarea1" disabled class="materialize-textarea"></textarea>
              <label for="textarea1">通知主体</label>
            </div>
          </div>
       <button type="button" class="btn grey submit-button">已阅</button>
       </div>
       </div>
     </li>
     <li>
       <div class="collapsible-header">
          <i class="material-icons">av_timer</i>
          <span class="time">2016-10-19</span>
          <br>
          <i class="material-icons">work</i>
          <span class="GroupManager">通知标题</span>
          <br>
          <i class="material-icons">perm_identity</i>
          <span class="GroupManager">系统通知</span>
          <div style="float:right">
          <span>状态</span>:&nbsp<span class="state">已读</span>
      </div>
      </div>
       <div class="collapsible-body">

       <div class="container">
          <div class="row">
            <div class="input-field col s6">
            <input disabled id="To" type="text" class="validate">
            <label for="To">发送人：</label>
            </div>
            <div class="input-field col s6">
            <input disabled id="To" type="text" class="validate">
            <label for="To">接收人：</label>
            </div>
             <div class="input-field col s12">
                <textarea id="textarea1" disabled class="materialize-textarea"></textarea>
              <label for="textarea1">通知主体</label>
            </div>
          </div>
       <button type="button" class="btn grey submit-button">已阅</button>
       </div>
       </div>
     </li>
   </ul>
</div>
</template>

<script>
export default {
  ready: function () {
    $('.collapsible').collapsible({
       accordion : false
     });
  }
}
</script>

<style scoped>
nav.top-nav{
    height: 122px;
    box-shadow: none;
}
.page-title{
    line-height: 122px;
    font-size: 48px;
}
.submit-button {
	width: 90%;
	margin-left: 5%;
	margin-top: 40px;
	margin-bottom: 15px;
}
</style>
