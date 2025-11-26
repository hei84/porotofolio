# Portfolio Website - Nigusu Wario Hei

A comprehensive full-stack portfolio website showcasing academic background, competitive programming, robotics achievements, cybersecurity training, and technical projects.

## Features

- 🎓 **Academic Background** - Computer Science and Engineering at ASTU
- 💻 **Competitive Programming** - Codeforces & LeetCode expertise
- 🎨 **UI/UX Design** - Design systems, prototypes, and motion graphics
- 🔐 **Cybersecurity** - Cisco Networking Academy training
- 👥 **Tech Communities** - ASTU Cybersecurity Guild leadership and peer mentorship programs
- 📜 **Certifications** - Professional training and courses
- 🏆 **Achievements** - Recognition and milestones
- 🚀 **Future Goals** - Vision and aspirations
- 💼 **Projects** - Full-stack applications and systems
- 📝 **Testimonials** - Feedback from collaborators
- 📧 **Contact Form** - Backend-powered contact system

## Quick Start

### Automatic Startup (Recommended)

**Windows:**
- Double-click `start.bat` (Command Prompt)
- Or run `.\start.ps1` in PowerShell

**Manual Start:**
```bash
# Install all dependencies
npm run install-all

# Start both server and client
npm run dev
```

### Manual Setup

1. **Install dependencies:**
   ```bash
   # Root dependencies
   npm install
   
   # Server dependencies
   cd server
   npm install
   
   # Client dependencies
   cd ../client
   npm install
   ```

2. **Start the backend server:**
   ```bash
   cd server
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

3. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm start
   ```

## Environment Setup

For the contact form to work, create a `.env` file in the `server` directory:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note:** For Gmail, you'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## Project Structure

```
porotfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/          # Content data
│   │   ├── hooks/         # Custom React hooks
│   │   └── services/      # API services
│   └── public/
├── server/                 # Node.js backend
│   ├── data/              # Portfolio data
│   └── index.js           # Express server
└── package.json           # Root package with scripts
```

## Available Scripts

- `npm run dev` - Start both server and client concurrently
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend
- `npm run install-all` - Install all dependencies
- `npm run build` - Build the client for production

## Technologies Used

### Frontend
- React 18
- React Icons
- Axios
- Framer Motion
- AOS (Animate On Scroll)

### Backend
- Node.js
- Express
- Nodemailer
- CORS

## Ports

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## License

MIT

## Author

**Nigusu Wario Hei**
- Computer Science and Engineering Student at ASTU
- Full-Stack Developer
- Competitive Programmer
- UI/UX Designer

