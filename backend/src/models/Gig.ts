import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IGig extends Document {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
  images: string[];
  packages: {
    basic: {
      title: string;
      description: string;
      price: number;
      deliveryTime: number;
      features: string[];
    };
    standard?: {
      title: string;
      description: string;
      price: number;
      deliveryTime: number;
      features: string[];
    };
    premium?: {
      title: string;
      description: string;
      price: number;
      deliveryTime: number;
      features: string[];
    };
  };
  seller: IUser['_id'];
  isActive: boolean;
  rating: number;
  reviewCount: number;
  totalOrders: number;
  createdAt: Date;
  updatedAt: Date;
}

const GigSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 80
  },
  description: {
    type: String,
    required: true,
    maxlength: 1200
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Grafik & Reka Bentuk',
      'Pemasaran Digital',
      'Penulisan & Terjemahan',
      'Video & Animasi',
      'Muzik & Audio',
      'Pengaturcaraan & Teknologi',
      'Perniagaan',
      'Gaya Hidup'
    ]
  },
  subcategory: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    maxlength: 20
  }],
  images: [{
    type: String
  }],
  packages: {
    basic: {
      title: {
        type: String,
        required: true,
        maxlength: 35
      },
      description: {
        type: String,
        required: true,
        maxlength: 100
      },
      price: {
        type: Number,
        required: true,
        min: 5
      },
      deliveryTime: {
        type: Number,
        required: true,
        min: 1
      },
      features: [{
        type: String
      }]
    },
    standard: {
      title: {
        type: String,
        maxlength: 35
      },
      description: {
        type: String,
        maxlength: 100
      },
      price: {
        type: Number,
        min: 5
      },
      deliveryTime: {
        type: Number,
        min: 1
      },
      features: [{
        type: String
      }]
    },
    premium: {
      title: {
        type: String,
        maxlength: 35
      },
      description: {
        type: String,
        maxlength: 100
      },
      price: {
        type: Number,
        min: 5
      },
      deliveryTime: {
        type: Number,
        min: 1
      },
      features: [{
        type: String
      }]
    }
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  totalOrders: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search and filtering
GigSchema.index({ title: 'text', description: 'text', tags: 'text' });
GigSchema.index({ category: 1, subcategory: 1 });
GigSchema.index({ 'packages.basic.price': 1 });
GigSchema.index({ rating: -1 });
GigSchema.index({ createdAt: -1 });

export default mongoose.model<IGig>('Gig', GigSchema);