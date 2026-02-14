"use client";

import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";

export default function Register() {
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          gender,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ نجاح التسجيل → روح للـ login
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={style.registerSection}>
      <div className={`container ${style.container}`}>
        <div className={`loginContainer ${style.registerContainer}`}>
          <div className={style.content}>
            <h1 className="text-4xl font-bold mb-2">Create Account</h1>
          </div>

          <form className={style.registerForm} onSubmit={handleRegister}>
            <div className={style.inputGroup}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={style.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="example@mail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={style.inputGroup}>
              <label>Mobile Number</label>

              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                defaultCountry="EG"
                international
                required
                className={style.phoneInput}
              />
            </div>

            <div className={style.selectGroup}>
              <label className={style.genderLabel}>Gender</label>

              <div className={style.genderButtons}>
                <button
                  type="button"
                  className={`${style.genderBtn} ${
                    gender === "male" ? style.active : ""
                  }`}
                  onClick={() => setGender("male")}
                >
                  Male
                </button>

                <button
                  type="button"
                  className={`${style.genderBtn} ${
                    gender === "female" ? style.active : ""
                  }`}
                  onClick={() => setGender("female")}
                >
                  Female
                </button>
              </div>

              <input type="hidden" name="gender" value={gender} required />
            </div>

            <div className={style.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                minLength={8}
                maxLength={50}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={style.inputGroup}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                minLength={8}
                maxLength={50}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className={style.registerButton} type="submit">
              Register
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center font-bold">
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--secondary-color)" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
