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

# 📦 Installation & Setup

Berikut langkah singkat untuk menjalankan project ini secara lokal:

### 1️⃣ Clone Repository
git clone https://github.com/Natabagass/todo-task
cd todo-task

### 2️⃣ Install Dependencies
Yarn (recommended):
yarn install

Atau npm:
npm install

### 3️⃣ Setup Environment Variables
Buat file `.env` di root project lalu isi:
VITE_SECRET_KEY=asawasdw

### 4️⃣ Jalankan Development Server
yarn dev

Akses melalui browser:
http://localhost:5173

### 5️⃣ Build untuk Production
yarn build

### 6️⃣ Start untuk Production
yarn start

### ✔ Requirements
- Node.js ≥ 18
- Yarn atau npm
- Browser

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