# Quick Start Guide for JanYojana Portal

## Prerequisites
- Node.js v14+ installed
- MongoDB (local or MongoDB Atlas)
- Git

## Installation Steps

### 1. Install All Dependencies
```bash
npm run install-all
```

Or manually:
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..
```

### 2. Configuration

#### Backend (.env)
Copy `.env.example` to `.env` in the server folder and update values:
```bash
cd server
cp .env.example .env
```

Edit `.env` with your MongoDB URI and JWT secret:
```
MONGO_URI=mongodb://localhost:27017/janyojana-portal
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

### 3. Start Development Servers

#### Option A: Run Both Servers Together
```bash
npm start
```

#### Option B: Run Separately
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Project Structure Overview

```
.
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── i18n/          # Language files
│   │   └── services/      # API calls
│   └── package.json
├── server/                 # Express backend
│   ├── routes/            # API routes
│   ├── models/            # MongoDB schemas
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth & validation
│   ├── server.js          # Entry point
│   └── package.json
├── README.md              # Project documentation
└── package.json           # Root package.json
```

## API Endpoints

### Health Check
- `GET /api/health` - Server status

### Routes (To be implemented)
- `/api/schemes` - Schemes management
- `/api/applications` - Application tracking
- `/api/eligibility` - Eligibility checking
- `/api/documents` - Document management
- `/api/auth` - Authentication

## Multi-Language Support

The portal supports:
- **English** (en)
- **Hindi** (hi)

Toggle language in the navbar using the EN/HI button.

## Common Issues

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Verify MONGO_URI in `.env`
- Check network connectivity

### Module Not Found
- Run `npm install` in the respective folder
- Clear node_modules and reinstall if needed

## Next Steps

1. **Implement Backend APIs**:
   - Create MongoDB schemas
   - Implement controllers with business logic
   - Add authentication middleware

2. **Enhance Frontend**:
   - Build reusable components
   - Implement state management with Redux
   - Add form validation

3. **Add Features**:
   - Real scheme data
   - User authentication
   - Document upload functionality
   - Email notifications

4. **Testing**:
   - Unit tests for components
   - API integration tests
   - End-to-end testing

## Deployment

- **Frontend**: Deploy to Vercel, Netlify, or GitHub Pages
- **Backend**: Deploy to Render, Heroku, or Railway
- **Database**: Use MongoDB Atlas

## Support & Troubleshooting

For issues, check:
- `.github/copilot-instructions.md` - Development guidelines
- `README.md` - Project overview

---

Happy Coding! 🚀
