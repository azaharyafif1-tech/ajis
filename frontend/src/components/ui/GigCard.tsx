import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { StarIcon } from '@heroicons/react/24/solid';

interface GigCardProps {
  gig: {
    _id: string;
    title: string;
    images: string[];
    packages: {
      basic: {
        price: number;
      };
    };
    seller: {
      username: string;
      fullName: string;
      avatar?: string;
      rating: number;
    };
    rating: number;
    reviewCount: number;
  };
}

const GigCard: React.FC<GigCardProps> = ({ gig }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={`/gigs/${gig._id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      {/* Gig Image */}
      <div className="aspect-w-16 aspect-h-10 bg-gray-200">
        {gig.images && gig.images.length > 0 ? (
          <img
            src={gig.images[0]}
            alt={gig.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
            <span className="text-gray-500 text-lg">📷</span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Seller Info */}
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2">
            {gig.seller.avatar ? (
              <img
                src={gig.seller.avatar}
                alt={gig.seller.username}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium text-primary-600">
                {gig.seller.fullName.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{gig.seller.fullName}</p>
            <div className="flex items-center">
              <StarIcon className="h-3 w-3 text-yellow-400 mr-1" />
              <span className="text-xs text-gray-600">
                {gig.seller.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Gig Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {gig.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium text-gray-900">
              {gig.rating > 0 ? gig.rating.toFixed(1) : 'Baru'}
            </span>
            {gig.reviewCount > 0 && (
              <span className="text-sm text-gray-600 ml-1">
                ({gig.reviewCount})
              </span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{t('gig.startingAt')}</span>
          <span className="text-lg font-bold text-gray-900">
            RM{gig.packages.basic.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;