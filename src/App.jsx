import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos. {OKAY}
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários. {OKAY}
// todo - Desabilite o botão de Login enquanto você está executando o login. {OKAY}
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.{OKAY}
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição. {OKAY} 

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [searching, setSearch] = useState(false)
  const [err, setErr] = useState(undefined)


  const handleEmail = (event) => {
    const value = event.target.value
    setEmail(value)
  }

  const handlePassword = (event) => {
    const value = event.target.value
    setPass(value)
  }

  const handleLogin = () => {
    setErr(undefined)
    setSearch(true)
    const data = { email: email, password: password }
    login(data).then((response) => {

      setSearch(false)
      alert('Sucesso ao logar!')
    })
      .catch((err) => {
        setErr(err.message)
        setSearch(false)
        console.log(err)
      })
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {err ? <div className='errorMessage'>{err}</div> : ''}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleEmail} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword} />
        </div>

        <div className='button'>
          <button onClick={handleLogin} disabled={!email || password.length < 6 || !!searching}>Login</button>
        </div>
      </div>
    </div>
  );
}
