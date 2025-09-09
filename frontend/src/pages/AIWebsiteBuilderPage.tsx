import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Paper,
  Chip,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  AutoAwesome,
  Code,
  Visibility,
  Download,
  Refresh,
  Psychology,
} from '@mui/icons-material';
import { aiBuilderAPI } from '../api';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const AIWebsiteBuilderPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [description, setDescription] = useState('');
  const [websiteType, setWebsiteType] = useState('website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const websiteTypes = [
    { value: 'website', label: 'Static Website' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'business', label: 'Business Website' },
    { value: 'landing', label: 'Landing Page' },
    { value: 'blog', label: 'Blog' },
    { value: 'ecommerce', label: 'E-commerce' },
  ];

  const availableFeatures = [
    'Contact Form',
    'Image Gallery',
    'Navigation Menu',
    'Social Media Links',
    'Responsive Design',
    'Dark Mode Toggle',
    'Animation Effects',
    'Search Functionality',
    'Newsletter Signup',
    'Testimonials Section',
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleGenerate = async (useGemini = false) => {
    if (!description.trim()) {
      setError('Please provide a description for your website');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const data = {
        description: description.trim(),
        type: websiteType,
        features: selectedFeatures,
      };

      const response = useGemini 
        ? await aiBuilderAPI.generateWithGemini(data)
        : await aiBuilderAPI.generateWebsite(data);

      setGeneratedCode(response.data.code);
      setSuccess(`Website generated successfully! Used ${response.data.tokens || 0} tokens.`);
      setTabValue(1); // Switch to preview tab
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to generate website');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!generatedCode) return;

    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-generated-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <AutoAwesome sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            AI Website Builder
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary">
          Create beautiful websites with the power of AI - powered by ChatGPT & Gemini
        </Typography>
      </Box>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab icon={<Psychology />} label="Create" />
          <Tab icon={<Visibility />} label="Preview" />
          <Tab icon={<Code />} label="Code" />
        </Tabs>
      </Paper>

      {/* Create Tab */}
      <TabPanel value={tabValue} index={0}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Describe Your Website
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Tell our AI what kind of website you want to create. Be specific about the purpose, style, and content.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Website Description"
              placeholder="e.g., Create a modern portfolio website for a graphic designer with a dark theme, showcasing projects in a grid layout, including an about section and contact form..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
              <FormControl fullWidth>
                <InputLabel>Website Type</InputLabel>
                <Select
                  value={websiteType}
                  label="Website Type"
                  onChange={(e) => setWebsiteType(e.target.value)}
                >
                  {websiteTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Typography variant="h6" gutterBottom>
              Additional Features
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {availableFeatures.map((feature) => (
                <Chip
                  key={feature}
                  label={feature}
                  clickable
                  color={selectedFeatures.includes(feature) ? 'primary' : 'default'}
                  onClick={() => handleFeatureToggle(feature)}
                />
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={loading ? <CircularProgress size={20} /> : <AutoAwesome />}
                onClick={() => handleGenerate(false)}
                disabled={loading || !description.trim()}
                sx={{ minWidth: 180 }}
              >
                {loading ? 'Generating...' : 'Generate with ChatGPT'}
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Psychology />}
                onClick={() => handleGenerate(true)}
                disabled={loading || !description.trim()}
                sx={{ minWidth: 180 }}
              >
                Generate with Gemini
              </Button>

              {generatedCode && (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<Refresh />}
                  onClick={() => handleGenerate(false)}
                  disabled={loading}
                >
                  Regenerate
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </TabPanel>

      {/* Preview Tab */}
      <TabPanel value={tabValue} index={1}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">Website Preview</Typography>
              {generatedCode && (
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleDownload}
                >
                  Download HTML
                </Button>
              )}
            </Box>

            {generatedCode ? (
              <Paper
                sx={{
                  height: 600,
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <iframe
                  srcDoc={generatedCode}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  title="Website Preview"
                />
              </Paper>
            ) : (
              <Paper
                sx={{
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.50',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Generate a website to see the preview
                </Typography>
              </Paper>
            )}
          </CardContent>
        </Card>
      </TabPanel>

      {/* Code Tab */}
      <TabPanel value={tabValue} index={2}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">Generated Code</Typography>
              {generatedCode && (
                <Button
                  variant="outlined"
                  onClick={() => navigator.clipboard.writeText(generatedCode)}
                >
                  Copy Code
                </Button>
              )}
            </Box>

            {generatedCode ? (
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: '#f5f5f5',
                  maxHeight: 600,
                  overflow: 'auto',
                }}
              >
                <pre style={{ margin: 0, fontSize: '12px', lineHeight: '1.4' }}>
                  <code>{generatedCode}</code>
                </pre>
              </Paper>
            ) : (
              <Paper
                sx={{
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.50',
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Generate a website to see the code
                </Typography>
              </Paper>
            )}
          </CardContent>
        </Card>
      </TabPanel>
    </Container>
  );
};

export default AIWebsiteBuilderPage;