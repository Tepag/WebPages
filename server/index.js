// Express server for local development
// Note: Vercel uses serverless functions in /api folder for production
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes for local development
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Express API (local development)!',
    timestamp: new Date().toISOString(),
    endpoint: '/api/hello'
  });
});

app.all('/api/data', (req, res) => {
  const sampleData = [
    { id: 1, name: 'Basketball Event', date: '2025-11-25', type: 'sport' },
    { id: 2, name: 'Board Game Night', date: '2025-11-28', type: 'social' },
    { id: 3, name: 'Hiking Trip', date: '2025-12-01', type: 'outdoor' }
  ];

  switch (req.method) {
    case 'GET':
      const { type } = req.query;
      const filteredData = type 
        ? sampleData.filter(item => item.type === type)
        : sampleData;
      
      res.json({
        success: true,
        data: filteredData,
        count: filteredData.length
      });
      break;

    case 'POST':
      res.status(201).json({
        success: true,
        message: 'Data received (local dev - not persisted)',
        data: {
          id: Date.now(),
          ...req.body,
          createdAt: new Date().toISOString()
        }
      });
      break;

    case 'PUT':
    case 'PATCH':
      res.json({
        success: true,
        message: 'Update endpoint ready',
        receivedData: req.body
      });
      break;

    case 'DELETE':
      res.json({
        success: true,
        message: 'Delete endpoint ready',
        id: req.query.id
      });
      break;

    default:
      res.status(405).json({ 
        success: false,
        error: 'Method not allowed' 
      });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    environment: 'development',
    timestamp: new Date().toISOString() 
  });
});

// Start server only if not in production (Vercel handles production)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Express server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoints available at http://localhost:${PORT}/api/*`);
  });
}

export default app;

