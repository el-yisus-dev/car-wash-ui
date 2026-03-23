import { Link } from "react-router-dom";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <div className="login__brand-wrapper">
          <h1 className="login__brand">AutoService</h1>
          <p className="login__subtitle">
            Gestiona clientes, vehículos y servicios en un solo lugar.
          </p>
        </div>
      </div>

      <div className="login__right">
        <div className="login__card">
          <h2 className="login__welcome">Bienvenido 👋</h2>
          <p className="login__message">Inicia sesión para continuar</p>

          <form className="login__form">
            <div className="login__field">
              <label className="login__label">Email</label>
              <input
                type="email"
                placeholder="example@example.com"
                className="login__input"
              />
            </div>

            <div className="login__field">
              <label className="login__label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="login__input"
              />
            </div>

            <button type="submit" className="login__button">
              Entrar
            </button>
          </form>
          <Link to="register">
            <button className="login__button_register">¿No tienes una cuenta?, registrate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};