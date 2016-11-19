<template>    
<div class="container">
    <h4>电子科技大学创新工坊/<span>创建我的小组</span></h4>
    <div class="divider"></div>

    <div class="input-field col s12">
      <i class="material-icons prefix">supervisor_account</i>
      <input id="icon_prefix" type="text" class="validate" value="">
      <label for="icon_prefix">小组名称</label>
    </div>

    <div class="input-field col s12">
      <i class="material-icons prefix">input</i>
      <textarea id="TeamInfo" class="materialize-textarea"></textarea>
      <label for="TeamInfo">小组信息简要介绍</label>
    </div>

<table class="striped responsive-table">
  <thead>
   <tr>
      <th data-field="Name">姓名</th>
      <th data-field="ID">学工号</th>
      <th data-field="Teammate">是否邀请</th>
   </tr>
  </thead>
  <tbody>
   <tr>
   <td>杨林彬</td>
   <td>2014220402030</td>
   <td>      
      <input type="checkbox" id="ensure1" />
      <label for="ensure1">确认</label><td>
   </tr>

   <tr>
   <td>王杰</td>
   <td>2014220402029</td>
   <td>      
      <input type="checkbox" id="ensure2" />
      <label for="ensure2">确认</label><td>
   </tr>

   <tr>
   <td>周宏宇</td>
   <td>2014220402028</td>
   <td>      
      <input type="checkbox" id="ensure3" />
      <label for="ensure3">确认</label><td>
   </tr>

  </tbody>
</table>

<div class="subton">
  <a class="btn">点击创建<i class="material-icons right">send</i>
  </a>
</div>

</div>
</template>

<style scoped>
nav.top-nav{
    height: 122px;
    box-shadow: none;
  }
  .page-title{
    line-height: 122px;
    font-size: 48px;
  }

.subton{
  margin-left: 450px;
  margin-top: 20px;
}
</style>