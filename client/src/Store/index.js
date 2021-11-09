import { createStore, applyMiddleware } from "redux"; //-->Creacion store, custom functionality
import { composeWithDevTools } from "redux-devtools-extension"; //--> Debug
import thunk from "redux-thunk"; //-->async
import rootReducer from "../Dispatch/reducer"; //reducer

//store= crea store(rootReducer, debug(middleware(thunk) ) )
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
