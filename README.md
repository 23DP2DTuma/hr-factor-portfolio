# HR Factor — Portfolio Website

Portfolio website for **HR Factor, SIA** built with **Laravel 11 + Vite + React**.

Practice project at Rīgas Valsts tehnikums, Programming department.

## Tech Stack

- **Backend:** Laravel 11, PHP 8.2+
- **Frontend:** React 18, React Router, Vite
- **Database:** PostgreSQL (via Laragon)
- **Tools:** Git, VS Code, Laragon, Postman

## Setup (Laragon)

### 1. Create Laravel project
```bash
composer create-project laravel/laravel hr-factor-portfolio
cd hr-factor-portfolio
```

### 2. Copy custom files
Copy all files from this repo into the Laravel project (overwrite existing).

### 3. Install React dependencies
```bash
npm install react react-dom react-router-dom @vitejs/plugin-react
```

### 4. Configure database
Edit `.env`:
```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=hr_factor
DB_USERNAME=postgres
DB_PASSWORD=
```

### 5. Create database & run migrations
Create `hr_factor` database in Laragon (HeidiSQL), then:
```bash
php artisan migrate
```

### 6. Run
```bash
npm run dev          # Terminal 1 — Vite
php artisan serve    # Terminal 2 — Laravel
```

Open `http://localhost:8000`

## Project Structure

```
hr-factor-portfolio/
├── app/
│   ├── Http/Controllers/
│   │   └── ContactController.php
│   └── Models/
│       └── Contact.php
├── database/migrations/
│   └── 2026_03_25_create_contacts_table.php
├── resources/
│   ├── js/
│   │   ├── app.jsx            # React entry
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   └── layouts/
│   │       └── App.jsx
│   ├── css/
│   │   └── app.css
│   └── views/
│       └── app.blade.php
├── routes/
│   ├── api.php
│   └── web.php
└── vite.config.js
```

## Author

**Dmitrijs Tumanovs** — DP3-2, RVT
Practice period: 23.03.2026 – 24.04.2026
