import { createRouter, createWebHistory } from 'vue-router'

import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import NotFound from '@/views/error/NotFoundIndexView'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk"
  },
  {
    path: "/pk",
    name: "pk_Index",
    component: PkIndexView,

  },
  {
    path: "/record",
    name: "record_Index",
    component: RecordIndexView,

  },
  {
    path: "/randlist",
    name: "randlist_Index",
    component: RanklistIndexView,

  },
  {
    path: "/user/bot",
    name: "user_bot_Index",
    component: UserBotIndexView,

  },
  {
    path: "/404",
    name: "not_found_Index",
    component: NotFound,

  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
