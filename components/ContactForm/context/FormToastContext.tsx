"use client";

import { createContext, useCallback, useReducer } from "react";

import { DispatchActionsEnum, formToastReducer } from "./reducer";

export const INITIAL_STATE = {
  show: false,
  title: "",
  message: "",
  isError: false,
};

export type InitialStateType = typeof INITIAL_STATE;

export const FormToastContext = createContext({
  state: INITIAL_STATE,
  updateState: (payload: Partial<InitialStateType>) => {},
  resetState: () => {},
});

export const FormToastContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(formToastReducer, INITIAL_STATE);

  const updateState = useCallback(
    (payload: Partial<InitialStateType>) => {
      dispatch({
        type: DispatchActionsEnum.UPADTE,
        payload: payload,
      });
    },
    [dispatch]
  );

  const resetState = useCallback(() => {
    dispatch({
      type: DispatchActionsEnum.RESET,
    });
  }, [dispatch]);

  return (
    <FormToastContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </FormToastContext.Provider>
  );
};
