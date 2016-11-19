import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Group from './components/routers/Group'
import MyGroups from './components/routers/MyGroups'
import ParticipateGroups from './components/routers/ParticipateGroups'
import Notifications from './components/routers/Notifications'
import Mgroupinside from './components/routers/Mgroupinside'
import Mgroupcheck from './components/routers/Mgroupcheck'
import Mgroupcreate from './components/routers/Mgroupcreate'
import Msuccesscreate from './components/routers/Msuccesscreate'
import Sgroupinside from './components/routers/Sgroupinside'
import Sgroupcreate from './components/routers/Sgroupcreate'
import Sgroupcheck from './components/routers/Sgroupcheck'
import Account from './components/routers/Account'
import Joingroup from './components/routers/Joingroup'
import TaskSubmit from './components/routers/TaskSubmit'
import HomeworkCreate from './components/routers/HomeworkCreate'
import HomeworkCheck from './components/routers/HomeworkCheck'
import CommonMessage from './components/routers/CommonMessage'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
	'/groups': {
		component: Group
	},
	'/created': {
		component: MyGroups
	},
	'/participation': {
		component: ParticipateGroups
	},
	'/notifications':{
		component: Notifications
	},
	'/mgroupinside':{
		component: Mgroupinside
	},
	'/mgroupcheck':{
		component: Mgroupcheck
	},
	'/mgroupcreate':{
		component: Mgroupcreate
	},
	'/msuccesscreate':{
		component: Msuccesscreate
	},
	'/sgroupinside':{
		component: Sgroupinside
	},
	'/sgroupcreate':{
		component: Sgroupcreate
	},
	'/sgroupcheck':{
		component: Sgroupcheck
	},
	'/account':{
		component: Account
	},
	'/joingroup':{
		component: Joingroup
	},
	'/tasksubmit':{
		component: TaskSubmit
	},
	'/homeworkcreate':{
		component: HomeworkCreate
	},
	'/homeworkcheck':{
		component: HomeworkCheck
	},
	'/commonmessage':{
		component: CommonMessage
	}
})

// 设置默认情况下打开的页面
router.redirect({
	 '/': '/groups'
})

router.start(App, 'app')
