const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const sendData = (data) => console.log(data);

  return (
    <div id="login">
      <img />
      <form onSubmit={handleSubmit(sendData)}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register,'email'}/>
          <p>{errors.email?.message}</p>
        </div>
        <div className="password">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register,'password'}/>
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
