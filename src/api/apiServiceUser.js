import axios from './axiosConfig';

const apiService = () => {
    const getUsers = () => {
        return axios.get('https://reqres.in/api/users?per_page=12');
      };

      const createUser = (userData) => {
        return axios.post('/users', userData);
      };

    return { getUsers, createUser };
};

export default apiService;