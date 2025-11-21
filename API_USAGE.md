# API Usage Guide

This document explains how to use the API in your React components.

## Quick Start

### Import the API utilities

```javascript
import { testConnection, getData, createData, updateData, deleteData } from '../utils/api';
```

Note: The path may vary depending on where your component is located. The API utilities are in `client/src/utils/api.js`.

### Example: Fetch Data in a React Component

```javascript
import { useState, useEffect } from 'react';
import { getData } from '../utils/api';

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true);
        const response = await getData();
        setEvents(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Events ({events.length})</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.date} ({event.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
```

### Example: Filter Data by Type

```javascript
import { getData } from '../utils/api';

// Get only sport events
const sportEvents = await getData('sport');
console.log(sportEvents.data);

// Get all events
const allEvents = await getData();
console.log(allEvents.data);
```

### Example: Create New Data

```javascript
import { createData } from '../utils/api';

async function handleCreateEvent() {
  const newEvent = {
    name: 'Tennis Tournament',
    date: '2025-12-15',
    type: 'sport'
  };

  try {
    const response = await createData(newEvent);
    console.log('Created:', response.data);
  } catch (error) {
    console.error('Failed to create:', error);
  }
}
```

### Example: Update Data

```javascript
import { updateData } from '../utils/api';

async function handleUpdateEvent() {
  const updatedEvent = {
    id: 1,
    name: 'Updated Basketball Event',
    date: '2025-11-30',
    type: 'sport'
  };

  try {
    const response = await updateData(updatedEvent);
    console.log('Updated:', response);
  } catch (error) {
    console.error('Failed to update:', error);
  }
}
```

### Example: Delete Data

```javascript
import { deleteData } from '../utils/api';

async function handleDeleteEvent(eventId) {
  try {
    const response = await deleteData(eventId);
    console.log('Deleted:', response);
  } catch (error) {
    console.error('Failed to delete:', error);
  }
}
```

### Example: Test API Connection

```javascript
import { testConnection } from '../utils/api';

async function checkAPI() {
  try {
    const response = await testConnection();
    console.log('API is working:', response.message);
  } catch (error) {
    console.error('API is not available:', error);
  }
}
```

## Complete Component Example

Here's a full example with all CRUD operations:

```javascript
import { useState, useEffect } from 'react';
import { getData, createData, updateData, deleteData } from '../utils/api';

function EventsManager() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  // Load events
  const loadEvents = async () => {
    setLoading(true);
    try {
      const response = await getData(filter);
      setEvents(response.data);
    } catch (error) {
      console.error('Failed to load events:', error);
    }
    setLoading(false);
  };

  // Load on mount and when filter changes
  useEffect(() => {
    loadEvents();
  }, [filter]);

  // Create event
  const handleCreate = async () => {
    const newEvent = {
      name: 'New Event',
      date: new Date().toISOString().split('T')[0],
      type: 'social'
    };
    
    try {
      await createData(newEvent);
      loadEvents(); // Refresh list
    } catch (error) {
      console.error('Failed to create:', error);
    }
  };

  // Delete event
  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      loadEvents(); // Refresh list
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  return (
    <div>
      <h1>Events Manager</h1>
      
      {/* Filter */}
      <div>
        <button onClick={() => setFilter(null)}>All</button>
        <button onClick={() => setFilter('sport')}>Sport</button>
        <button onClick={() => setFilter('social')}>Social</button>
        <button onClick={() => setFilter('outdoor')}>Outdoor</button>
      </div>

      {/* Create button */}
      <button onClick={handleCreate}>Add Event</button>

      {/* Events list */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <span>{event.name} - {event.date} ({event.type})</span>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventsManager;
```

## API Endpoints Reference

### GET `/api/hello`
Test endpoint to verify API is working.

**Response:**
```json
{
  "message": "Hello from Vercel Serverless API!",
  "timestamp": "2025-11-21T12:00:00.000Z",
  "endpoint": "/api/hello"
}
```

### GET `/api/data?type=sport`
Get data with optional type filter.

**Query Parameters:**
- `type` (optional): Filter by type (sport, social, outdoor)

**Response:**
```json
{
  "success": true,
  "data": [...],
  "count": 3
}
```

### POST `/api/data`
Create new data.

**Request Body:**
```json
{
  "name": "Event Name",
  "date": "2025-12-01",
  "type": "sport"
}
```

### PUT `/api/data`
Update existing data.

**Request Body:**
```json
{
  "id": 1,
  "name": "Updated Event Name",
  "date": "2025-12-01",
  "type": "sport"
}
```

### DELETE `/api/data?id=1`
Delete data by ID.

**Query Parameters:**
- `id` (required): ID of item to delete

## Environment-Specific Behavior

### Development (Local)
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Vite proxy forwards `/api/*` to backend server

### Production (Vercel)
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.vercel.app/api/*` (serverless functions)
- No proxy needed - all routes on same domain

## Error Handling

Always wrap API calls in try-catch blocks:

```javascript
try {
  const data = await getData();
  // Handle success
} catch (error) {
  // Handle error
  console.error('API error:', error.message);
}
```

## Next Steps: Adding a Database

The API is structured to easily add database support:

1. Choose a database (PostgreSQL, MongoDB, etc.)
2. Install database client package
3. Add database connection string to environment variables
4. Update API handlers in `/api` folder to use database queries
5. Replace mock data with actual database operations

See `README.md` for detailed database integration instructions.

