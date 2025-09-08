import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Reka Bentuk Logo Profesional untuk Perniagaan",
      price: 50,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      seller: {
        name: "Aisyah Rahman",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=40&h=40&fit=crop&crop=face",
        level: "Pro Seller"
      },
      category: "Design & Creative",
      tags: ["Logo Design", "Brand Identity", "Vector"],
      deliveryTime: "2 hari"
    },
    {
      id: 2,
      title: "Pembangunan Website Responsif dengan React & Next.js",
      price: 500,
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      seller: {
        name: "Muhammad Fariz",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        level: "Expert"
      },
      category: "Technology & Programming",
      tags: ["React", "Next.js", "Full Stack"],
      deliveryTime: "7 hari"
    },
    {
      id: 3,
      title: "Video Editing Profesional untuk Media Sosial",
      price: 75,
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=200&fit=crop",
      seller: {
        name: "Siti Nurhaliza",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        level: "Pro Seller"
      },
      category: "Video & Animation",
      tags: ["Video Editing", "Social Media", "Motion Graphics"],
      deliveryTime: "3 hari"
    },
    {
      id: 4,
      title: "Strategi SEO & Pemasaran Digital Lengkap",
      price: 200,
      rating: 4.7,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop",
      seller: {
        name: "Ahmad Zaki",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        level: "Expert"
      },
      category: "Digital Marketing",
      tags: ["SEO", "Google Ads", "Analytics"],
      deliveryTime: "5 hari"
    },
    {
      id: 5,
      title: "Penulisan Artikel Blog dalam Bahasa Malaysia",
      price: 30,
      rating: 4.9,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d0?w=300&h=200&fit=crop",
      seller: {
        name: "Nurul Iman",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
        level: "Pro Seller"
      },
      category: "Writing & Translation",
      tags: ["Content Writing", "Bahasa Malaysia", "Blog"],
      deliveryTime: "2 hari"
    },
    {
      id: 6,
      title: "Analisis Data & Dashboard Business Intelligence",
      price: 150,
      rating: 4.8,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      seller: {
        name: "Dr. Lim Wei Ming",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
        level: "Expert"
      },
      category: "Business & Consulting",
      tags: ["Data Analysis", "Power BI", "Excel"],
      deliveryTime: "4 hari"
    }
  ];

  const categories = [
    "Semua Kategori",
    "Technology & Programming", 
    "Design & Creative",
    "Digital Marketing",
    "Writing & Translation",
    "Business & Consulting",
    "Video & Animation"
  ];

  const sortOptions = [
    "Terpopular",
    "Harga Terendah",
    "Harga Tertinggi", 
    "Rating Tertinggi",
    "Terbaru"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/services" className="text-green-600 font-medium">Cari Perkhidmatan</Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Cari perkhidmatan..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 lg:w-auto">
              Cari
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              {sortOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-600">Harga:</label>
              <input 
                type="number" 
                placeholder="Min" 
                className="w-20 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="text-gray-400">-</span>
              <input 
                type="number" 
                placeholder="Max" 
                className="w-20 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {services.length} perkhidmatan ditemui
          </h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 bg-gray-100">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                    {service.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <img 
                      src={service.seller.avatar} 
                      alt={service.seller.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{service.seller.name}</p>
                      <p className="text-xs text-green-600">{service.seller.level}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900 ml-1">{service.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900">RM{service.price}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.deliveryTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50" disabled>
              Sebelumnya
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md">1</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">2</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">3</button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">10</button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
              Seterusnya
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}