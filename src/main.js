import Vue from 'vue'
import page from 'page'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
      ViewComponent: { render: h => h() }
  },
  render(h){
    console.info(this.ViewComponent);
    return h(this.ViewComponent.default);
  }
});
console.info(routes)
Object.keys(routes).forEach(route => {
    let indexRoute = routes[route];
    const Component = require('./pages/' + indexRoute + '.vue');
    page(route, () => app.ViewComponent = Component);
});
page('*', () => app.ViewComponent = require('./pages/404.vue'));
page();
