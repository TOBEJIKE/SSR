<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>
<style lang='stylus' scoped>
#app{
  position absolute
  left 0px
  right 0px
  top 0px
  bottom 0px
}
#cover{
  position absolute
  left 0px
  right 0px
  top 0px
  bottom 0px
  background-color #999
  opacity .9
  z-index -1
}
</style>
