import '../styles/tailwind.css';
import createStore from '../src/store';
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withRedux(createStore())(withReduxSaga(MyApp))
