import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  

  if(error.message === 'NetWork  Error')  {
    return Promise.reject(new Error('Error de conexao')); 
  }

  if(error.response?.status === 401) {
    // do something
  }

  return Promise.reject(error);

};