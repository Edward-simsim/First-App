import axios from "axios";

const baseURL = "https://team-manager-be.herokuapp.com/manager/";

// const accessToken = lscache.get('accessToken')

// eslint-disable-next-line
const AuthHeader = () => {
  // if (accessToken) {
  //   return {
  //     Authorization: `Bearer ${accessToken}`,
  //     'X-engage-initiator': 'frontend',
  //     'Content-Type': 'application/json',
  //   }
  // } else {
  //   return {
  //     'X-engage-initiator': 'frontend',
  //     'Content-Type': 'application/json',
  //   }
  // }
};

export const REST = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    // ...AuthHeader(),
  },
});

REST.interceptors.request.use(
  async (config) => {
    // const token = lscache.get('accessToken')
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkStatus = (status) => {
  return {
    is200: status === 200,
    is202: status === 202,
    is401: status === 401,
    is403: status === 403,
    is405: status === 405,
    is404: status === 404,
    is500: status === 500,
    is501: status === 501,
  };
};

REST.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  async (error) => {
    const requestStatus = checkStatus(error.response.status);

    // the user is not authorized
    if (requestStatus.is401) {
      // If token is not valid or expired clear lscache.
      // Also, here you can do refresh token API call
      // if (error.response.config.url !== 'authenticate') {
      //   window.location.href = '/'
      //   lscache.flush()
      // }
    }
    return Promise.reject(error);
  }
);
