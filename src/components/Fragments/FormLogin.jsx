import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log('login');
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
