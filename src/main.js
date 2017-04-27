import Vue from 'vue'
import routes from './routes'

//应用入口
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    //2, currentRoute修改造成重新计算ViewComponnet
    ViewComponent() {
      const matchingView = routes[this.currentRoute]
      return matchingView ? require('./pages/' + matchingView + '.vue') : require('./pages/404.vue')
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

//1，点击造成currentRoute修改
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
