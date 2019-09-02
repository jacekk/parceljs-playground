import Loadable from 'react-loadable'

import { PageLoader } from '../../components/PageLoader'

export const Home = Loadable({
	loader: () => import('./Home'),
	loading: PageLoader,
})
