<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">King Of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :class="route_name == 'pk_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'pk_Index'}">对战</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'record_Index'}">对局列表</router-link>        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'randlist_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'randlist_Index'}">排行榜</router-link>        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            QXTY
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link :class="route_name == 'pk_index' ? 'dropdown-item active' : 'dropdown-item'" :to="{name: 'user_bot_Index'}">我的Bot</router-link>
            <li><a class="dropdown-item" href="#">退出  </a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  import { useRoute } from 'vue-router';
  import { computed } from '@vue/reactivity'; 
  export default {
    setup() {
      const route = useRoute();
      let route_name = computed(() => route.name);
      return {
        route_name,
      }
    }
  }
</script>

<style>

</style>