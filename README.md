# Revenue Flow AI - Landing Page

Revenue flow AI is B2B offering of remint health to help service and product businesses get more leads.

A high-performance landing page built with Next.js 14+ and React, featuring AI-powered lead capture with Flask backend.

## Features

✅ **Modern Tech Stack**
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Flask REST API backend

✅ **Interactive Components**
- Hero section with gradient background
- Multiple feature sections
- Business-specific cards with colored gradients
- Lead capture form with real-time validation
- Modal popups on CTA clicks
- Exit intent modal (session-based)
- Smooth animations and transitions

✅ **Performance Optimized**
- Server Components for static content
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast page loads

✅ **Form Features**
- Real-time validation
- Phone number formatting
- Email validation
- Success/error handling
- Privacy-first approach

## Project Structure

```
revenue_flow_ai/
├── frontend/                 # Next.js frontend
│   ├── app/
│   │   ├── components/      # React components
│   │   │   ├── Hero/
│   │   │   ├── Features/
│   │   │   ├── BusinessCards/
│   │   │   ├── LeadForm/
│   │   │   ├── Modal/
│   │   │   └── ExitIntent/
│   │   ├── api/            # Next.js API routes
│   │   │   └── submit-lead/
│   │   ├── page.tsx        # Main page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   └── package.json
├── backend/                 # Flask backend
│   ├── app.py              # Flask application
│   ├── requirements.txt    # Python dependencies
│   └── data/               # Lead storage (JSON/CSV)
└── screenshots/            # Design references
```

## Setup Instructions

### Frontend (Next.js)

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Backend (Flask) - Optional

1. Navigate to backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Run Flask server:
```bash
python app.py
```

4. API will be available at [http://localhost:5000](http://localhost:5000)

**Note:** The frontend works independently. Flask backend is optional for production lead storage.

## Environment Variables

Create a `.env.local` file in the frontend directory (optional):

```env
FLASK_API_URL=http://localhost:5000/api/submit-lead
```

## API Endpoints

### Flask Backend

- `GET /` - API information
- `GET /health` - Health check
- `POST /api/submit-lead` - Submit lead
- `GET /api/leads` - Get all leads
- `GET /api/stats` - Lead statistics

### Next.js API Routes

- `POST /api/submit-lead` - Form submission endpoint (proxies to Flask or handles locally)

## Components Overview

### Hero
Main banner with headline, CTA button, and trust badges

### Features
Grid of AI-powered features with icons and descriptions

### BusinessCards
Industry-specific cards (Healthcare, Fitness, Real Estate, Restaurants, Professional Services, Salons) with colored gradients

### LeadForm
Validated form with:
- Name field
- Email field (validated)
- Phone field (auto-formatted)
- Business type field

### Modal
Popup modal for CTAs with embedded lead form

### ExitIntent
Triggers when user attempts to leave the page (shown once per session)

## Performance Features

- Next.js App Router for optimal performance
- Server Components for static content
- Client Components only where interactivity is needed
- Font optimization
- CSS optimization
- Minimal JavaScript bundle

## Deployment

### Frontend (Vercel - Recommended)

```bash
cd frontend
npm run build
```

Deploy to Vercel:
```bash
vercel deploy
```

### Backend (Optional - Railway, Render, Heroku, DigitalOcean)

The Flask backend is optional. You can deploy it to any Python hosting platform.

## Lead Data Storage

Leads are automatically saved in two formats:
- `backend/data/leads.json` - JSON format
- `backend/data/leads.csv` - CSV format

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
