# React-Native-Training
React Redux middlewares: Thunk vs Saga
Today we’re going to discuss Redux middlewares for async tasks. But before going through it, we should first understand why do we need them?
As you know, Redux is a library for global state management. Imagine in one part of an application (let’s call it a component) you have a counter and in another part, you want to show the result of that counter as well. You may say that okay why do we need Redux?
Alternative ways
We can simply use context API in order to share the data. The answer is that it’s correct. Indeed it’s your call. But Redux gives you a more structural and advanced way of doing state management.
You may now ask, okay let’s use the Redux. But why do we need Redux middlewares for async tasks? You may suggest react-query only, which is still a valid response. For me handling an async task with react-query is sometimes the best option. Maybe I can give Redux the response of the query. Which is still totally fine. Actually, I prefer using react-query since it gives you a lot of features like caching, retrying, etc.



Redux Middlewares
But sometimes you work on a project that they’re using a Redux middleware. Then you should know how to work with them. Again, here is the question: What is the Redux middleware? Here is the answer:
Provides a 3rd-party extension point between dispatching an action and the moment it reaches the reducer. (For logging, crash reporting, async tasks, etc.)
Let’s see how Redux works without middlewares.

const mapDispatchToProps = (dispatch) => {


return {

deletePost: (id) => dispatch({type: 'DELETE_POST', id: id}),

addPost: (post) => dispatch({type: 'ADD_POST', post: post})

}

}


Here you simply dispatch an action with some payloads. But what if you want to do an async task (like calling an HTTP request)? Read the definition of middleware once again.
Redux Thunk
Here is an example in Redux Thunk. It’s easy to understand. Instead of returning a simple object as an action, you return a function that handles the async task.


// with thunk, instead of returning an object,     we can return a function (for async tasks)


const callHttp = () => {

return function (dispatch) {

dispatch(beforeCall())

axios.get()

.then((res) => {

dispatch(afterSuccess(res.data))

})

.catch((error) => {

dispatch(afterFail(error.message))

})

}

}

const mapDispatchToProps = (dispatch) => {

return {

deletePost: (id) => dispatch(callHttp())

}

}


This may be hard to maintain in a project on a big scale. Also testing and writing some unit tests will be harder as well. But it does the job. Let’s see how the Redux Saga works its own job.
Redux Saga
In thunk, action creator does not return an object, it returns a function, In the saga, it allows you to send action normally. but it has a watcher. whenever a particular action gets dispatched, the watcher catches it. It doesn’t let it go to the reducer. Then when it catches it, it runs the async task. Then it dispatches another action that will reach the reducer. (it’s not the same action) So, imagine we have an AGE_UP action, then we will dispatch the AGE_UP_ASYNC (if we use the AGE_UP it will be in an endless loop). So in reducer, we should use AGE_UP_ASYNC because in this middleware we are catching the AGE_UP and dispatching the AGE_UP_ASYNC.





import { delay } from 'redux-saga';

import { takeEvery, put } from 'redux-saga/effects';



function* ageUpAsync() {

yield delay(4000);

yield put({ type: 'AGE_UP_ASYNC', value: 1 })

}



export function* watchAgeUp() {

yield takeEvery('AGE_UP', ageUpAsync);

} 

I just wanted to have a decent understanding of how they work. First, our watchAgeUp function catches the dispatch. Then run the async task. You may ask what takeEvery does? In line 5, you see the async task is just simply waiting for 4 seconds. So within these 4 seconds, if you dispatch the same action 10 times, it will affect. But if you use takeLatest it won’t affect it.



Redux Thunk Explained with Examples:

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.
One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.
Installation and Setup
Redux Thunk can be installed by running npm install redux-thunk --save or yarn add redux-thunk in the command line.
Because it is a Redux tool, you will also need to have Redux set up. Once installed, it is enabled using applyMiddleware():
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

How to Use Redux Thunk
Once Redux Thunk has been installed and included in your project with applyMiddleware(thunk), you can start dispatching actions asynchronously.
For example, here's a simple increment counter:

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}

And here's how set up success and failure actions after polling an API:

const GET_CURRENT_USER = 'GET_CURRENT_USER';
const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';

const getUser = () => {
  return (dispatch) => {     //nameless functions
    // Initial action dispatched
    dispatch({ type: GET_CURRENT_USER });
    // Return promise with success and failure actions
    return axios.get('/api/auth/user').then(  
      user => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
};
 

