console.log('loading async-*.js pages ...')

const pages = [import('./pages/async-1'), import('./pages/async-2')]

Promise.all(pages).then((pages) => {
	pages.forEach((page) => page.render())
})
