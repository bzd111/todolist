import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reduce from "./reduce";

const configureStore = createStore(reduce, applyMiddleware(thunk));

export default configureStore;
