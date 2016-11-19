<template>
<div class="container">
  <h4>任务布置管理</h4>
  <div class="divider"></div>

  <div class="row">
    <div class="row">
      <div class="input-field col s12">
        <input id="HomeWorkTitle" type="text" class="validate" v-model="taskName">
        <label for="HomeWorkTitle">任务标题</label>
      </div>
      <div class="input-field col s12">
        <textarea id="textarea1" class="materialize-textarea" v-model="taskDescrib"></textarea>
        <label for="textarea1">任务描述</label>
      </div>
    </div>
  </div>

  <p class="flow-text center-align">选择任务类型</p>
  <div class="row">
    <div class="col s6">
      <ul class="tabs">
        <li class="tab col s3"><a href="#person">个人任务</a></li>
        <li class="tab col s3"><a class="active" href="#team">团队任务</a></li>
      </ul>
    </div>
    <div id="person" class="col s12">
      <table class="striped responsive-table">
        <thead>
          <tr>
            <th data-field="Name">姓名</th>
            <th data-field="ID">学工号</th>
            <th data-field="Teammate">是否要求</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in people">
            <td>{{p.name}}</td>
            <td>{{p.userId}}</td>
            <td>
              <input type="checkbox" id="{{'ensure-u'+p.userId}}" name="person-doers" value="{{p.userId}}" />
              <label for="{{'ensure-u'+p.userId}}">确认</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="team" class="col s12">
      <table class="striped responsive-table">
        <thead>
          <tr>
            <th data-field="ID">小组编号</th>
            <th data-field="GroupName">小组名称</th>
            <th data-field="GroupMasterName">组长名称</th>
            <th data-field="Teammate">是否要求</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in teams">
            <td>{{t.id}}</td>
            <td>{{t.name}}</td>
            <td>{{t.user_name}}</td>
            <td>
              <input type="checkbox" id="{{'ensure-t'+t.id}}" name="team-doers" value="{{t.id}}"/>
              <label for="{{'ensure-t'+t.id}}">确认</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>


  <div class="subton">
    <a class="btn" v-on:click="publishTask">发布任务<i class="material-icons right">send</i></a>
  </div>

</div>
</template>
<script>
export default {
  ready: function() {
    $('ul.tabs').tabs({
      onShow: tab=>this.currentType=$(tab).attr('id')
    });

    this.loadPeopleAndTeam();
  },
  data: function() {
    return {
      people: [],
      teams: [],
      currentType: 'team',
      selectedPeople:[],
      selectedTeams:[],
      taskName:null,
      taskDescrib:null
    };
  },
  methods: {
    loadPeopleAndTeam() {
      //加载人和团队数据
      this.people=[
        {userId:'2014220402030',name:'杨林彬'},
        {userId:'2014220402029',name:'王杰'}
      ];
      this.teams=[
        {id:1,name:'克利夫兰骑士队',user_name:'詹姆斯'}
      ];
    },
    publishTask(){
      //新建任务
      var newTask={
        taskName: this.taskName,
        taskDescrib: this.taskDescrib,
        taskType: this.currentType,
        taskDoer: []
      };
      if(newTask.taskType==='person')
        $('input[name=person-doers]:checked').each((idx,elem)=>newTask.taskDoer.push($(elem).attr('value')));
      else
        $('input[name=team-doers]:checked').each((idx,elem)=>newTask.taskDoer.push($(elem).attr('value')));
      //fake submitting
      console.log(newTask);
    }
  }
}
</script>
<style scoped>
nav.top-nav {
  height: 122px;
  box-shadow: none;
}

.page-title {
  line-height: 122px;
  font-size: 48px;
}

.part {
  margin-top: 100px;
  border: 0;
  padding: 0;
}

.subton {
  margin-left: 450px;
}
</style>
