# 🏨 HotelHub API

A RESTful Hotel Management API built with **Node.js, Express, and MongoDB** for managing staff records and menu items. Features JWT authentication, bcrypt password hashing, role-based staff filtering, and a custom request logger.

---

## 🚀 Features

- 🔐 **JWT Authentication** — Secure token-based auth with expiry
- 🔒 **Bcrypt Password Hashing** — Automatic hashing via Mongoose `pre('save')` hook
- 👨‍🍳 **Staff Management** — Full CRUD operations for hotel staff
- 🍽️ **Menu Management** — Add and filter menu items by taste
- 👔 **Role-Based Staff Filtering** — Filter staff by chef, waiter, or manager
- 📋 **Request Logger** — Custom middleware logging every incoming request with timestamp

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB + Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| Password Hashing | bcrypt |
| Environment Config | dotenv |

---

## 📁 Project Structure

```
hotel-management-api/
├── models/
│   ├── person.js         # Staff schema (role, bcrypt hooks)
│   └── MenuItem.js       # Menu item schema (taste, ingredients)
├── routes/
│   ├── personRoutes.js   # Staff auth & management routes
│   └── menuRoutes.js     # Menu routes
├── jwt.js                # JWT middleware & token generator
├── db.js                 # MongoDB connection
├── server.js             # Entry point
└── .env                  # Environment variables
```

---

## 📡 API Endpoints

### 🔐 Staff Authentication
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/person/signup` | None | Register new staff member |
| POST | `/person/login` | None | Login with username + password |

### 👤 Staff Management
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/person/profile` | JWT | Get logged-in staff profile |
| GET | `/person/` | JWT | Get all staff members |
| GET | `/person/:workType` | None | Filter staff by role (chef/waiter/manager) |
| PUT | `/person/:id` | JWT | Update staff details |
| DELETE | `/person/:id` | JWT | Delete staff member |

### 🍽️ Menu Management
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/menu/` | None | Add new menu item |
| GET | `/menu/` | None | Get all menu items |
| GET | `/menu/:tasteType` | None | Filter by taste (sweet/spicy/sour) |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hotel-management-api.git
cd hotel-management-api

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_local=mongodb://localhost:27017/hoteldb
JWT_SECRET=your_jwt_secret_key
```

### Run the App

```bash
# Development
npx nodemon server.js

# Production
npm start
```

---

## 🔒 Security Highlights

- Passwords hashed automatically via Mongoose `pre('save')` hook
- `isModified('password')` check prevents unnecessary re-hashing
- JWT secrets stored in environment variables
- Protected routes require valid JWT token
- `comparePassword()` instance method for clean password verification

---

## 📝 Request Logger

Every incoming request is logged with a timestamp and endpoint:

```
5/21/2026, 10:30:00 AM Request Made to : /person/login
```
