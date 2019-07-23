import * as feedbackService from '../services/feedback';

export default {
  namespace: 'feedback',
  state: {
    feedbackList: [],
    visible: false,
  },
  reducers: {
    fetch(
      state,
      {
        payload: { list },
      },
    ) {
      return { feedbackList: list, visible: false };
    },
    showModal(state) {
      return { ...state, visible: true };
    },
    hiddenModal(state) {
      return { ...state, visible: false };
    },
  },
  effects: {
    *add(
      {
        payload: { feedback, type },
      },
      { call, put },
    ) {
      yield call(feedbackService.add, { feedback, type });
      yield put({ type: 'query' });
    },
    *query({ payload }, { call, put }) {
      const query = yield call(feedbackService.query);
      yield query.$.subscribe(results => {
        put({ type: 'query', payload: {} });
      });
      const list = yield query.exec();
      yield put({ type: 'fetch', payload: { list } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};
