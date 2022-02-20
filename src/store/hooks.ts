import { useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"

import { AppRootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;