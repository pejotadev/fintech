import { ISales } from "./ISales";

export type IDataContext = {
  data: ISales[] | null;
  loading: boolean;
  error: string | null;
  initialDate: string;
  finalDate: string;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>;
  setFinalDate: React.Dispatch<React.SetStateAction<string>>;
};