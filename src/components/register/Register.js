import { useState } from "react";

const Register = ({ onHome, onSignin, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user === "success") {
          loadUser(user);
          onHome();
        }
      });
  };
  return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Username
              </label>
              <input
                onChange={ onNameChange }
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={ onEmailChange }
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={ onPasswordChange }
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={onSubmitRegister}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0"
              className="f6 link dim black db pointer"
              onClick={onSignin}
            >
              Sign In
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
