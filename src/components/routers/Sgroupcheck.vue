<template>
<div class="container">
    <h4>电子科技大学创新工坊/<span>蒲公英的约定</span></h4>
    <div class="divider"></div>
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
   <td>组长</td>
   <td>周杰伦</td>
   <td>2014220402001</td>
   <td>
   <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>提交文档</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </form>
   <td>
   <td><a class="waves-effect waves-teal btn-flat">查看</a><td>
   <td> <div class="input-field col s5">
          <input id="ID" disabled type="text" class="validate" value="">
          <label for="ID">我的评分</label>
        </div>
   </td>
   </tr>


   <tr>
   <td>组员</td>
   <td>杨林彬</td>
   <td>2014220402030</td>
   <td>
   <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>提交文档</span>
        <input disabled type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </form>
   <td>
   <td><a class="waves-effect waves-teal btn-flat">查看</a><td>

   <td> <div class="input-field col s5">
          <input id="ID" type="text" class="validate" value="">
          <label for="ID">我的评分</label>
        </div>
   </td>
   </tr>

   <tr>
   <td>组员</td>
   <td>王杰</td>
   <td>2014220402029</td>
   <td>
   <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>提交文档</span>
        <input disabled type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </form>
   <td>
   <td><a class="waves-effect waves-teal btn-flat">查看</a><td>

   <td> <div class="input-field col s5">
          <input id="ID" type="text" class="validate" value="">
          <label for="ID">我的评分</label>
        </div>
   </td>

   </tr>

   <tr>
   <td>组员</td>
   <td>周宏宇</td>
   <td>2014220402028</td>
   <td>
   <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>提交文档</span>
        <input disabled type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
   </form>
   <td>
   <td><a class="waves-effect waves-teal btn-flat">查看</a><td>

   <td> <div class="input-field col s5">
          <input id="ID" type="text" class="validate" value="">
          <label for="ID">我的评分</label>
        </div>
   </td>

   </tr>

   </tbody>
   </table>

   <div class="subton">
      <button class="btn waves-effect waves-light" type="submit" name="action">保存<i class="material-icons right">send</i>
      </button>
   </div>
   </form>
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
  nav.top-nav{
    height: 122px;
    box-shadow: none;
  }
  .page-title{
    line-height: 122px;
    font-size: 48px;
  }
  .subton{
  margin-left: 520px;
  margin-top: 20px;
}
</style>