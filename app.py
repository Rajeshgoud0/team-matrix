from flask import Flask, render_template, request, jsonify, session
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
app.secret_key = 'janyojana_secret_key_2026'
CORS(app)

# Sample data
schemes = [
    {
        'id': 1,
        'name': 'Pradhan Mantri Kisan Samman Nidhi',
        'category': 'Agriculture',
        'description': 'Direct income support scheme for farmers - ₹6000 per year',
        'eligibility': 'All farmers with landholding',
        'amount': '₹6,000 per year'
    },
    {
        'id': 2,
        'name': 'NREGA - Mahatma Gandhi National Rural Employment Guarantee Act',
        'category': 'Employment',
        'description': 'Rural employment guarantee scheme',
        'eligibility': 'Unemployed rural citizens',
        'amount': '₹200-300 per day'
    },
    {
        'id': 3,
        'name': 'Pradhan Mantri Fasal Bima Yojana',
        'category': 'Agriculture',
        'description': 'Crop insurance scheme',
        'eligibility': 'Farm owners',
        'amount': 'Variable'
    },
    {
        'id': 4,
        'name': 'Swachh Bharat Mission',
        'category': 'Health',
        'description': 'Toilet construction and sanitation program',
        'eligibility': 'Below poverty line families',
        'amount': '₹12,000'
    }
]

applications = [
    {
        'id': 1,
        'scheme': 'Pradhan Mantri Kisan Samman Nidhi',
        'status': 'Approved',
        'submitted': '2026-02-15',
        'amount': '₹6,000'
    }
]

# simple in-memory user store
users = []

@app.route('/api/register', methods=['POST'])
def api_register():
    data = request.json
    phone = data.get('phone')
    email = data.get('email')
    password = data.get('password')
    if not phone or not password:
        return jsonify({'error': 'phone and password required'}), 400
    # check existing
    if any(u['phone'] == phone for u in users):
        return jsonify({'error': 'user exists'}), 400
    users.append({'phone': phone, 'email': email, 'password': password})
    return jsonify({'success': True}), 201

@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    phone = data.get('phone')
    password = data.get('password')
    if not phone or not password:
        return jsonify({'error': 'phone and password required'}), 400
    user = next((u for u in users if u['phone'] == phone and u['password'] == password), None)
    if not user:
        return jsonify({'error': 'invalid credentials'}), 401
    return jsonify({'success': True, 'user': {'phone': user['phone'], 'email': user.get('email')}})

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/health')
def health():
    return jsonify({
        'status': 'Server is running',
        'timestamp': datetime.now().isoformat(),
        'app': 'JanYojana Portal'
    })

@app.route('/api/schemes', methods=['GET'])
def get_schemes():
    search = request.args.get('search', '').lower()
    category = request.args.get('category', 'all')
    
    filtered = schemes
    
    if search:
        filtered = [s for s in filtered if search in s['name'].lower() or search in s['description'].lower()]
    
    if category != 'all':
        filtered = [s for s in filtered if s['category'].lower() == category.lower()]
    
    return jsonify(filtered)

@app.route('/api/schemes/<int:scheme_id>')
def get_scheme(scheme_id):
    scheme = next((s for s in schemes if s['id'] == scheme_id), None)
    if scheme:
        return jsonify(scheme)
    return jsonify({'error': 'Scheme not found'}), 404

@app.route('/api/eligibility/check', methods=['POST'])
def check_eligibility():
    data = request.json
    age = int(data.get('age', 0))
    income = int(data.get('income', 0))
    
    eligible = []
    not_eligible = []
    
    for scheme in schemes:
        if age >= 18 and income < 150000:  # Simple logic
            eligible.append(scheme['name'])
        else:
            not_eligible.append(scheme['name'])
    
    return jsonify({
        'eligible': eligible[:2],
        'not_eligible': not_eligible[:1]
    })

@app.route('/api/applications', methods=['GET'])
def get_applications():
    return jsonify(applications)

@app.route('/api/applications', methods=['POST'])
def create_application():
    data = request.json
    new_app = {
        'id': len(applications) + 1,
        'scheme': data.get('scheme'),
        'status': 'Pending',
        'submitted': datetime.now().strftime('%Y-%m-%d'),
        'amount': 'Processing'
    }
    applications.append(new_app)
    return jsonify(new_app), 201

if __name__ == '__main__':
    print("=" * 60)
    print("🚀 JanYojana Portal Starting...")
    print("=" * 60)
    print("📍 Server: http://localhost:5000")
    print("🌐 Web App: http://localhost:5000")
    print("=" * 60)
    app.run(debug=True, port=5000)
