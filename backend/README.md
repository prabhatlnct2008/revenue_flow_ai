# Revenue Flow AI - Backend API

Flask-based REST API for handling lead submissions.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /api/submit-lead` - Submit a new lead
- `GET /api/leads` - Get all leads
- `GET /api/stats` - Get lead statistics

## Data Storage

Leads are stored in:
- `data/leads.json` - JSON format
- `data/leads.csv` - CSV format
