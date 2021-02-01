import {SET_TASKS,SET_SEARCH} from './actions/todo.actions'

const initialState = {
  tasks: [],
  numTasks: 0,
  newest: null,
  search: "",
};
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
   return{
      ...state,tasks:action.payload
   }
   case SET_SEARCH:
   return{
      ...state,search:action.payload
   }
    default:
      return state;
  }
}
