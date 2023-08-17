import * as Types from './../constants/ActionTypes';

export const fetchMasterDataRequest = () => {
  return {
    type: Types.FETCH_MASTER_DATA
  };
}

export const fetchMasterDataRequestSuccess = (data) => {
  return {
    type: Types.FETCH_MASTER_DATA_SUCCESS,
    data,
  };
}
