# Student-Teacher Booking Appointment System

A comprehensive web-based platform facilitating seamless appointment scheduling between students and teachers. Built with vanilla HTML, CSS, JavaScript, and powered by Firebase.

##  Features

### Student Panel
- **Dashboard**: View upcoming sessions and quick actions.
- **Search Teachers**: Browse teachers by name or subject.
- **Book Appointments**: Schedule sessions with available teachers.
- **Appointment History**: View past and upcoming appointments with filtering and sorting.
- **Join Classes**: Direct access to virtual meeting links for approved sessions.

###  Teacher Panel
- **Dashboard**: Overview of upcoming classes and pending requests.
- **Manage Requests**: Approve or decline appointment requests from students.
- **Schedule Management**: Create custom appointments manually.
- **Appointment History**: Track all sessions with status filters.
- **Profile Settings**: Update biography, subjects, and availability.

### Admin Panel
- **User Management**: Manage student and teacher accounts.
- **System Overview**: Monitor platform activity.

##  Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend & Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting (or any static host)

##  Project Structure

```
/
├── assets/             # Shared resources
│   ├── css/            # Global styles (style.css)
│   ├── js/             # Shared logic (utils.js, data.js)
│   └── img/            # Images and icons
├── auth/               # Authentication pages
│   ├── login.html
│   └── register.html
├── index.html          # Landing page (moved to root)
├── public/             # Public pages
│   ├── about.html
│   ├── contact.html
├── roles/              # Role-specific portals
│   ├── student/        # Student pages
│   ├── teacher/        # Teacher pages
│   └── admin/          # Admin pages
└── README.md
```

##  Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Open the project**
   - You can simply open `index.html` in your browser.
   - For a better experience, use a local server like Live Server in VS Code.

3. **Firebase Configuration**
   - The project is pre-configured with a Firebase project.
   - To use your own Firebase:
     1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
     2. Enable **Authentication** (Email/Password).
     3. Enable **Firestore Database**.
     4. Update `assets/js/utils.js` with your new `firebaseConfig` object.

## Usage

1. **Sign Up**: Create an account as a "Student" or "Teacher".
2. **Login**: Access your respective dashboard.
3. **Book**: Students can find teachers and request times.
4. **Approve**: Teachers receive requests and can approve them by adding a meeting link.
5. **Connect**: Both parties see the "Join Meeting" link at the scheduled time.

##  License

This project is open-source and available for educational purposes.
