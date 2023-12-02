import { Link } from "react-router-dom";

export default function Root() {
  return (
    // Pagina de Login
    <div className="mainContainer">
      <div className="welcome">
         <h1>Seja bem-vindo à plataforma que transforma conhecimento em conquistas!</h1> 
      </div>
      <div className="login">
        <h1>/Mind Cursos</h1>        
        <form className="form-login" action="localhost:3000/login" method="post">
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
          <button type="submit">Entrar?</button>        
        </form>
      </div>
    </div>
  );
}
