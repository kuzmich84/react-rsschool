import { useSelector } from 'react-redux';
import { selectReactHookFormUser } from '../../redux/slices/userReactHookFormSlice';

export default function ReactHookFormCard() {
  const user = useSelector(selectReactHookFormUser);
  const { name, age, email, gender, country, picture } = user;
  return (
    <div>
      <h2>ReactHookData</h2>
      <div className="content-card">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Gender: {gender}</p>
        <p>Country: {country}</p>
        <div>
          <img src={picture} alt="picture" />
        </div>
      </div>
    </div>
  );
}
