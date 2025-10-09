# MERN Stack Blog App

A modern, full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring dark mode, animated carousels, interactive UI, and AI features.

## Quick Start

### Option 1: Using Docker (Recommended)

This application is fully containerized for easy setup:

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) on your system
2. Clone this repository
3. Navigate to the project root directory
4. Run the following command:
   ```
   docker compose up --build
   ```

### Option 2: Manual Setup

If you prefer to run the application without Docker:

1. Clone this repository
2. Install dependencies for both frontend and backend:

   ```
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Start both services in separate terminals:

   ```
   # Terminal 1 - Start backend server
   cd backend
   npm run dev

   # Terminal 2 - Start frontend development server
   cd frontend
   npm run dev
   ```

## Overview

The blog application features a modern, responsive design with multiple key features:

### Key Features

- **Dark Mode Support**: Toggle between light and dark themes for comfortable reading in any environment
- **Interactive UI**: Smooth transitions, animations, and user-friendly interface
- **Auto-scrolling Carousels**: Dynamic content display with mouse interaction controls
- **API Integration**: Fetches and displays tech news from external sources
- **Mobile Responsive**: Fully optimized for all screen sizes
- **MERN Stack**: Built on MongoDB, Express.js, React, and Node.js

## Screenshots

### Home Page with Dark Mode

<img width="1911" height="1085" alt="Home Page with Dark Mode" src="https://github.com/user-attachments/assets/87dcfe41-56cd-461f-a755-00ac61062a55" />

### Blog Posts Grid

<img width="1925" height="1085" alt="Blog Posts Grid" src="https://github.com/user-attachments/assets/52161e1f-90fe-407a-a8ca-16b3dae39d6a" />

### Interactive BentoGrid Component

<img width="1925" height="1085" alt="Interactive BentoGrid Component" src="https://github.com/user-attachments/assets/e5c4ac0e-5195-49a8-a81b-ff989b0f16e2" />

### Mobile Responsive View

<img width="963" height="545" alt="Mobile Responsive View" src="https://github.com/user-attachments/assets/b3071fad-c6eb-4ae7-9c90-f12b09e7eff8" />

### User Profile Page

<img width="1921" height="1083" alt="User Profile Page" src="https://github.com/user-attachments/assets/adf086ae-4aa9-44be-bae0-774ad93a7468" />

## Technical Architecture

The application follows a modern architecture pattern with AI-enhanced features:

<img width="8215" height="4202" alt="Technical Architecture Diagram" src="https://github.com/user-attachments/assets/c1029c2c-b9c9-4e09-95de-6441d80a112a" />

### Frontend Architecture

![Frontend Component Structure](https://github.com/user-attachments/assets/3c1988a4-48dc-410d-b6b0-1691db3f73a5)

## Documentation

For more detailed documentation and specifications, please refer to our [project documentation](https://docs.google.com/document/d/13cDbENSxKmd2TAd2vwDIMy-Vy42TQV4wGGkwWpOVGiY/edit?tab=t.0).

## Technologies Used

### Frontend

- React with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- Context API for state management

### Backend

- Node.js with Express
- MongoDB for database
- RESTful API architecture
- Clerk for authentication

### DevOps

-Docker

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
