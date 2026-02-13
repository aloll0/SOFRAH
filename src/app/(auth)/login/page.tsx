"use client";

import Image from 'next/image';
import style from '../login/page.module.css';
import Link from 'next/link';

export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  }

  return ( 
    <section className={style.loginSection}>
      <div className={`container ${style.container}`}>
        <div className={`loginContainer ${style.loginContainer}`}>
          <div className="image mb-3">
            <Image src="/logoLogin.png" alt="Login Image" width={300} height={300} className={style.loginImage} />
          </div>
          <div className={`content ${style.content}`}>
            <h1 className='text-4xl font-bold mb-2'>Welcome Back!</h1>
            <p className='text-base text-gray-600'>Please login to your account</p>
          </div>
          <form className={style.loginForm} onSubmit={handleLogin}>
            <div className={style.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" required />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" required minLength={8} maxLength={50}  />
            </div> 
            <button className={style.loginButton} type="submit">Login</button>
          </form>
          <p className='text-sm text-gray-600 mt-4 text-center font-bold'>
            Don&apos;t have an account? <Link href="/Register" style={{ color:"var(--secondary-color)" }}>Create Account</Link>
          </p>
        </div>
      </div>
    </section>
  )
}