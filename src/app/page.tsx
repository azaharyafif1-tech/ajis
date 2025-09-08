import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Teknologi & Pengaturcaraan",
      description: "Pembangunan web, aplikasi mobile, AI, dan automasi",
      icon: "💻",
      services: ["Web Development", "Mobile Apps", "AI/ML", "Database"]
    },
    {
      title: "Reka Bentuk & Kreatif",
      description: "Logo, poster, video editing, dan reka bentuk grafik",
      icon: "🎨",
      services: ["Logo Design", "Poster Design", "Video Editing", "UI/UX"]
    },
    {
      title: "Pemasaran Digital",
      description: "SEO, media sosial, iklan dalam talian, dan strategi pemasaran",
      icon: "📱",
      services: ["SEO", "Social Media", "PPC Ads", "Content Marketing"]
    },
    {
      title: "Penulisan & Terjemahan",
      description: "Penulisan artikel, copywriting, terjemahan bahasa",
      icon: "✍️",
      services: ["Article Writing", "Copywriting", "Translation", "Proofreading"]
    },
    {
      title: "Perniagaan & Perundingan",
      description: "Rancangan perniagaan, analisis data, perundingan strategik",
      icon: "💼",
      services: ["Business Plan", "Data Analysis", "Strategy", "Research"]
    },
    {
      title: "Video & Animasi",
      description: "Video editing, animasi, motion graphics, dan produksi",
      icon: "🎬",
      services: ["Video Production", "Animation", "Motion Graphics", "Editing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-600">
                Cari Kerja
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-green-600">Cari Perkhidmatan</Link>
              <Link href="#" className="text-gray-700 hover:text-green-600">Bagaimana Ia Berfungsi</Link>
              <Link href="#" className="text-gray-700 hover:text-green-600">Mula Jual</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-green-600">Masuk</Link>
              <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cari <span className="text-green-600">Freelancer</span> Terbaik di Malaysia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Platform terpercaya untuk mencari dan menawarkan perkhidmatan freelance berkualiti tinggi. 
            Hubungkan bakat tempatan dengan peluang global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Cari perkhidmatan yang anda perlukan..."
                className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategori Popular
            </h2>
            <p className="text-xl text-gray-600">
              Jelajahi pelbagai perkhidmatan yang tersedia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bagaimana Ia Berfungsi
            </h2>
            <p className="text-xl text-gray-600">
              Proses mudah dalam 3 langkah
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cari & Pilih</h3>
              <p className="text-gray-600">
                Cari perkhidmatan yang anda perlukan dan pilih freelancer yang sesuai
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buat Pesanan</h3>
              <p className="text-gray-600">
                Hantar keperluan anda dan buat pembayaran dengan selamat
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Terima Hasil</h3>
              <p className="text-gray-600">
                Dapat hasil kerja berkualiti dalam masa yang ditetapkan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sedia untuk Mula?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Sertai ribuan freelancer dan client yang telah mempercayai platform kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-green-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Mulakan Sebagai Freelancer
            </Link>
            <Link
              href="/register"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Cari Freelancer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cari Kerja</h3>
              <p className="text-gray-400">
                Platform freelancer terbaik di Malaysia untuk menghubungkan bakat dengan peluang.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Untuk Client</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Cari Freelancer</Link></li>
                <li><Link href="#" className="hover:text-white">Cara Kerja</Link></li>
                <li><Link href="#" className="hover:text-white">Kadar & Harga</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Untuk Freelancer</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Mula Jual</Link></li>
                <li><Link href="#" className="hover:text-white">Tips Kejayaan</Link></li>
                <li><Link href="#" className="hover:text-white">Komuniti</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sokongan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Pusat Bantuan</Link></li>
                <li><Link href="#" className="hover:text-white">Hubungi Kami</Link></li>
                <li><Link href="#" className="hover:text-white">Syarat & Terma</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cari Kerja. Hak cipta terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
