SkillNova – AI-Powered Internship & Career Growth Platform

SkillNova is a full-stack AI-powered internship and career development platform that helps students become industry-ready. Instead of simply applying for internships, students receive AI-driven resume analysis, skill gap detection, personalized learning roadmaps, and internship recommendations tailored to their profiles.

🚀 Tech Stack
Layer Technology
Frontend React 19, Vite, Tailwind CSS, React Router, TanStack Query, Axios, React Hook Form
Backend Node.js, Express.js, Prisma ORM, JWT, Bcrypt, Multer
Database PostgreSQL
AI Integration Google Gemini API
Authentication JWT + Role-Based Access Control (RBAC)
File Storage Local Uploads (Development) / Cloudinary (Production)
Deployment Vercel (Frontend), Render/Railway (Backend), Neon PostgreSQL
📋 Features
👨‍🎓 Student
User Registration & Login
Student Profile Management
Resume Builder
Resume PDF Upload
AI Resume Analysis
ATS Resume Score
Skill Gap Detection
Personalized Career Roadmap
Internship Recommendations
Internship Search & Filtering
Apply for Internships
Track Application Status
Dashboard Analytics
Bookmark Internships
🏢 Employer
Employer Registration
Company Profile Management
Post Internship
Edit Internship
Delete Internship
View Applicants
Shortlist Candidates
Accept / Reject Applications
Employer Dashboard
👨‍💼 Admin
Manage Students
Manage Employers
Manage Internships
Platform Analytics
Dashboard Reports
Remove Users
Audit Logs
🤖 AI Features
Resume Analysis
Resume Score
ATS Compatibility Check
Skill Gap Detection
Career Roadmap Generation
Internship Recommendation Engine
Learning Resource Suggestions
🛠️ Prerequisites

Before running the project, ensure you have:

Node.js >= 20
PostgreSQL >= 16
npm
Git
Google Gemini API Key
🚀 Getting Started

1. Clone the Repository
   git clone https://github.com/your-username/skillnova.git

cd skillnova 2. Install Dependencies
Backend
cd backend
npm install
Frontend
cd ../frontend
npm install 3. Configure Environment Variables

Create a .env file inside the backend folder.

PORT=5000

DATABASE_URL="postgresql://postgres:password@localhost:5432/skillnova"

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

GEMINI_API_KEY=your_gemini_api_key

UPLOAD_PATH=uploads

EMAIL_USER=your_email

EMAIL_PASS=your_email_password 4. Generate Prisma Client
npx prisma generate 5. Run Database Migrations
npx prisma migrate dev 6. Seed Sample Data (Optional)
npm run seed 7. Start Backend
npm run dev

Backend will run on:

http://localhost:5001 8. Start Frontend
cd frontend

npm run dev

Frontend will run on:

http://localhost:5173
📂 Project Structure
skillnova/
│
├── backend/
│
│ ├── prisma/
│ │ ├── schema.prisma
│ │ ├── migrations/
│ │ └── seed.js
│ │
│ ├── src/
│ │
│ │ ├── config/
│ │ ├── middleware/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── validators/
│ │ ├── utils/
│ │ ├── app.js
│ │ └── server.js
│ │
│ ├── uploads/
│ ├── .env
│ └── package.json
│
├── frontend/
│
│ ├── public/
│ │
│ ├── src/
│ │
│ │ ├── api/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── context/
│ │ ├── features/
│ │ ├── hooks/
│ │ ├── layouts/
│ │ ├── pages/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── utils/
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ └── package.json
│
├── README.md
└── .gitignore
🗄️ Database Modules
Authentication
Users
Student Profiles
Employer Profiles
Resume (CV)
AI Analysis
Career Roadmap
Internships
Applications
Admin
🔑 API Modules
Authentication
POST /api/auth/register

POST /api/auth/login

POST /api/auth/forgot-password

POST /api/auth/reset-password

GET /api/auth/me
Student Profile
GET /api/profile

PUT /api/profile

DELETE /api/profile
Resume
POST /api/cv

GET /api/cv

GET /api/cv/:id

PUT /api/cv/:id

DELETE /api/cv/:id
AI Analysis
POST /api/analysis/resume

POST /api/analysis/skills
Internships
GET /api/internships

GET /api/internships/:id

POST /api/internships

PUT /api/internships/:id

DELETE /api/internships/:id
Applications
POST /api/applications

GET /api/applications

PATCH /api/applications/:id/status
Career Roadmap
GET /api/roadmap

POST /api/roadmap/generate

PUT /api/roadmap/progress
Employer
GET /api/employer/dashboard

GET /api/employer/internships

GET /api/employer/applicants
Admin
GET /api/admin/dashboard

GET /api/admin/users

GET /api/admin/employers

GET /api/admin/internships

DELETE /api/admin/user/:id

DELETE /api/admin/employer/:id
🔐 Authentication

SkillNova uses JWT (JSON Web Tokens) for secure authentication.

Role-Based Access Control (RBAC) supports:

Student
Employer
Admin

Protected routes require a valid JWT access token.

📜 Available Scripts
Backend
Command Description
npm run dev Start development server
npm start Start production server
npm run seed Seed sample data
npx prisma migrate dev Run database migrations
npx prisma studio Open Prisma Studio
Frontend
Command Description
npm run dev Start Vite development server
npm run build Build production bundle
npm run preview Preview production build
npm run lint Run ESLint
🌟 Future Improvements
Resume PDF Parsing
AI Mock Interview
AI Cover Letter Generator
Email Notifications
Cloud File Storage
Internship Bookmarking
Advanced Search & Filters
Real-Time Notifications
Dashboard Charts & Analytics
Interview Scheduling
Company Reviews
Learning Resource Recommendations
👨‍💻 Authors

Developed as a Final Year BE Computer Engineering Project.

Team Members

Neha Pandit
Nikhil Mandal
Nisha Yadav
Rahul Paswan
