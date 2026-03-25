import { useState } from "react";
import "../login/style.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/requests";

export const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerUser(form);
      navigate("/"); // go to login after register
    } catch (err) {
      setError("Error creating account", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__brand-wrapper">
          <h1 className="login__brand">AutoService</h1>
          <p className="login__subtitle">
            Crea tu cuenta para comenzar a gestionar el sistema.
          </p>
        </div>
      </div>

      <div className="login__right">
        <div className="login__card">
          <h2 className="login__welcome">Crear Cuenta 🚀</h2>
          <p className="login__message">Completa los datos para registrarte</p>

          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__field">
              <label className="login__label">Username</label>
              <input
                name="username"
                type="text"
                className="login__input"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login__field">
              <label className="login__label">Email</label>
              <input
                name="email"
                type="email"
                className="login__input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login__field">
              <label className="login__label">Password</label>
              <input
                name="password"
                type="password"
                className="login__input"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p className="login__error">{error}</p>
            )}

            <button
              type="submit"
              className="login__button"
              disabled={loading}
            >
              {loading ? "Creando..." : "Registrarse"}
            </button>
          </form>
            <Link to="register">
                <button className="login__button_register">¿Ya tienes una cuenta?, Inicia sesión</button>
            </Link>
        </div>
      </div>
    </div>
  );
};