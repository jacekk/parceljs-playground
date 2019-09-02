import Loadable from 'react-loadable'

import { PageLoader } from '../../components/PageLoader'

export const About = Loadable({
	loader: () => import('./About'),
	loading: PageLoader,
})
