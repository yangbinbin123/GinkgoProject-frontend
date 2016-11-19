<template>
<div id="app">
<div class="container">
    <h4>银杏黄团队</h4>
    <div class="divider"></div>
<div class="container">
<ul id="slide-out" class="side-nav">
    <li><div class="userView">
      <img class="responsive-img" src="images/1.gif">
    </div>
    </li>
    <li><h5 class="center-align">系统邮箱助手</h5></li>
    <li><div class="divider"></div></li>
    <li>
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
                <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">通知主体</label>
            </div>
        </div>
    </li>
    <li>
      <a class="btn brown darken-2" onclick="Materialize.toast('消息发送成功', 4000)"><i class="material-icons">send</i>点击发送</a>
    </li>
</ul>
</div>
<ul class="collapsible popout" data-collapsible="accordion">
<li>
<div class="collapsible-header">
<i class="material-icons">group_work</i>
<span class="title">三只和尚小组</span>
<br>
<i class="material-icons">perm_identity</i>
组长：<span class="GroupManager">杨林彬</sapn>
<div style="float:right" class="DeleteButton">
<a class="tooltipped" data-position="left" data-delay="50" data-tooltip="删除小组" onclick="Materialize.toast('删除成功', 4000)" ><i class="material-icons">delete</i></a>
</div>
<div style="float:right"> 
<a class="tooltipped button-collapse" data-position="left" data-delay="50" data-tooltip="私信小组" data-activates="slide-out"><i class="material-icons">chat_bubble_outline</i></a>
</div>
</div>

<div class="collapsible-body">

   <div class="row">

   <div class="input-field col s2">
   <i class="material-icons prefix">mode_edit</i>
   <input id="TotalNum" type="text" class="validate">
   <label for="TotalNum">上限人数</label>
   </div>

   <div class="input-field col s1">
   <button class="btn"><i class="material-icons">edit</i></button>
   </div>

   <div class="input-field col s1">
   <button class="btn"><i class="material-icons">save</i></button>
   </div>

   </div>

   <table class="striped responsive-table">
   <thead>
   <tr>
      <th data-field="Job">职务</th>
      <th data-field="School">学院</th>
      <th data-field="SID">学号</th>
      <th data-field="Name">姓名</th>
      <th data-field="Telnumber">电话</th>
      <th data-field="Mailbox">邮箱</th>
      <th data-field="Mail">联系</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>组长</td>
   <td>信息与软件工程学院</td>
   <td>2014220402030</td>
   <td>杨林彬</td>
   <td>15520442726</td>
   <td>2830406835@qq.com</td>
   <td>
   <a class="tooltipped button-collapse" data-position="left" data-delay="50" data-tooltip="私信" data-activates="slide-out"><i class="material-icons">chat_bubble_outline</i></a>
   </td>
   </tr>
   </tbody>
   </table>
   </div>
</li>


<li>
<div class="collapsible-header">
<i class="material-icons">group_work</i>
<span class="title">数学建模</span>
<br>
<i class="material-icons">perm_identity</i>
组长：<span class="GroupManager">丁汉星</sapn>
<div style="float:right" class="DeleteButton">
<a class="tooltipped" data-position="left" data-delay="50" data-tooltip="删除小组" onclick="Materialize.toast('删除成功', 4000)"><i class="material-icons">delete</i></a>
</div>
<div style="float:right"> 
<a class="tooltipped button-collapse" data-position="left" data-delay="50" data-tooltip="私信" data-activates="slide-out"><i class="material-icons">chat_bubble_outline</i></a>
</div>
</div>

<div class="collapsible-body">
   <div class="row">

   <div class="input-field col s2">
   <i class="material-icons prefix">mode_edit</i>
   <input id="TotalNum" type="text" class="validate">
   <label for="TotalNum">上限人数</label>
   </div>

   <div class="input-field col s1">
   <button class="btn"><i class="material-icons">edit</i></button>
   </div>

   <div class="input-field col s1">
   <button class="btn"><i class="material-icons">save</i></button>
   </div>

   </div>
   <table class="striped responsive-table">
   <thead>
   <tr>
      <th data-field="Job">职务</th>
      <th data-field="School">学院</th>
      <th data-field="SID">学号</th>
      <th data-field="Name">姓名</th>
      <th data-field="Telnumber">电话</th>
      <th data-field="Mailbox">邮箱</th>
      <th data-field="Mail">联系</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>组长</td>
   <td>物理电子学院</td>
   <td>2014050402030</td>
   <td>丁汉星</td>
   <td>15520442726</td>
   <td>2830406835@qq.com</td>
   <td>
   <a class="tooltipped button-collapse" data-position="left" data-delay="50" data-tooltip="私信" data-activates="slide-out"><i class="material-icons">chat_bubble_outline</i></a>
   </td>
   </tr>
   </tbody>
   </table>
   </div>
</li>



</ul>


</div>

</div>
</template>
<script>
export default {
  ready: function () {
    $('.collapsible').collapsible({
       accordion : false
     });
    $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    });
    $('.button-collapse').sideNav('hide');
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  },

  data: function(){
    return{
      items: [
        {
          ifedit:false
        }
      ]
    }
  },
  method:{
    activate: function(item){
        item.ifedit = true
    }
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
