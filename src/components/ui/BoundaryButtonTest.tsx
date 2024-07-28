import { useContext, useState } from 'react';
import ThemeContext from '../../context/themeContext';

export function BoundaryButtonTest() {
  const [isError, setIsError] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    setIsError(!isError);
  };

  if (isError) {
    throw new Error('I crashed!!!');
  }
  return (
    <button className={`${theme} boundary-button`} onClick={handleClick}>
      Error Boundary Test
    </button>
  );
}

export default BoundaryButtonTest;
