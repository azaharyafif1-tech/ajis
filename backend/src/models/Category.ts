import mongoose, { Document, Schema } from 'mongoose';

export interface ICategory extends Document {
  name: {
    en: string;
    ms: string;
  };
  description: {
    en: string;
    ms: string;
  };
  icon: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema({
  name: {
    en: {
      type: String,
      required: true,
      trim: true
    },
    ms: {
      type: String,
      required: true,
      trim: true
    }
  },
  description: {
    en: {
      type: String,
      required: true,
      maxlength: 500
    },
    ms: {
      type: String,
      required: true,
      maxlength: 500
    }
  },
  icon: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model<ICategory>('Category', CategorySchema);