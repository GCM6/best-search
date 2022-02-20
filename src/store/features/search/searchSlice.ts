import { createSlice, PayloadAction} from "@reduxjs/toolkit";
// modeule

const searchSlice = createSlice(
    {
        name: "search",
        initialState: {
            isLoading: false,
        },
        reducers: {
            setIsLoading(state, action: PayloadAction<boolean>) {
                state.isLoading = action.payload;
            }
        }
    }
)

export const { setIsLoading } = searchSlice.actions;
export default searchSlice.reducer;