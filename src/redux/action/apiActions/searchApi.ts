import { setIsLoading, setSearchResult } from '../searchSetState';
import { Dispatch } from 'redux';
import axios from "axios";
// 搜索请求
const searchFetch = async (searchVal: string) => {    
    try {
        const params = {
            login_token: "INTERVIEW_SIMPLY2021",
            search_phrase: searchVal,
        }
        const { data } = await axios.post('http://3.141.23.218:5000/interview/keyword_search', params)
        return data
    } catch (error) {
        console.log('请求错误--->', error);

    }
}
export const actionSearch = (searchVal: string) => {
    return async (dispatch: Dispatch, state: any) => {
        try {
            dispatch(setIsLoading(true));
            const res = await searchFetch(searchVal);
            console.log('Search results: ', res);
            dispatch(setIsLoading(false));
            dispatch<any>(setSearchResult({data: res?.data?.product_trends}));
            return res
        } catch (error) {
            console.log(error);
            
        }
    };
};