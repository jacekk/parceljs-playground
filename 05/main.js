import Vue from 'vue'

import { router } from './router'
import App from './layout/App.vue'

new Vue({
	el: '#app',
	router,
	render: (h) => h(App),
})
