import { actionsType } from "./constants";

export const addTask = (payload) => {
  return {
    type: actionsType.ADD_TASK,
    payload,
  };
};

export const confirmTask = (id) => {
  return {
    type: actionsType.CONFIRM_TASK,
    payload: id,
  };
};

export const removeTask = (id) => {
  return {
    type: actionsType.REMOVE_TASK,
    payload: id,
  };
};

export const removeALL = () => {
  return {
    type: actionsType.REMOVE_ALL,
  };
};
