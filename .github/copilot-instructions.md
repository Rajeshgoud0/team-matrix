# JanYojana Portal - Development Guidelines

## Project Overview
JanYojana Portal is a full-stack MERN web application designed to help rural citizens access government scheme information, check eligibility, and track applications.

## Key Features & Structure
- **Frontend (React)**: Scheme directory, eligibility checker, application tracker, document upload
- **Backend (Express.js)**: RESTful APIs for schemes, applications, eligibility, documents
- **Database (MongoDB)**: User data, schemes, applications, documents
- **Multi-Language**: Support for English and Hindi using i18next

## Development Workflow

### File Organization
- `client/` - React frontend application
  - `src/components/` - Reusable UI components
  - `src/pages/` - Page-level components
  - `src/services/` - API service calls
  - `src/i18n/` - Language files

- `server/` - Node.js backend
  - `models/` - Mongoose schemas
  - `routes/` - API route definitions
  - `controllers/` - Business logic handlers
  - `middleware/` - Authentication, validation

### Key Dependencies

**Frontend**:
- react, react-dom
- react-router-dom (routing)
- axios (API calls)
- redux, @reduxjs/toolkit (state management)
- tailwindcss (styling)
- i18next (internationalization)

**Backend**:
- express (web framework)
- mongoose (MongoDB ODM)
- jsonwebtoken (authentication)
- multer (file uploads)
- dotenv (environment variables)
- bcryptjs (password hashing)

### Coding Standards
1. Use ES6+ features consistently
2. Component naming: PascalCase for components, camelCase for variables/functions
3. Use functional components and React Hooks
4. Follow RESTful API conventions
5. Add meaningful comments for complex logic
6. Error handling: Always include try-catch in async operations

### Common Commands
- `npm install` - Install dependencies
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests (when configured)

## Important Notes
- This is a build-a-thon project with a tight timeline
- Focus on core features first: scheme search, eligibility check, basic application tracking
- Multi-language support should be implemented after core features
- Use placeholder data initially, integrate real schemes/data later
- Deployment considerations: Use free tiers (Vercel for frontend, Render/Heroku for backend, MongoDB Atlas)

## Troubleshooting
- **Port conflicts**: Ensure both frontend (3000) and backend (5000) ports are available
- **MongoDB connection**: Verify MONGO_URI in .env file
- **CORS issues**: Configure CORS in Express properly
- **Module not found**: Run `npm install` in both client and server directories

---
*Maintained for Build-a-Thon: JanYojana Portal*
