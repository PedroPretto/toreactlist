import './Styles.scss'
import PageBody from './components/PageBody/'
import {Provider} from 'react-redux'

import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      <PageBody/>
    </Provider>
  )
}

export default App;
