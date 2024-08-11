import { useEffect, useState } from 'react';

function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? storedValue : '';
      }
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value!);
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
