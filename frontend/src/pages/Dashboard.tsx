import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { state } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Selamat datang, {state.user?.fullName}!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Pesanan Aktif</h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Jumlah Pendapatan</h3>
          <p className="text-3xl font-bold text-green-600">RM 0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Penilaian</h3>
          <p className="text-3xl font-bold text-yellow-500">{state.user?.rating || 0}</p>
        </div>
      </div>
      <div className="mt-8 text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">Dashboard lengkap akan dilaksanakan di sini.</p>
      </div>
    </div>
  );
};

export default Dashboard;