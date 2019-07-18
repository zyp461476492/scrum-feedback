import * as feedbackService from '../service/feedback';

export default {
    namespace: 'feedback',
    state: {
        feedbackList: []
    },
    reducers: {
        fetch(state, { payload: { list } }) {
            console.log('LIST');
            console.log(list);
            return { feedbackList: list };
        }
    },
    effects: {
        *add({ payload: { feedback, type } }, { call, put }) {
            const db = yield call(feedbackService.get);
            db.feedback.insert({ feedback, type });
            yield put({ type: 'query' });
        },
        *query({ payload }, { call, put }) {
            const list = yield call(feedbackService.query);
            yield put({ type: 'fetch', payload: { list } });
        }
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({ type: 'fetch', payload: {} });
                }
            });
        },
    },
};