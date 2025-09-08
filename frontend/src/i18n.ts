import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      "home": "Home",
      "services": "Services",
      "categories": "Categories",
      "messages": "Messages",
      "profile": "Profile",
      "login": "Login",
      "register": "Register",
      "logout": "Logout",
      
      // Home page
      "hero.title": "Find the Perfect Freelance Services for Your Business",
      "hero.subtitle": "Connect with talented Malaysian freelancers offering quality services",
      "hero.search": "Search for services...",
      "hero.findServices": "Find Services",
      
      // Categories
      "categories.title": "Browse Categories",
      "categories.subtitle": "Discover services by category",
      
      // Services
      "services.title": "Featured Services",
      "services.startingAt": "Starting at",
      "services.rm": "RM",
      "services.days": "days",
      "services.delivery": "delivery",
      
      // Auth
      "auth.firstName": "First Name",
      "auth.lastName": "Last Name",
      "auth.email": "Email",
      "auth.password": "Password",
      "auth.confirmPassword": "Confirm Password",
      "auth.isFreelancer": "I want to offer services as a freelancer",
      "auth.alreadyAccount": "Already have an account?",
      "auth.noAccount": "Don't have an account?",
      "auth.signUp": "Sign Up",
      "auth.signIn": "Sign In",
      
      // Common
      "loading": "Loading...",
      "error": "Error",
      "success": "Success",
      "save": "Save",
      "cancel": "Cancel",
      "edit": "Edit",
      "delete": "Delete",
      "search": "Search",
      "filter": "Filter",
      "sort": "Sort",
      "price": "Price",
      "rating": "Rating",
      "reviews": "Reviews"
    }
  },
  ms: {
    translation: {
      // Navigation
      "home": "Laman Utama",
      "services": "Perkhidmatan",
      "categories": "Kategori",
      "messages": "Mesej",
      "profile": "Profil",
      "login": "Log Masuk",
      "register": "Daftar",
      "logout": "Log Keluar",
      
      // Home page
      "hero.title": "Cari Perkhidmatan Pekerja Bebas Yang Sempurna Untuk Perniagaan Anda",
      "hero.subtitle": "Berhubung dengan pekerja bebas Malaysia yang berbakat menawarkan perkhidmatan berkualiti",
      "hero.search": "Cari perkhidmatan...",
      "hero.findServices": "Cari Perkhidmatan",
      
      // Categories
      "categories.title": "Layari Kategori",
      "categories.subtitle": "Temui perkhidmatan mengikut kategori",
      
      // Services
      "services.title": "Perkhidmatan Pilihan",
      "services.startingAt": "Bermula dari",
      "services.rm": "RM",
      "services.days": "hari",
      "services.delivery": "penghantaran",
      
      // Auth
      "auth.firstName": "Nama Pertama",
      "auth.lastName": "Nama Keluarga",
      "auth.email": "Emel",
      "auth.password": "Kata Laluan",
      "auth.confirmPassword": "Sahkan Kata Laluan",
      "auth.isFreelancer": "Saya ingin menawarkan perkhidmatan sebagai pekerja bebas",
      "auth.alreadyAccount": "Sudah ada akaun?",
      "auth.noAccount": "Tiada akaun?",
      "auth.signUp": "Daftar",
      "auth.signIn": "Log Masuk",
      
      // Common
      "loading": "Memuat...",
      "error": "Ralat",
      "success": "Berjaya",
      "save": "Simpan",
      "cancel": "Batal",
      "edit": "Edit",
      "delete": "Padam",
      "search": "Cari",
      "filter": "Tapis",
      "sort": "Susun",
      "price": "Harga",
      "rating": "Penilaian",
      "reviews": "Ulasan"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;