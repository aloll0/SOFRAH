"use client";

import AdminSidebar from "../dashboard/components/AdminSidebar";
import style from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={style.dashboardContainer}>
      <AdminSidebar />
      <main className={style.dashboardContent}>
        <h1>Welcome to Dashboard</h1>
        <p>Here you can manage products, users, and orders.</p>
      </main>
    </div>
  );
}