import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: {
    en: string;
    ms: string;
  };
  description: {
    en: string;
    ms: string;
  };
  category: mongoose.Types.ObjectId;
  seller: mongoose.Types.ObjectId;
  images: string[];
  price: number;
  deliveryTime: number; // in days
  revisions: number;
  tags: string[];
  packages: {
    basic: {
      name: { en: string; ms: string };
      description: { en: string; ms: string };
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
    standard?: {
      name: { en: string; ms: string };
      description: { en: string; ms: string };
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
    premium?: {
      name: { en: string; ms: string };
      description: { en: string; ms: string };
      price: number;
      deliveryTime: number;
      revisions: number;
      features: string[];
    };
  };
  isActive: boolean;
  rating: number;
  reviewCount: number;
  totalOrders: number;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema({
  title: {
    en: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },
    ms: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    }
  },
  description: {
    en: {
      type: String,
      required: true,
      maxlength: 1000
    },
    ms: {
      type: String,
      required: true,
      maxlength: 1000
    }
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  images: [{
    type: String
  }],
  price: {
    type: Number,
    required: true,
    min: 5
  },
  deliveryTime: {
    type: Number,
    required: true,
    min: 1,
    max: 30
  },
  revisions: {
    type: Number,
    default: 1,
    min: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  packages: {
    basic: {
      name: {
        en: { type: String, required: true },
        ms: { type: String, required: true }
      },
      description: {
        en: { type: String, required: true },
        ms: { type: String, required: true }
      },
      price: { type: Number, required: true, min: 5 },
      deliveryTime: { type: Number, required: true, min: 1 },
      revisions: { type: Number, default: 1 },
      features: [{ type: String }]
    },
    standard: {
      name: {
        en: { type: String },
        ms: { type: String }
      },
      description: {
        en: { type: String },
        ms: { type: String }
      },
      price: { type: Number, min: 5 },
      deliveryTime: { type: Number, min: 1 },
      revisions: { type: Number, default: 1 },
      features: [{ type: String }]
    },
    premium: {
      name: {
        en: { type: String },
        ms: { type: String }
      },
      description: {
        en: { type: String },
        ms: { type: String }
      },
      price: { type: Number, min: 5 },
      deliveryTime: { type: Number, min: 1 },
      revisions: { type: Number, default: 1 },
      features: [{ type: String }]
    }
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

export default mongoose.model<IService>('Service', ServiceSchema);