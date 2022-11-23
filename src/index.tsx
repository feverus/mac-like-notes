import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import Main from './components/main';
import defaultStore from './store/defaultStore'

import  './index.module.scss'

const stores = {
  defaultStore,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider {...stores}>
    <Main />
  </Provider>
)