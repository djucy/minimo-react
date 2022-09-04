import style from './SignupForm.module.css';

export default function SignupForm() {
  return (
    <div className={style.signup__container}>
      <div className={style.signup__box}>
        <h4 className={style.signup__title}>Sign up for our newsletter!</h4>
        <form className={style.signup__form}>
          <input
            className={style.signup__input}
            placeholder="Enter a valid email address"
          ></input>
          <button type="submit" className={style.signup__btn}></button>
        </form>
      </div>
    </div>
  );
}
