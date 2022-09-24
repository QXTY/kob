<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  components : {
    NavBar
}
}
</script>

<style>
  body {
    background-image: url(https://img9.vilipix.com/picture/pages/regular/2021/06/02/08/21/50970709_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000);
    background-size: cover;
    }
</style>
