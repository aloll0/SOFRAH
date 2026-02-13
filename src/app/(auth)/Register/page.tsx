"use client";

import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";

export default function Register() {

  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = {
      gender,
      phone,
    };

    console.log("Register form submitted");
    console.log(formData);
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
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className={style.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="example@mail.com" required />
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