// Vercel Serverless Function - Data API
// This endpoint demonstrates how to handle different HTTP methods
// and can be extended for database operations in the future

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Sample data - in the future, this could come from a database
  const sampleData = [
    { id: 1, name: 'Basketball Event', date: '2025-11-25', type: 'sport' },
    { id: 2, name: 'Board Game Night', date: '2025-11-28', type: 'social' },
    { id: 3, name: 'Hiking Trip', date: '2025-12-01', type: 'outdoor' }
  ];

  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      // GET all data or filter by query params
      const { type } = req.query;
      const filteredData = type 
        ? sampleData.filter(item => item.type === type)
        : sampleData;
      
      res.status(200).json({
        success: true,
        data: filteredData,
        count: filteredData.length
      });
      break;

    case 'POST':
      // POST - create new data (example structure for future database operations)
      const newItem = req.body;
      
      res.status(201).json({
        success: true,
        message: 'Data received (not persisted yet - add database in the future)',
        data: {
          id: Date.now(), // Temporary ID
          ...newItem,
          createdAt: new Date().toISOString()
        }
      });
      break;

    case 'PUT':
    case 'PATCH':
      // UPDATE - update existing data
      res.status(200).json({
        success: true,
        message: 'Update endpoint ready for database integration',
        receivedData: req.body
      });
      break;

    case 'DELETE':
      // DELETE - remove data
      const { id } = req.query;
      res.status(200).json({
        success: true,
        message: `Delete endpoint ready for database integration`,
        id
      });
      break;

    default:
      res.status(405).json({ 
        success: false,
        error: 'Method not allowed' 
      });
  }
}

