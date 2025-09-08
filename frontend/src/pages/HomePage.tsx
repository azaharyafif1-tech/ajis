import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  InputAdornment,
  Paper,
} from '@mui/material';
import {
  Search,
  TrendingUp,
  Star,
  Code,
  Brush,
  Campaign,
  Edit,
  Smartphone,
  CameraAlt,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { categoriesAPI, servicesAPI } from '../api';
import { Link } from 'react-router-dom';

interface Category {
  _id: string;
  name: { en: string; ms: string };
  description: { en: string; ms: string };
  icon: string;
}

interface Service {
  _id: string;
  title: { en: string; ms: string };
  description: { en: string; ms: string };
  price: number;
  deliveryTime: number;
  rating: number;
  reviewCount: number;
  images: string[];
  seller: {
    firstName: string;
    lastName: string;
    profileImage?: string;
  };
}

const iconMap: { [key: string]: React.ReactElement } = {
  web: <Code />,
  design_services: <Brush />,
  campaign: <Campaign />,
  edit: <Edit />,
  smartphone: <Smartphone />,
  camera_alt: <CameraAlt />,
};

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredServices, setFeaturedServices] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const currentLang = i18n.language as 'en' | 'ms';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, servicesRes] = await Promise.all([
          categoriesAPI.getAll(),
          servicesAPI.getAll({ limit: 8, sortBy: 'rating', sortOrder: 'desc' })
        ]);
        
        setCategories(categoriesRes.data);
        setFeaturedServices(servicesRes.data.services || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center">
          {t('loading')}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {t('hero.title')}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            {t('hero.subtitle')}
          </Typography>
          
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              maxWidth: 600,
              mx: 'auto',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <TextField
              fullWidth
              placeholder={t('hero.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              variant="standard"
              sx={{ ml: 1, flex: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ m: 0.5 }}
            >
              {t('hero.findServices')}
            </Button>
          </Paper>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Categories Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom align="center">
            {t('categories.title')}
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
            {t('categories.subtitle')}
          </Typography>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
            {categories.map((category) => (
              <Card
                key={category._id}
                component={Link}
                to={`/services?category=${category._id}`}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}>
                    {iconMap[category.icon] || <Code />}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {category.name[currentLang]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description[currentLang]}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Featured Services Section */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <TrendingUp sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h3" component="h2">
              {t('services.title')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 3 }}>
            {featuredServices.map((service) => (
              <Card
                key={service._id}
                component={Link}
                to={`/services/${service._id}`}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={service.images[0] || 'https://via.placeholder.com/300x160?text=Service'}
                  alt={service.title[currentLang]}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom noWrap>
                    {service.title[currentLang]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {service.seller.firstName} {service.seller.lastName}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Star sx={{ color: 'gold', fontSize: 16, mr: 0.5 }} />
                    <Typography variant="body2">
                      {service.rating.toFixed(1)} ({service.reviewCount})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={`${service.deliveryTime} ${t('services.days')}`}
                      size="small"
                      variant="outlined"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {t('services.startingAt')}
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    {t('services.rm')}{service.price}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;