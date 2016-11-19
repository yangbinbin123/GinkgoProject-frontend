<template>
  <top-side-bar></top-side-bar>
  <router-view></router-view>
</template>

<script>
import TopSideBar from './components/TopSideBar'

export default {
  components: {
    TopSideBar
  }
}
</script>

<style scoped>
</style>
