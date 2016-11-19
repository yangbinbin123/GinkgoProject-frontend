<template>
<div class="container">
    <h4>作业提交中心</h4>
    <div class="divider"></div>
<ul class="collapsible popout" data-collapsible="accordion">


<li>
<div class="collapsible-header">
<i class="material-icons">av_timer</i>
<span class="time">2016-10-19</span>
<br>
<i class="material-icons">work</i>
<span class="GroupManager">第一类作业</span>
<br>
<i class="material-icons">perm_identity</i>
<span class="GroupManager">银杏黄团队</span>
<div style="float:right">
<span class="finished">1</span>/<span class="total">25</span>
</div>
</div>

<div class="collapsible-body">
 <div class="container">
       <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" disabled class="materialize-textarea"></textarea>
          <label for="textarea1">作业内容</label>
        </div>
      </div>
 <form class="row s12">
 <table class="striped responsive-table">
   <thead>
   <tr>
      <th data-field="Job">职务</th>
      <th data-field="Name">姓名</th>
      <th data-field="ID">学工号</th>
   </tr>
   </thead>

   <tbody>
   <tr>
   <td>组员</td>
   <td>杨林彬</td>
   <td>2014220402030</td>
   <form action="#">
   <td>
    <div class="file-field input-field">
      <div class="btn">
        <span>上传文档</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </td>
   <td><a class="waves-effect waves-teal btn-flat">提交</a><a class="waves-effect waves-teal btn-flat">查看</a></td>
   </form>
   </tr>
   </tbody>
  </table>
    <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1"class="materialize-textarea"></textarea>
          <label for="textarea1">我的回答</label>
        </div>
      </div>
   <div class="subton">
      <button class="btn waves-effect waves-light" type="submit" name="action">提交作业<i class="material-icons right">send</i>
      </button>
   </div>
   </form>
   </div>
</div>
</li>

<li>
<div class="collapsible-header">
<i class="material-icons">av_timer</i>
<span class="time">2016-10-19</span>
<br>
<i class="material-icons">work</i>
<span class="GroupManager">第二类作业</sapn>
<br>
<i class="material-icons">perm_identity</i>
<span class="GroupManager">电子科大学创新工坊</sapn>
<div style="float:right">
<span class="finished">1</span>/<span class="total">25</span>
</div>
</div>

<div class="collapsible-body">

 <div class="container">
       <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" disabled class="materialize-textarea"></textarea>
          <label for="textarea1">作业内容</label>
        </div>
      </div>
 <form class="row s12">
 <table class="striped responsive-table">
   <thead>
   <tr>
      <th data-field="Job">职务</th>
      <th data-field="Name">姓名</th>
      <th data-field="ID">学工号</th>
   </tr>
   </thead>

   <tbody>
   <tr>
   <td>组员</td>
   <td>杨林彬</td>
   <td>2014220402030</td>
   <form action="#">
   <td>
    <div class="file-field input-field">
      <div class="btn">
        <span>上传文档</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </td>
   <td><a class="waves-effect waves-teal btn-flat">提交</a><a class="waves-effect waves-teal btn-flat">查看</a></td>
   </form>
   </tr>
   </tbody>
  </table>
    <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1"class="materialize-textarea"></textarea>
          <label for="textarea1">我的回答</label>
        </div>
      </div>
   <div class="subton">
      <button class="btn waves-effect waves-light" type="submit" name="action">提交作业<i class="material-icons right">send</i>
      </button>
   </div>
   </form>
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
  .part{margin-top:100px; border:0; padding:0;}
</style>
