import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import client from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    try {
      e.preventDefault();

      const body = {
        email,
        password: pwd
      }
    
      const response = await client.post('/login', body) as AxiosResponse<string>;

      if (response.status !== 200) {
        setError(true);
        setErrorMsg(response.data);

        return;
      }

      localStorage.setItem('token', response.data);

      navigate('/dashboard')
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError(true);

      setErrorMsg('Ocorreu um erro ao efetuar o login');
    }  
  }

  return (
    // Pagina de Login
    <div className="mainContainer">
      <div className="welcome">
        <h1>Seja bem-vindo à plataforma que transforma conhecimento em conquistas!</h1> 
      </div>
      <div className="login">
        <h1>/Mind Cursos</h1>     

        <form className="form-login" onSubmit={ handleSubmit } >
          <h2>Login</h2>
          {
            error &&
            <div className="error-alert">
              <p className="errmsg">{ errorMsg }</p>
            </div>
          }

          <div className="entrada email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Digite seu email"
            />
          </div>

          <div className="entrada password">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit">Entrar</button>        
        </form>
      </div>
    </div>
  );
}
