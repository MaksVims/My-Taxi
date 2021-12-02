import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import taxiSlice from "@/store/slices";
import {AppDispatch} from "@/store";

export function useActions() {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(taxiSlice.actions, dispatch)
}