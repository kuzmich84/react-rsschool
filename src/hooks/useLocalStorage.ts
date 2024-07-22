import { useEffect, useState } from 'react';

function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue : '';
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
