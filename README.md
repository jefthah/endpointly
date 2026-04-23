# Endpointly - API Request Tool

Endpointly adalah project API Client (seperti Postman) yang dibangun menggunakan Next.js (Frontend) dan Node.js (Backend). Project ini mencakup sistem autentikasi menggunakan JWT dan penyimpanan database menggunakan PostgreSQL.

## 🚀 Fitur Utama
- **Authentication:** Login & Register menggunakan JWT.
- **Backend Best Practice:** Struktur folder yang rapi dan terorganisir.
- **Database ORM:** Menggunakan Prisma untuk manajemen PostgreSQL.
- **Postman Integration:** Tersedia koleksi API dengan fitur *auto-update token*.

## 🛠️ Tech Stack
- **Frontend:** Next.js (Coming Soon)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** JWT, BcryptJS

## 📦 Cara Setup Backend

1. **Masuk ke folder server:**
   ```bash
   cd server
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi Environment:**
   Buat file `.env` di dalam folder `server` dan sesuaikan dengan data database Anda:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
   JWT_SECRET="rahasia_anda_disini"
   PORT=5000
   ```

4. **Migrasi Database:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Jalankan Server:**
   ```bash
   npm run dev
   ```

## 📮 Testing dengan Postman

1. Import file `Endpointly_Auth.postman_collection.json` ke Postman.
2. Import file `Endpointly_Local.postman_environment.json` ke Postman.
3. Pilih environment **Endpointly Local** di pojok kanan atas Postman.
4. Lakukan **Register** lalu **Login**. Token akan otomatis tersimpan di variabel `{{token}}`.

## 📂 Struktur Folder
```text
server/
├── src/
│   ├── config/      # Konfigurasi database
│   ├── controllers/ # Logika bisnis API
│   ├── middleware/  # Auth protection
│   ├── routes/      # Endpoint definitions
│   └── utils/       # Helpers
├── prisma/          # Schema & Migrations
└── server.js        # Entry point
```
