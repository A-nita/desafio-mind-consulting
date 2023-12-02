import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export default function Login() {
  const API_URL = 'http://localhost:3000';

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    try {
      e.preventDefault();

      const body = {
        email,
        password: pwd
      }
    
      const response = await axios.post(API_URL + '/login', body) as AxiosResponse<string>;

      if (response.status !== 200) {
        setError(true);
        setErrorMsg(response.data);

        return;
      }

      // Vai para a pagina de cursos
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

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />

          <button type="submit">Entrar</button>        
        </form>
      </div>
    </div>
  );
}
