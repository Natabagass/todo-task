# 📝 Task Management App

A simple and responsive **Task Management Application** built with **React 19**, using **full custom CSS** (tanpa Tailwind), and **React Helmet** for SEO enhancements.

Aplikasi ini dibuat sebagai submission project yang mencakup fitur **Authentication**, **CRUD Task**, serta tampilan **responsive** mulai dari desktop hingga mobile.

---

## ✨ Features

### 🔐 Authentication (Dummy Login)
Aplikasi menggunakan halaman login sederhana dengan akun dummy.

**Login Credentials:**
- **Username:** `dot@test.com`
- **Password:** `dot12345`

**ENV:**
- **VITE_SECRET_KEY:** `asawasdw`

Tidak menggunakan backend—hanya validasi dummy + penyimpanan sesi via `sessionStorage`.

---

### 🧾 Task Management (CRUD)
Pengguna dapat:
- **Create** 
- **Read** 
- **Update**
- **Delete** task  
- **Mark as Completed**  
- **Search task**

Semua task disimpan menggunakan **localStorage** sehingga tetap ada meskipun browser ditutup.

---

### 🎨 Full Custom CSS (No Utility Frameworks)
Seluruh gaya ditulis menggunakan:
- **Pure CSS**
- Responsive layout (desktop → tablet → mobile)
- Custom modal styling
- Custom button/input styling  
- Clean UI & easy to maintain

Tidak ada Tailwind, Bootstrap, atau library styling lainnya.

---

### 📱 Responsive Design
Aplikasi mendukung berbagai ukuran layar:
- ✔ Desktop (≥ 1024px)
- ✔ Tablet (768px – 1024px)
- ✔ Mobile (≤ 480px)

Layout seperti search bar, task container, form input, dan modal otomatis menyesuaikan ukuran layar.

---

### 🔍 SEO Optimization — React Helmet
Menggunakan **React Helmet** untuk:
- Set **title** halaman
- Set **meta description**
- Optimalisasi SEO dasar untuk SPA

Contoh meta tag:
```jsx
<Helmet>
  <title>Task Management App</title>
  <meta name="description" content="Simple Task Manager with CRUD and responsive UI" />
</Helmet>
