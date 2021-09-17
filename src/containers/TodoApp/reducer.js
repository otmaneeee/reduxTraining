import { actionsType } from "./constants"
const initialState = {
    taskList : [],
}

const todoReducer = (state=initialState,action) =>{
    switch(action.type){
        case actionsType.ADD_TASK :{
            return{
                taskList : [...state.taskList,action.payload],
            }
        }
        case actionsType.REMOVE_ALL:{
            return{
                taskList : [],
            }
        }

        default : return initialState;
    }

};

export default todoReducer;