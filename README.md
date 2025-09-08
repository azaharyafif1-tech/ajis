# AJIS - Malaysian Freelance Marketplace

A modern freelance marketplace web application tailored for the Malaysian market, similar to Fiverr but with local focus and multilingual support.

## Features

### Core Features ✅
- **User Registration & Authentication** - Complete with JWT tokens
- **Service Listings** - Create, browse, and search services 
- **Categories System** - Organized service categories with icons
- **Multilingual Support** - English and Bahasa Malaysia
- **Messaging System** - Real-time chat with Socket.io
- **Payment Integration** - Ready for payment gateway integration
- **Responsive Design** - Built with Material-UI for mobile-first experience

### Technical Stack

**Frontend:**
- React 19 with TypeScript
- Material-UI (MUI) v7 for modern UI components
- React Router for navigation
- React i18next for internationalization
- Axios for API communication
- Socket.io client for real-time messaging

**Backend:**
- Node.js with Express
- TypeScript for type safety
- MongoDB with Mongoose ODM
- JWT for authentication
- Socket.io for real-time features
- bcryptjs for password hashing

## Project Structure

```
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── api.ts         # API client configuration
│   │   └── i18n.ts        # Internationalization setup
├── backend/           # Node.js API server
│   ├── src/
│   │   ├── models/        # MongoDB data models
│   │   ├── routes/        # API route handlers
│   │   ├── middleware/    # Custom middleware
│   │   └── utils/         # Utility functions
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration:**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your configuration:
   # MONGODB_URI=mongodb://localhost:27017/ajis-marketplace
   # JWT_SECRET=your-super-secret-jwt-key-here
   # PORT=5000
   # NODE_ENV=development
   # FRONTEND_URL=http://localhost:3000
   ```

3. **Database Setup:**
   ```bash
   # Seed initial categories
   npm run seed
   
   # Build TypeScript
   npm run build
   
   # Start development server
   npm run dev
   ```

### Frontend Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install --legacy-peer-deps
   ```

2. **Environment Configuration:**
   ```bash
   # Create .env file
   echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/:id` - Get user by ID

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create category

### Services
- `GET /api/services` - List services with filters
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Messages
- `GET /api/messages/conversations` - Get user conversations
- `GET /api/messages/conversations/:id` - Get conversation messages
- `POST /api/messages/conversations` - Start new conversation
- `POST /api/messages/conversations/:id/messages` - Send message

## Language Support

The application supports:
- **English** (en) - Default language
- **Bahasa Malaysia** (ms) - Local language

Users can switch languages using the language selector in the navigation bar.

## Development

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

### Testing
Currently, the project uses the default React testing setup. Additional tests can be added in the `src/__tests__` directories.

## Deployment

The application is ready for deployment on various platforms:

- **Frontend:** Can be deployed to Vercel, Netlify, or any static hosting service
- **Backend:** Can be deployed to Heroku, Railway, DigitalOcean, or any Node.js hosting service
- **Database:** MongoDB Atlas for cloud database

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Malaysian Market Focus

This marketplace is specifically designed for the Malaysian market with:
- Ringgit Malaysia (RM) currency
- Local business practices
- Bahasa Malaysia language support
- Region-appropriate service categories
- Malaysian developer-friendly features