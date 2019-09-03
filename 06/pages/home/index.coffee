import Loadable from 'react-loadable'

import { PageLoader } from '../../components/PageLoader'

export Home = Loadable
    loader: -> import('./Home')
    loading: PageLoader
