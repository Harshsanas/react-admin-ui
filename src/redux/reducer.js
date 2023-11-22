import axios from 'axios';

export const fetchMembersRequest = () => ({
    type: 'FETCH_MEMBERS_REQUEST',
});

export const fetchMembersSuccess = (data) => ({
    type: 'FETCH_MEMBERS_SUCCESS',
    payload: data,
});

export const fetchMembersFailure = (error) => ({
    type: 'FETCH_MEMBERS_FAILURE',
    payload: error,
});

export const fetchMembers = () => {
    return (dispatch) => {
        dispatch(fetchMembersRequest());
        axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            .then((response) => {
                dispatch(fetchMembersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchMembersFailure(error.message));
            });
    };
};
