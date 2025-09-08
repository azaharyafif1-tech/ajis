import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { gigService } from '../services/authService';
import GigCard from '../components/ui/GigCard';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [featuredGigs, setFeaturedGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedGigs = async () => {
      try {
        const response = await gigService.getGigs({ limit: 8, sortBy: 'rating', order: 'desc' });
        setFeaturedGigs(response.gigs);
      } catch (error) {
        console.error('Error fetching featured gigs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedGigs();
  }, []);

  const categories = [
    {
      name: t('categories.graphicDesign'),
      icon: '🎨',
      link: '/gigs?category=Grafik & Reka Bentuk'
    },
    {
      name: t('categories.digitalMarketing'),
      icon: '📱',
      link: '/gigs?category=Pemasaran Digital'
    },
    {
      name: t('categories.writingTranslation'),
      icon: '✍️',
      link: '/gigs?category=Penulisan & Terjemahan'
    },
    {
      name: t('categories.videoAnimation'),
      icon: '🎬',
      link: '/gigs?category=Video & Animasi'
    },
    {
      name: t('categories.musicAudio'),
      icon: '🎵',
      link: '/gigs?category=Muzik & Audio'
    },
    {
      name: t('categories.programming'),
      icon: '💻',
      link: '/gigs?category=Pengaturcaraan & Teknologi'
    },
    {
      name: t('categories.business'),
      icon: '💼',
      link: '/gigs?category=Perniagaan'
    },
    {
      name: t('categories.lifestyle'),
      icon: '🌟',
      link: '/gigs?category=Gaya Hidup'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Temui Bakat Malaysia
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Platform freelance terbaik untuk menghubungkan klien dengan freelancer berkualiti tinggi di Malaysia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/gigs"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Cari Perkhidmatan
              </Link>
              <Link
                to="/register"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Jadi Freelancer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('nav.categories')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi pelbagai kategori perkhidmatan yang ditawarkan oleh freelancer Malaysia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-gray-50 p-6 rounded-lg text-center hover:bg-primary-50 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gigs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perkhidmatan Popular
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temui perkhidmatan terbaik dan paling popular dari freelancer terpilih
            </p>
          </div>
          {loading ? (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <p className="mt-2 text-gray-600">{t('common.loading')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredGigs.map((gig: any) => (
                <GigCard key={gig._id} gig={gig} />
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link
              to="/gigs"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Lihat Semua Perkhidmatan
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('nav.howItWorks')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tiga langkah mudah untuk mendapatkan kerja berkualiti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cari & Pilih</h3>
              <p className="text-gray-600">
                Jelajahi ribuan perkhidmatan dan pilih yang sesuai dengan keperluan anda
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buat Pesanan</h3>
              <p className="text-gray-600">
                Berikan maklumat projek anda dan buat pembayaran dengan selamat
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Terima Hasil</h3>
              <p className="text-gray-600">
                Dapatkan hasil kerja berkualiti tinggi dalam masa yang ditetapkan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sedia untuk memulakan projek anda?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sertai ribuan klien yang berpuas hati dengan perkhidmatan freelancer Malaysia terbaik
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Mulakan Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;