import { Link } from 'react-router-dom';
import UncontrolledCard from '../components/Uncontrolled/UncontrolledCard';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';
import ReactHookFormCard from '../components/ReactHoookForm/ReactHookFormCard';

export default function HomePage() {
  const userUnControlled = useSelector(selectUser);
  console.log(userUnControlled);

  return (
    <div className="container">
      <h1>Main Page React forms </h1>
      <div>
        <Link to="uncontrolled-form">Uncontrolled Form</Link>
      </div>
      <div>
        {' '}
        <Link to="react-hook-form">React Hook Form</Link>
      </div>

      <div className="data">
        {userUnControlled ? <UncontrolledCard /> : null}
        <ReactHookFormCard />
      </div>
    </div>
  );
}
