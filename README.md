
# EduMeet - Student-Teacher Appointment Booking System

**EduMeet** is a modern, responsive web application designed to bridge the gap between students and teachers through an intuitive appointment scheduling interface. 

---

##  Live Demo
Vercel: [edu-meet-gamma.vercel.app](https://edu-meet-gamma.vercel.app)

---

##  Project Overview
EduMeet provides a centralized platform for educational institutions to manage student-teacher interactions. It simplifies the process of finding educators, checking their availability, and booking sessions, ensuring a seamless experience for both parties.

---

##  Technologies Used
- **Frontend:** 
  - HTML5 (Semantic Structure)
  - CSS3 (Vanilla CSS, Responsive Design)
  - JavaScript (ES6 Modules, Dynamic UI Rendering)
- **Backend & Services:**
  - **Firebase Authentication:** Secure login and role-based access control.
  - **Firebase Firestore:** Real-time NoSQL database for users and appointments.
- **Deployment:**
  - Vercel (Primary Hosting)
  - Firebase Hosting (Alternative)
- **Typography:** Inter (via Google Fonts)

---

##  Features

###  Authentication
- Role-based registration and login system.
- Secure session management using Firebase Auth and local storage.

###  Admin Features
- **Dashboard:** Overview of the entire system.
- **Teacher Management:** Add new teachers and manage existing profiles.
- **Access Control:** Oversee user roles and system integrity.

###  Teacher Features
- **Dashboard:** Real-time view of upcoming and pending appointments.
- **Appointment Management:** Approve or reject student requests with a single click.
- **Availability Scheduling:** Set and manage time slots for student bookings.
- **Profile Settings:** Customize professional details, subjects, and experience.

###  Student Features
- **Teacher Search & Browse:** Find teachers by name, subject, or department.
- **Detailed Profiles:** View teacher bios, expertise, and ratings.
- **Instant Booking:** Choose an available slot and book appointments instantly.
- **Appointment Tracking:** Monitor the status of requests (Pending, Approved, Completed).

---

##  Firebase Usage
- **Real-time Synchronization:** Appointments and profile updates reflect instantly across dashboards.
- **Scalable Database:** Firestore handles the complex relationships between students, teachers, and their schedules.
- **Secure Auth:** Direct integration with Firebase Auth ensures user data protection.

---

##  How to Run Project

### 1. Prerequisites
- A modern web browser.
- A local server environment (optional but recommended for ES6 modules).

### 2. Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/USERNAME/Student-Teacher_Booking-Appointment.git

   ```
2. **Navigate to project directory:**
   ```bash
   cd Student-Teacher_Booking-Appointment
   ```

### 3. Execution
- **Using VS Code Live Server (Recommended):**
  - Open the project in VS Code.
  - Right-click `public/index.html` and select **"Open with Live Server"**.
- **Alternative:**
  - Use any simple static file server (e.g., `npx serve public`).

---

## 📂 Project Structure
```text
/
├── public/
│   ├── assets/          # CSS, JS (utils, data), and Images
│   ├── auth/            # Login and Registration pages
│   ├── roles/           # Dashboard and features for Admin, Teacher, Student
│   └── index.html       # Landing Page
├── firebase.json        # Firebase configuration
└── vercel.json          # Vercel deployment configuration
```

---

&copy; 2026 EduMeet. Built with ❤️ for better education.

