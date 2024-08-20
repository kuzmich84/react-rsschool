import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slices/userSlice';

export default function UncontrolledCard() {
  const user = useSelector(selectUser);
  const { name, age, email, gender, country, picture } = user;
  return (
    <div>
      <h2>UncontrolledData</h2>
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
