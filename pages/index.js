import Head from 'next/head';
import { useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector, connect } from 'react-redux'
import {exampleActions, selectors} from '../src/store/modules/examples';

function Home({example}) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(exampleActions.fetchData());
  // }, [dispatch])
  // const examples = useSelector(exampleSelectors.getExample, shallowEqual);
  // console.log(example, 'aa');
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className='text-red-500'>Hello NextJS!!!</p>
    </div>
  )
}

// Home.getInitialProps = async ({store}) => {
//   console.log(123);
//   store.dispatch(exampleActions.fetchData);
// }

const mapStateToProps = state => ({
  example: selectors.getExample(state)
});

export default connect(mapStateToProps)(Home);
