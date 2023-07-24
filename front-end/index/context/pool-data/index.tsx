import { createContext, Dispatch, SetStateAction } from "react";
import { DataType } from "./pool-data.types";

export interface DataContextType {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  updateData: (updatedData: Partial<DataType>) => void;
}

export const Pool_data_context = createContext<DataContextType>({
  data: { coins: [] },
  setData: () => {},
  updateData: () => {},
});
