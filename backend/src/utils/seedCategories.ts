import mongoose from 'mongoose';
import Category from '../models/Category';
import dotenv from 'dotenv';

dotenv.config();

const categories = [
  {
    name: {
      en: "Web Development",
      ms: "Pembangunan Laman Web"
    },
    description: {
      en: "Create websites, web applications, and digital solutions",
      ms: "Cipta laman web, aplikasi web, dan penyelesaian digital"
    },
    icon: "web"
  },
  {
    name: {
      en: "Graphic Design",
      ms: "Reka Bentuk Grafik"
    },
    description: {
      en: "Logo design, branding, and visual content creation",
      ms: "Reka bentuk logo, penjenamaan, dan penciptaan kandungan visual"
    },
    icon: "design_services"
  },
  {
    name: {
      en: "Digital Marketing",
      ms: "Pemasaran Digital"
    },
    description: {
      en: "Social media marketing, SEO, and online advertising",
      ms: "Pemasaran media sosial, SEO, dan pengiklanan dalam talian"
    },
    icon: "campaign"
  },
  {
    name: {
      en: "Writing & Translation",
      ms: "Penulisan & Terjemahan"
    },
    description: {
      en: "Content writing, copywriting, and translation services",
      ms: "Penulisan kandungan, penulisan iklan, dan perkhidmatan terjemahan"
    },
    icon: "edit"
  },
  {
    name: {
      en: "Mobile App Development",
      ms: "Pembangunan Aplikasi Mudah Alih"
    },
    description: {
      en: "iOS and Android app development",
      ms: "Pembangunan aplikasi iOS dan Android"
    },
    icon: "smartphone"
  },
  {
    name: {
      en: "Photography",
      ms: "Fotografi"
    },
    description: {
      en: "Event photography, product photography, and editing",
      ms: "Fotografi acara, fotografi produk, dan penyuntingan"
    },
    icon: "camera_alt"
  }
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ajis-marketplace');
    console.log('Connected to MongoDB');

    // Clear existing categories
    await Category.deleteMany({});

    // Insert new categories
    await Category.insertMany(categories);
    console.log('Categories seeded successfully');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
};

seedCategories();