import Config from 'react-native-config';

export const INITIAL_STATE = {
  ui: {
    loading: true,
    loaderVisible: false,
    error: '',
    exitOnError: true,
  },
  session: {
    serviceURL: Config.SERVER_URL,
    authorized: false,
    logInError: '',
    token: null,
    companyList: [],
    company: null,
    user: null,
    roleList: [],
    menuList: [],
  },
};
