import { actionsType } from "./constants";

export const addTask=(payload)=>{
    return{
        type : actionsType.ADD_TASK,
        payload,
    }
};

export const removeALL = () =>{
    return {
        type : actionsType.REMOVE_ALL,
    }
};