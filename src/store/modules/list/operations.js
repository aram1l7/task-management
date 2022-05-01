import * as actions from "./actions";
import sleep from "helpers/sleep";
import toast from "helpers/toast";
import { RequestsEnum } from "../requestsEnum";
import { requestHelper } from "../request/operations";

export const createNewList = (data) => async (dispatch) => {
  return await requestHelper(dispatch, RequestsEnum.createList, async () => {
    await sleep();
    dispatch(actions.createListCompleted(data));
    toast.success("List was successfully created!");
  });
};

export const editListOperation = (data) => {
  return async (dispatch) => {
    try {
      await sleep();
      dispatch(actions.editListCompleted(data));
      toast.success("Title was successfully edited!");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
};

export const deleteListOperation = (id) => {
  return async (dispatch) => {
    try {
      await sleep();
      dispatch(actions.deleteListCompleted(id));
      toast.success("List was successfully deleted");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
};

export const createNewCardOperation = (data) => {
  return async (dispatch) => {
    try {
      await sleep();
      dispatch(actions.createCardCompleted(data));
      toast.success("Card was successfully created");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
};

export const deleteCardOperation = (data) => {
  return async (dispatch) => {
    try {
      await sleep();
      dispatch(actions.deleteCardCompleted(data));
      toast.success("Card was successfully deleted");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
};

export const editCardOperation = (data) => {
  return async (dispatch) => {
    try {
      await sleep();
      dispatch(actions.editCardCompleted(data));
      toast.success("Card was successfully Edited");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
};
