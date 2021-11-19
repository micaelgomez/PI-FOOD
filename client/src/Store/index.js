import { createStore, applyMiddleware } from "redux"; 
import { composeWithDevTools } from "redux-devtools-extension"; 
import thunk from "redux-thunk"; //-->async
import rootReducer from "../Dispatch/reducer"; //reducer

//store= crea store(rootReducer, debug(middleware(thunk) ) )
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
