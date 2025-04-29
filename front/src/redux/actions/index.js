import axios from "axios";
import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./types";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/api/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error("Error al agregar favorito:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/api/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
