import { useContext } from "react";

import { FormToastContext } from "./FormToastContext";

export const useFormToastContext = () => {
  const context = useContext(FormToastContext);

  return context;
};
