import axios from 'axios';
import { get } from 'lodash';

const tokenInterceptor = (store, request) => {
  const { isAuthRequired = true } = request;
  const token = 'Some token';

  if (isAuthRequired && token) {
    return {
      ...request,
      headers: {
        ...request.headers,
        'x-api-key': 'e9f2c181-c98e-44f1-bf6c-bbe6276c7c07',
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return request;
};

const expiredAccessInterceptor = (store, error) => {
  const statusCode = get(error, 'response.status', null);

  if (statusCode === 401 ) {
    console.log('Error');
  }

  return Promise.reject(error);
};

const client = {
  default: {
    client: axios.create({
      baseURL: 'https://api.thecatapi.com/',
      responseType: 'json',
    }),
    options: {
      interceptors: {
        request: [tokenInterceptor],
        response: [
          {
            error: (store, error) => expiredAccessInterceptor(store, error),
          },
        ],
      },
    },
  },
};

export default client;
