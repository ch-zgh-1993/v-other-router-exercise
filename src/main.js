import Vue from 'vue'
import routes from './routes'
// import App from './pages/App.vue'
// import First from './components/First.vue'  需要配置吧，或者只能从 App.vue 出


const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent(){
      console.info(routes[this.currentRoute])
      const indexView = routes[this.currentRoute];
      return indexView
      ? require('./pages/' + indexView + '.vue')
      : require('./pages/404.vue')
    }
  },
  render: h => h(this.ViewComponent)
  // render: h => h(First)
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
