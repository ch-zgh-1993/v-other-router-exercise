import Vue from 'vue'
import page from 'page'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
      ViewComponent: { render: h => h('div', 'loading') }
  },
  render(h){
    console.info(this.ViewComponent);
    return h(this.ViewComponent.default);
  }
});

Object.keys(routes).forEach(route => {
    const Component = require('./pages/' + routes[route] + '.vue');
    page(route, () => app.ViewComponent = Component);
});
page('*', () => app.ViewComponent = require('./pages/404.vue'));
page();
