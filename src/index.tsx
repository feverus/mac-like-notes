import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import Main from './components/main';
import dataStore from './store/dataStore'

import './index.module.scss'

const stores = {
  dataStore,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.clear()

root.render(
  <Provider {...stores}>
    <Main />
  </Provider>
)