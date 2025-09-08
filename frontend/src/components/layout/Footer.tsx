import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-white">
              AJIS
            </Link>
            <p className="mt-4 text-gray-400">
              Platform freelance terbaik di Malaysia untuk menghubungkan bakat tempatan dengan peluang global.
            </p>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">{t('nav.categories')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/gigs?category=Grafik & Reka Bentuk" className="hover:text-white">{t('categories.graphicDesign')}</Link></li>
              <li><Link to="/gigs?category=Pemasaran Digital" className="hover:text-white">{t('categories.digitalMarketing')}</Link></li>
              <li><Link to="/gigs?category=Penulisan & Terjemahan" className="hover:text-white">{t('categories.writingTranslation')}</Link></li>
              <li><Link to="/gigs?category=Pengaturcaraan & Teknologi" className="hover:text-white">{t('categories.programming')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Sokongan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-white">Pusat Bantuan</Link></li>
              <li><Link to="/safety" className="hover:text-white">Keselamatan</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terma & Syarat</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Polisi Privasi</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Syarikat</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/careers" className="hover:text-white">Kerjaya</Link></li>
              <li><Link to="/press" className="hover:text-white">Media</Link></li>
              <li><Link to="/contact" className="hover:text-white">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AJIS. Semua hak terpelihara.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="text-gray-400 text-sm">Pembayaran disokong:</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">FPX</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">GrabPay</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">TnG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;