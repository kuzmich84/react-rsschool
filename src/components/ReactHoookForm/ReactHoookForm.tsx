import { useForm } from 'react-hook-form';
import { userSchema } from '../Uncontrolled/Uncontrolled';
import { useYupValidationResolver } from '../../hooks/useYupValidationResolver';
import { User } from '../../redux/slices/userSlice';
import { convertToBase64 } from '../../utils/convertToBase64';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/userReactHookFormSlice';
import { useNavigate } from 'react-router-dom';

export default function ReactHoookForm() {
  const resolver = useYupValidationResolver(userSchema);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver });

  const navigate = useNavigate();

  const onSubmit = async (data: User) => {
    dispatch(addUser({ ...data, picture: await convertToBase64(data.picture[0]) }));
    navigate('/');
  };

  return (
    <div className="container">
      <h1>ReactHoookForm</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="name">Name: </label>
        <input {...register('name')} placeholder="Enter your name" />
        <div className="error-content">
          <div className="error">{errors.name?.message}</div>
        </div>
        <label htmlFor="age">Age: </label>
        <input {...register('age')} placeholder="Enter your age" />
        <div className="error-content">
          <div className="error">{errors.age?.message}</div>
        </div>
        <label htmlFor="email">Email: </label>
        <input {...register('email')} placeholder="Enter your email" />
        <div className="error-content">
          <div className="error">{errors.email?.message}</div>
        </div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          {...register('password')}
          id="password"
          placeholder="Enter your password"
        />
        <div className="error-content">
          <div className="error">{errors.password?.message}</div>
        </div>
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input
          type="password"
          {...register('confirmPassword')}
          id="confirm-password"
          placeholder="Confirm your password"
        />
        <div className="error-content">
          <div className="error">{errors.confirmPassword?.message}</div>
        </div>
        <div>Gender: </div>
        <label>
          Mail:
          <input type="radio" {...register('gender')} value="male" />
        </label>
        <label>
          Femail:
          <input type="radio" {...register('gender')} value="female" />
        </label>
        <div className="error-content">
          <div className="error">{errors.gender?.message}</div>
        </div>
        <label htmlFor="t&c">
          Do you accept Terms and Conditions?:
          <input type="checkbox" value="T&C" id="t&c" {...register('tc')} />
        </label>
        <div className="error-content">
          <div className="error">{errors.tc?.message}</div>
        </div>

        <label htmlFor="picture">Upload picture:</label>
        <input id="picture" {...register('picture')} type="file" />
        <div className="error-content">
          {errors.picture && <div className="error">{errors.picture?.message}</div>}
        </div>
        <label htmlFor="cou">Country:</label>
        <input {...register('country')} />
        <div className="error-content">
          {errors.country && <div className="error">{errors.country?.message}</div>}
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
