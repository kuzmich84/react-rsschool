import { Link } from 'react-router-dom';
import UncontrolledCard from '../components/Uncontrolled/UncontrolledCard';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slices/userSlice';
import ReactHookFormCard from '../components/ReactHoookForm/ReactHookFormCard';
import { selectReactHookFormUser } from '../redux/slices/userReactHookFormSlice';

export default function HomePage() {
  const userUnControlled = useSelector(selectUser);
  const userReactHookForm = useSelector(selectReactHookFormUser);

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
        {Object.keys(userUnControlled).length !== 0 ? <UncontrolledCard /> : null}
        {Object.keys(userReactHookForm).length !== 0 ? <ReactHookFormCard /> : null}
      </div>
    </div>
  );
}
