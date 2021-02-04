<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Narbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  created(){
    this.$http.get(`https://randomuser.me/api/`).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
<style lang="scss">
 @import 'node_modules/bootstrap/scss/bootstrap';
</style>
