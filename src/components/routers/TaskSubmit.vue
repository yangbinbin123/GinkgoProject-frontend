<template>
<div class="container">
    <h4>任务提交</h4>
    <div class="divider"></div>
    <ul class="collapsible popout" data-collapsible="accordion">
	     <li>
	        <div class="collapsible-header group-name waves-effect">
		          <i class="large material-icons">perm_identity</i>
		            团队名称
		            <span class="unfinish-count">{{4}}未完成</span>
	        </div>
	        <div class="collapsible-body">
		          <ul class="collapsible task-item" data-collapsible="accordion">
		              <li>
			                <div class="collapsible-header waves-effect">
			                      第一次作业<span class="taskhint" style="color: green;">已提交</span>
			                </div>
			                <div class="collapsible-body">
                        <div class="task-panel">
                          <ul class="tabs tabs-fixed-width">
                            <li class="tab col s4"><a href="#taskInfoPanel" class="active">任务信息</a></li>
                            <li class="tab col s4"><a href="#answerSubmit">答案提交</a></li>
                            <li class="tab col s4"><a href="#fileSubmit">文件提交</a></li>
                          </ul>
                          <div id="taskInfoPanel">
                            <table class="bordered">
                              <tbody>
                                <tr>
                                  <td class="table-header">任务描述</td>
                                  <td>描述</td>
                                </tr>
                                <tr>
                                  <td class="table-header">任务状态</td>
                                  <td>进行中</td>
                                </tr>
                                <tr>
                                  <td class="table-header">截止时间</td>
                                  <td>2016年12月12日 00:00:00</td>
                                </tr>
                                <tr>
                                  <td class="table-header">最后提交时间</td>
                                  <td>2016年11月11日 00:00:00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div id="answerSubmit">
                            <textarea id="answerTextarea" name="answer" rows="8" cols="40" class="answer-field"></textarea>
                          </div>
                          <div id="fileSubmit">
                            <table class="border">
                              <thead class="table-header">
                                <tr>
                                  <td>文件说明</td>
                                  <td>最后上传</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>文件说明。。</td>
                                  <td>最后上传时间</td>
                                  <td><button type="button" class="waves-effect waves-light btn grey">上传</button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <button data-target="submitModal" type="button" class="waves-effect waves-light btn grey submit-button">提交</button>
                          <div id="submitModal" class="modal">
                            <div class="modal-content">
                              <p>是否确认提交？</p>
                            </div>
                            <div class="modal-footer">
                              <a class="modal-action modal-close waves-effect waves-light btn-flat">确认</a>
                              <a class="modal-action modal-close waves-effect waves-light btn-flat">取消</a>
                            </div>
                          </div>
                        </div>
			               </div>
		              </li>
		          </ul>
	        </div>
	    </li>
    </ul>
</div>
</template>

<script>
export default {
  ready() {
    $('.collapsible').collapsible();
    $('ul.tabs').tabs();
    $('ul.tabs').tabs('select_tab','taskInfoPanel');
    $('.modal').modal();
  },
  data() {
    return {

    };
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
ul {
    margin-top: 20px;
}
.group-name {
    font-weight: 900;
    height: 80px;
    font-size: large;
}

.unfinish-count {
    font-weight: normal;
    color: red;
    float: right;
}

.taskhint {
    float: right;
}

.task-item {
    width: 90%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

table {
    width: 90%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 34px;
}

.table-header {
    font-weight: 900;
}

.submit-button {
	width: 90%;
	margin-left: 5%;
	margin-top: 40px;
	margin-bottom: 15px;
}

.task-panel {
  display: inline-block;
  width: 100%;
  height: 100%;
}

ul.tabs {
  margin-top: 0px;
}

.answer-field {
  height: 200px;
  width: 90%;
  margin-top: 20px;
  margin-left: 5%;
}

</style>
