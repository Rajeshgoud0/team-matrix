# JanYojana Portal - Rural Government Scheme Awareness Platform

## 📋 Problem Statement
Create a web platform that helps rural citizens easily access information about government schemes, eligibility criteria, and application processes.

## 🎯 Key Features
- **Scheme Directory & Search**: Browse and search all available government schemes
- **Eligibility Checker**: Determine eligibility based on personal criteria
- **Application Status Tracker**: Track submitted applications in real-time
- **Document Management**: Upload and manage required documents
- **Multi-Language Support**: Support for Hindi and regional languages
- **Mobile-Friendly**: Responsive design for desktop and mobile devices

## 📁 Project Structure
```
.
├── client/              # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API calls
│   │   ├── i18n/        # Internationalization (multi-language)
│   │   └── App.jsx
│   └── package.json
├── server/              # Node.js/Express backend
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/      # Auth, validation, etc.
│   ├── config/          # Configuration files
│   └── server.js
├── README.md
└── package.json (root)
```

## 🚀 Tech Stack
- **Frontend**: React.js, TailwindCSS, Redux Toolkit
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: Multer (for document uploads)
- **Internationalization**: i18next (for multi-language support)

## 📋 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone/Initialize the project** (already done in this workspace)

2. **Install server dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**:
   - Create `.env` file in `server/` folder with:
     ```
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     PORT=5000
     NODE_ENV=development
     ```

5. **Start Development Servers**:
   - Terminal 1 (Backend):
     ```bash
     cd server
     npm start
     ```
   - Terminal 2 (Frontend):
     ```bash
     cd client
     npm start
     ```

## 🔄 API Endpoints (Planned)

### Schemes
- `GET /api/schemes` - Get all schemes
- `GET /api/schemes/:id` - Get scheme details
- `POST /api/schemes/search` - Search schemes

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications/:userId` - Get user applications
- `GET /api/applications/:id/status` - Track application status

### Eligibility
- `POST /api/eligibility/check` - Check eligibility for schemes

### Documents
- `POST /api/documents/upload` - Upload documents
- `GET /api/documents/:id` - Retrieve documents

## 📱 Pages (Planned)

1. **Home Page**: Introduction and quick search
2. **Schemes Directory**: Browsable scheme listing
3. **Scheme Details**: In-depth scheme information
4. **Eligibility Checker**: Interactive tool to check eligibility
5. **My Applications**: Track application status
6. **How to Apply**: Step-by-step guide
7. **Contact & Support**: Help desk
8. **Admin Dashboard**: Manage schemes and applications (future)

## 🌐 Multi-Language Support
- English
- Hindi
- Regional languages (expandable)

## 📝 Next Steps
1. Set up API backend with MongoDB schemas
2. Create React components for frontend
3. Implement authentication
4. Add multi-language support
5. Deploy to production

## 👥 Team
Team Matrix - Build-a-Thon

## 📄 License
MIT License

---

**Last Updated**: March 7, 2026
