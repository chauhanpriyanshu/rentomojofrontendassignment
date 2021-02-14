import { useState, useEffect } from 'react';
import { getUsers } from '../utils/apis';

const useDataFetcher = (type) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers(type)
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, users };
};

export default useDataFetcher;