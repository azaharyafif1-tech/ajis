import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IGig } from './Gig';

export interface IOrder extends Document {
  gig: IGig['_id'];
  seller: IUser['_id'];
  buyer: IUser['_id'];
  package: 'basic' | 'standard' | 'premium';
  requirements: string;
  customOffer?: {
    description: string;
    price: number;
    deliveryTime: number;
  };
  status: 'pending' | 'active' | 'delivered' | 'completed' | 'cancelled' | 'dispute';
  deliveredWork?: {
    message: string;
    files: string[];
    deliveredAt: Date;
  };
  payment: {
    amount: number;
    currency: string;
    method: string;
    transactionId?: string;
    status: 'pending' | 'completed' | 'failed' | 'refunded';
  };
  expectedDelivery: Date;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
  gig: {
    type: Schema.Types.ObjectId,
    ref: 'Gig',
    required: true
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  package: {
    type: String,
    enum: ['basic', 'standard', 'premium'],
    required: true
  },
  requirements: {
    type: String,
    required: true,
    maxlength: 1000
  },
  customOffer: {
    description: {
      type: String,
      maxlength: 500
    },
    price: {
      type: Number,
      min: 5
    },
    deliveryTime: {
      type: Number,
      min: 1
    }
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'delivered', 'completed', 'cancelled', 'dispute'],
    default: 'pending'
  },
  deliveredWork: {
    message: {
      type: String,
      maxlength: 1000
    },
    files: [{
      type: String
    }],
    deliveredAt: {
      type: Date
    }
  },
  payment: {
    amount: {
      type: Number,
      required: true,
      min: 5
    },
    currency: {
      type: String,
      default: 'MYR'
    },
    method: {
      type: String,
      enum: ['fpx', 'grabpay', 'tng', 'boost', 'credit_card'],
      required: true
    },
    transactionId: {
      type: String
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    }
  },
  expectedDelivery: {
    type: Date,
    required: true
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for querying orders
OrderSchema.index({ seller: 1, status: 1 });
OrderSchema.index({ buyer: 1, status: 1 });
OrderSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model<IOrder>('Order', OrderSchema);