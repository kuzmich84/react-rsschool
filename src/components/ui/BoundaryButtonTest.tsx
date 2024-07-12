import { useState } from 'react';

export function BoundaryButtonTest() {
  const [isError, setIsError] = useState<boolean>(false);

  const handleClick = () => {
    setIsError(!isError);
  };

  if (isError) {
    throw new Error('I crashed!!!');
  }
  return (
    <button className="boundary-button" onClick={handleClick}>
      Error Boundary Test
    </button>
  );
}

export default BoundaryButtonTest;
