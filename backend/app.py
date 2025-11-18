from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import csv
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Create data directory if it doesn't exist
DATA_DIR = 'data'
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

LEADS_JSON = os.path.join(DATA_DIR, 'leads.json')
LEADS_CSV = os.path.join(DATA_DIR, 'leads.csv')

# Initialize files if they don't exist
if not os.path.exists(LEADS_JSON):
    with open(LEADS_JSON, 'w') as f:
        json.dump([], f)

if not os.path.exists(LEADS_CSV):
    with open(LEADS_CSV, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Timestamp', 'Name', 'Email', 'Phone', 'Business Type'])


def save_lead_to_json(lead_data):
    """Save lead to JSON file"""
    try:
        # Read existing data
        with open(LEADS_JSON, 'r') as f:
            leads = json.load(f)

        # Append new lead
        leads.append(lead_data)

        # Write back to file
        with open(LEADS_JSON, 'w') as f:
            json.dump(leads, f, indent=2)

        return True
    except Exception as e:
        print(f"Error saving to JSON: {e}")
        return False


def save_lead_to_csv(lead_data):
    """Save lead to CSV file"""
    try:
        with open(LEADS_CSV, 'a', newline='') as f:
            writer = csv.writer(f)
            writer.writerow([
                lead_data.get('timestamp', ''),
                lead_data.get('name', ''),
                lead_data.get('email', ''),
                lead_data.get('phone', ''),
                lead_data.get('businessType', '')
            ])
        return True
    except Exception as e:
        print(f"Error saving to CSV: {e}")
        return False


@app.route('/')
def home():
    """Home route"""
    return jsonify({
        'message': 'Revenue Flow AI - Lead Capture API',
        'version': '1.0',
        'endpoints': {
            'submit_lead': '/api/submit-lead (POST)',
            'get_leads': '/api/leads (GET)',
            'health': '/health (GET)'
        }
    })


@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})


@app.route('/api/submit-lead', methods=['POST'])
def submit_lead():
    """Submit a new lead"""
    try:
        # Get JSON data from request
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'businessType']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400

        # Add timestamp if not present
        if 'timestamp' not in data:
            data['timestamp'] = datetime.now().isoformat()

        # Save to both JSON and CSV
        json_success = save_lead_to_json(data)
        csv_success = save_lead_to_csv(data)

        if json_success and csv_success:
            return jsonify({
                'success': True,
                'message': 'Lead submitted successfully',
                'data': data
            }), 201
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to save lead data'
            }), 500

    except Exception as e:
        print(f"Error processing lead: {e}")
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500


@app.route('/api/leads', methods=['GET'])
def get_leads():
    """Get all leads"""
    try:
        with open(LEADS_JSON, 'r') as f:
            leads = json.load(f)

        return jsonify({
            'success': True,
            'count': len(leads),
            'leads': leads
        })
    except Exception as e:
        print(f"Error retrieving leads: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve leads'
        }), 500


@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get lead statistics"""
    try:
        with open(LEADS_JSON, 'r') as f:
            leads = json.load(f)

        # Calculate statistics
        total_leads = len(leads)

        # Group by business type
        business_types = {}
        for lead in leads:
            btype = lead.get('businessType', 'Unknown')
            business_types[btype] = business_types.get(btype, 0) + 1

        return jsonify({
            'success': True,
            'stats': {
                'total_leads': total_leads,
                'business_types': business_types
            }
        })
    except Exception as e:
        print(f"Error calculating stats: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to calculate statistics'
        }), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
