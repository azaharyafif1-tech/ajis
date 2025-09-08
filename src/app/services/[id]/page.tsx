import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - in real app this would come from database
const servicesData = {
  "1": {
    id: 1,
    title: "Reka Bentuk Logo Profesional untuk Perniagaan",
    price: 50,
    rating: 4.9,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&h=400&fit=crop"
    ],
    seller: {
      name: "Aisyah Rahman",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&crop=face",
      level: "Pro Seller",
      memberSince: "2022",
      completedOrders: 340,
      responseTime: "1 jam",
      languages: ["Bahasa Malaysia", "English"],
      description: "Saya adalah pereka grafik berpengalaman selama 5 tahun dalam industri kreatif. Khusus dalam reka bentuk logo, brand identity, dan material pemasaran. Saya komited untuk memberikan hasil kerja berkualiti tinggi yang memenuhi keperluan unik setiap pelanggan."
    },
    category: "Design & Creative",
    tags: ["Logo Design", "Brand Identity", "Vector", "Adobe Illustrator", "Corporate"],
    deliveryTime: "2 hari",
    revisions: "3 semakan percuma",
    description: "Dapatkan logo profesional yang akan menjadikan perniagaan anda menonjol! Saya akan mereka bentuk logo yang unik, kreatif dan sesuai dengan brand anda.\n\nApa yang anda akan dapat:\n• Logo dalam format vektor (AI, EPS, PDF)\n• File PNG dan JPG resolusi tinggi\n• Konsep awal dan pilihan variasi\n• 3 semakan percuma\n• Panduan penggunaan logo\n• Sokongan selepas jualan\n\nKenapa pilih perkhidmatan saya:\n✓ 5+ tahun pengalaman dalam reka bentuk\n✓ 340+ projek siap dengan rating 4.9/5\n✓ Komunikasi yang jelas dan pantas\n✓ Hasil kerja berkualiti profesional\n✓ Harga berpatutan dan kompetitif",
    packages: [
      {
        name: "Asas",
        price: 50,
        deliveryTime: "2 hari",
        revisions: "2 semakan",
        features: [
          "1 konsep logo",
          "File PNG & JPG",
          "Resolusi standard",
          "Sokongan 24 jam"
        ]
      },
      {
        name: "Standard",
        price: 100,
        deliveryTime: "3 hari", 
        revisions: "3 semakan",
        features: [
          "3 konsep logo",
          "File vektor (AI, EPS)",
          "File PNG & JPG HD",
          "Logo dalam warna & hitam putih",
          "Panduan brand",
          "Sokongan 48 jam"
        ],
        recommended: true
      },
      {
        name: "Premium",
        price: 200,
        deliveryTime: "5 hari",
        revisions: "Semakan tanpa had",
        features: [
          "5 konsep logo",
          "Semua format fail",
          "Logo animasi (GIF)",
          "Mockup dan presentasi",
          "Panduan brand lengkap",
          "Favicon untuk website",
          "Sokongan 1 minggu"
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa lama masa yang diperlukan?",
        answer: "Biasanya 2-3 hari untuk pakej asas, bergantung pada kompleksiti dan keperluan anda."
      },
      {
        question: "Adakah saya boleh minta semakan?",
        answer: "Ya! Setiap pakej termasuk semakan percuma. Pakej premium menawarkan semakan tanpa had."
      },
      {
        question: "Format fail apa yang saya akan terima?",
        answer: "Anda akan menerima file AI, EPS, PDF, PNG, dan JPG. Untuk pakej premium, turut disertakan file animasi."
      },
      {
        question: "Adakah logo ini unik dan original?",
        answer: "Ya, setiap logo direka khusus untuk anda dan adalah 100% original. Tiada template digunakan."
      }
    ],
    reviews: [
      {
        user: "Ahmad Haziq",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        rating: 5,
        date: "2 minggu lalu",
        comment: "Sangat berpuas hati dengan hasil kerja Aisyah! Logo yang dihasilkan sangat kreatif dan sesuai dengan brand kami. Komunikasi yang baik dan siap dalam masa yang ditetapkan."
      },
      {
        user: "Siti Maisarah", 
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        rating: 5,
        date: "1 bulan lalu",
        comment: "Perkhidmatan yang excellent! Aisyah sangat memahami keperluan saya dan memberikan beberapa pilihan yang menarik. Definitely akan guna lagi!"
      },
      {
        user: "Raj Kumar",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
        rating: 4,
        date: "1 bulan lalu", 
        comment: "Good work! Logo design is professional and matches our requirements. Quick delivery too."
      }
    ]
  }
  // Add more services as needed
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetail({ params }: PageProps) {
  const { id } = await params;
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

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
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Utama</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gray-700">Perkhidmatan</Link>
            <span>/</span>
            <span className="text-gray-900">{service.category}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-sm"
              />
              <div className="grid grid-cols-3 gap-2 mt-2">
                {service.gallery.slice(0, 3).map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Title and Description */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-lg font-semibold text-gray-900 ml-1">{service.rating}</span>
                  <span className="text-gray-500 ml-1">({service.reviewCount} ulasan)</span>
                </div>
                <span className="mx-4 text-gray-300">•</span>
                <span className="text-gray-600">{service.seller.completedOrders} pesanan selesai</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-gray max-w-none">
                {service.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Pakej</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {service.packages.map((pkg, index) => (
                  <div key={index} className={`border rounded-lg p-6 ${pkg.recommended ? 'border-green-500 ring-2 ring-green-500 ring-opacity-20' : 'border-gray-200'}`}>
                    {pkg.recommended && (
                      <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-4">
                        Disyorkan
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-gray-900 mb-2">RM{pkg.price}</div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div>Siap dalam {pkg.deliveryTime}</div>
                      <div>{pkg.revisions}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold ${pkg.recommended ? 'bg-green-600 text-white hover:bg-green-700' : 'border border-green-600 text-green-600 hover:bg-green-50'}`}>
                      Buat Pesanan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Soalan Lazim</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ulasan ({service.reviews.length})</h2>
              <div className="space-y-6">
                {service.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-3">
                      <img 
                        src={review.avatar} 
                        alt={review.user}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{review.user}</div>
                        <div className="flex items-center">
                          <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src={service.seller.avatar} 
                  alt={service.seller.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.seller.name}</h3>
                  <p className="text-green-600 font-medium">{service.seller.level}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ahli sejak:</span>
                  <span className="font-medium">{service.seller.memberSince}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Masa respons:</span>
                  <span className="font-medium">{service.seller.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bahasa:</span>
                  <span className="font-medium">{service.seller.languages.join(', ')}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-6">{service.seller.description}</p>
              
              <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 mb-3">
                Hubungi Saya
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50">
                Lihat Profil
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Maklumat Perkhidmatan</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Masa penghantaran:</span>
                  <span className="font-medium">{service.deliveryTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Semakan:</span>
                  <span className="font-medium">{service.revisions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Harga bermula:</span>
                  <span className="font-bold text-lg">RM{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}