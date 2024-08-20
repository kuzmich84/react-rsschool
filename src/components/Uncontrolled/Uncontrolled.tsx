import { useRef, useState } from 'react';
import { convertToBase64 } from '../../utils/convertToBase64';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { object, string, number, ref, mixed } from 'yup';

export interface UserValidate {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  tc?: string;
  country?: string;
  picture?: string;
}

export const userSchema = object({
  name: string().required('Name is Required'),
  age: number().required('Age is Required').positive('Age must be a positive number'),
  email: string().email('Invalid email format').required('Email is Required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain one symbol')
    .matches(/[0-9]/, 'Password must contain one number')
    .matches(/[A-Z]/, 'Password must contain one uppercase letter')
    .matches(/[a-z]/, 'Password must contain one lowercase letter'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  gender: string().required('Gender is reqiured'),
  tc: string().required('Terms and Conditions is required'),
  country: string().required('Country is required'),
  picture: mixed()
    .test('required', 'You need to provide a file', (value) => {
      return value && value.length;
    })
    .test('fileSize', 'The file is too large. Max allowed size is 200KB ', (value) => {
      return value && value[0] && value[0].size <= 200000;
    })
    .test('type', 'We only support jpeg or png', (value) => {
      if (value && value[0] && value[0].type === 'image/jpeg') {
        return true;
      }
      if (value && value[0] && value[0].type === 'image/png') {
        return true;
      }
      return false;
    }),
});

export default function Uncontrolled() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<UserValidate>({});

  let picture: unknown;
  let file: File;

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    file = e.target.files[0];

    picture = await convertToBase64(file);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    const userData = Object.fromEntries(formData);

    try {
      await userSchema.validate({ ...userData, picture: [file] }, { abortEarly: false });
      dispatch(addUser({ ...userData, picture }));
      navigate('/');
    } catch (err: unknown) {
      const newError: UserValidate = {};
      err.inner.forEach((item: { message: string; path: string }) => {
        newError[item.path] = item.message;
      });

      setErrors(newError);
    }
  };

  return (
    <div className="container">
      <h1>Uncontrolled-Form</h1>
      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" placeholder="Enter your name" />
        <div className="error-content">
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" id="age" placeholder="Enter your age" />
        <div className="error-content">
          {errors.age && <div className="error">{errors.age}</div>}
        </div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="Enter your email" />
        <div className="error-content">
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" placeholder="Enter your password" />
        <div className="error-content">
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <label htmlFor="confirm-password">Repeat Password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirm-password"
          placeholder="Confirm your password"
        />
        <div className="error-content">
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>
        <div>Gender: </div>
        <label>
          Mail:
          <input type="radio" name="gender" id="male" value="male" />
        </label>
        <label>
          Femail:
          <input type="radio" name="gender" id="female" value="female" />
        </label>
        <div className="error-content">
          {errors.gender && <div className="error">{errors.gender}</div>}
        </div>
        <label htmlFor="t&c">
          Do you accept Terms and Conditions?:
          <input type="checkbox" value="T&C" id="t&c" name="tc" />
        </label>
        <div className="error-content">{errors.tc && <div className="error">{errors.tc}</div>}</div>

        <label htmlFor="picture">Upload picture:</label>
        <input type="file" id="picture" onChange={uploadImage} name="picture" />
        <div className="error-content">
          {errors.picture && <div className="error">{errors.picture}</div>}
        </div>
        <label htmlFor="country">Country:</label>
        <input type="text" name="country" />
        <div className="error-content">
          {errors.country && <div className="error">{errors.country}</div>}
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
