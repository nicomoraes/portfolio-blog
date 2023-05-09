import { INITIAL_STATE, InitialStateType } from "./FormToastContext";

export enum DispatchActionsEnum {
  UPADTE = "update",
  RESET = "reset",
}

interface DispatchAction {
  type: DispatchActionsEnum;
  payload?: Partial<InitialStateType>;
}

export const formToastReducer = (
  state = INITIAL_STATE,
  action: DispatchAction
): InitialStateType => {
  switch (action.type) {
    case DispatchActionsEnum.UPADTE:
      return {
        ...state,
        ...action.payload,
      };
    case DispatchActionsEnum.RESET:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
