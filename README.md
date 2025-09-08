# AJIS - Malaysian Freelance Marketplace

AJIS adalah platform freelance Malaysia yang menghubungkan klien dengan freelancer berkualiti tinggi di seluruh Malaysia. Platform ini dibangunkan menggunakan teknologi moden dengan sokongan bahasa Bahasa Malaysia dan integrasi pembayaran tempatan.

## ✨ Ciri-ciri Utama

- 🇲🇾 **Antara Muka Bahasa Malaysia** - Sokongan penuh Bahasa Malaysia dan dwibahasa
- 💳 **Pembayaran Malaysia** - Integrasi FPX, GrabPay, Touch 'n Go eWallet, dan Boost
- 🎨 **Kategori Lengkap** - Grafik & Reka Bentuk, Pemasaran Digital, Pengaturcaraan, dan banyak lagi
- 🔐 **Sistem Keselamatan** - Autentikasi JWT dan perlindungan data
- 📱 **Responsif** - Reka bentuk mobile-friendly dengan Tailwind CSS
- ⚡ **Prestasi Tinggi** - Teknologi moden untuk pengalaman pengguna yang lancar

## 🛠 Teknologi

### Frontend
- **React 19** dengan TypeScript
- **Tailwind CSS** untuk styling
- **React Router** untuk navigasi
- **React i18next** untuk antarabangsa
- **Axios** untuk API calls
- **Heroicons** untuk ikon

### Backend
- **Node.js** dengan Express
- **TypeScript** untuk type safety
- **MongoDB** dengan Mongoose
- **JWT** untuk autentikasi
- **bcryptjs** untuk password hashing
- **CORS** untuk cross-origin requests

## 🚀 Cara Memulakan

### Prasyarat
- Node.js (v16 atau lebih tinggi)
- MongoDB
- npm atau yarn

### Pemasangan

1. **Clone repository**
```bash
git clone https://github.com/azaharyafif1-tech/ajis.git
cd ajis
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup MongoDB**
Pastikan MongoDB berjalan di `mongodb://localhost:27017`

4. **Setup environment variables**
```bash
# Backend
cp backend/.env.example backend/.env

# Frontend  
cp frontend/.env.example frontend/.env
```

5. **Jalankan aplikasi**
```bash
# Jalankan kedua-dua frontend dan backend
npm run dev

# Atau jalankan secara berasingan:
npm run dev:backend  # Backend di port 5000
npm run dev:frontend # Frontend di port 3000
```

## 📁 Struktur Projek

```
ajis/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── index.ts
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── i18n/
│   │   └── App.tsx
│   ├── .env.example
│   └── package.json
└── package.json
```

## 🔧 Skrip Tersedia

- `npm run dev` - Jalankan kedua-dua frontend dan backend
- `npm run dev:frontend` - Jalankan frontend sahaja
- `npm run dev:backend` - Jalankan backend sahaja
- `npm run build` - Build kedua-dua aplikasi
- `npm test` - Jalankan semua test

## 🌟 Ciri-ciri Yang Dilaksanakan

### ✅ Asas
- [x] Setup projek dengan workspace
- [x] Autentikasi pengguna (login/register)
- [x] Sistem routing dengan React Router
- [x] Sokongan dwibahasa (MS/EN)
- [x] Responsive design dengan Tailwind
- [x] Model database untuk User, Gig, Order
- [x] API endpoints asas
- [x] Context untuk state management

### 🚧 Dalam Pembangunan
- [ ] CRUD lengkap untuk Gig
- [ ] Sistem pesanan dan pembayaran
- [ ] Upload gambar
- [ ] Sistem review dan rating
- [ ] Sistem mesej
- [ ] Integrasi payment gateway Malaysia
- [ ] Dashboard analytics
- [ ] Email notifications

## 💰 Integrasi Pembayaran Malaysia

Platform ini menyokong kaedah pembayaran popular di Malaysia:

- **FPX Online Banking** - Semua bank utama Malaysia
- **GrabPay** - E-wallet Grab
- **Touch 'n Go eWallet** - TnG Digital
- **Boost** - E-wallet Boost
- **Kad Kredit/Debit** - Visa, Mastercard

## 🌍 Sokongan Bahasa

- **Bahasa Malaysia** (default) - Antara muka penuh dalam BM
- **English** - Sokongan dwibahasa
- Mudah untuk ditambah bahasa lain

## 🤝 Menyumbang

1. Fork projek ini
2. Cipta branch untuk feature anda (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 Lesen

Projek ini di bawah lesen ISC. Lihat fail `LICENSE` untuk maklumat lanjut.

## 📞 Sokongan

Jika anda mempunyai pertanyaan atau memerlukan bantuan:

- Email: support@ajis.my
- GitHub Issues: [Buka issue baru](https://github.com/azaharyafif1-tech/ajis/issues)

---

**Dibuat dengan ❤️ untuk komuniti freelancer Malaysia**