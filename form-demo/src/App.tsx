import { SubmitErrorHandler, SubmitHandler, useForm, Controller } from 'react-hook-form';
import './App.css';

interface MyForm {
  name: string;
  age: number;
}

function App() {
  const { register, handleSubmit, watch, clearErrors, control, setValue, reset, formState: { errors } } = useForm<MyForm>({
    defaultValues: {
      name: '',
      age: 18,
    },
  });

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data);
  };

  const error: SubmitErrorHandler<MyForm> = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit, error)}>
        <input
          type="text"
          {...register('name', { required: true })}
          aria-invalid={errors.name ? true : false}
        />
        <Controller
          name="age"
          control={control}
          defaultValue={18}
          render={({ field }) => <input type="number" {...field} />}
        />
        <button type="submit">отправить</button>
        <button type="button" onClick={() => reset({
          age: 0,
          name: '',
        })}>очистить форму</button>
        <button type="button" onClick={() => clearErrors()}>очистить ошибки</button>
        <button type="button" onClick={() => setValue("name", "bond")}>установить имя</button>
      </form>
      {watch('age')}
      <a href="https://react-hook-form.com/docs/usecontroller">документация </a>
    </>
  );
}

export default App;