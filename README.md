# MakolaTrack - Farm Produce Tracking System

## System Overview

MakolaTrack is a web-based system developed as an academic project for the "Development of a Farm Produce Tracking System in the Agricultural Value Chain: A Case Study of Makola Market, Accra". It aims to improve transparency and traceability of farm produce from the farm to the market.

This system is built with Next.js, Tailwind CSS, and ShadCN UI for the frontend, and is designed to integrate with Firebase for backend services like authentication and database.

### Core Features
- **User Authentication**: Secure user registration and login for different roles.
- **Role-Based Access**: Different dashboards and permissions for Farmers, Traders, Transporters, and Admins.
- **Produce Registration**: Farmers can register new produce with details like name, category, quantity, and harvest date.
- **Real-time Tracking**: The status of produce (e.g., Harvested, In Transit, At Market) can be updated and tracked.
- **Market View**: A public, read-only view of produce currently available at the market.
- **Admin Dashboard**: Admins can manage users and view all produce records.
- **Reporting**: Generate and print simple reports on produce data.

## User Roles

The system is designed for the following user roles:

- **Farmer**: Can register produce and update its status until it's handed over to a transporter.
- **Trader**: Can view produce at the market and mark it as "Sold".
- **Transporter**: Can update the status of produce to "In Transit" and "Delivered to Market".
- **Admin**: Has full oversight of the system, including user management and viewing all produce records.
- **Consumer**: Can view the public "Market View" page to see available produce.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/makola-track.git
    cd makola-track
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    This project is configured to use Firebase for backend services. You will need to create your own Firebase project.
    
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - In your project, go to **Project Settings** > **General**.
    - Under "Your apps", click the web icon (`</>`) to add a new web app.
    - Copy the `firebaseConfig` object provided.
    - Create a new file in the root of the project named `.env.local`.
    - Add the Firebase configuration keys to your `.env.local` file. It should look like this:

      ```
      NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
      NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
      NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
      ```
    - In the Firebase Console, enable the following services:
      - **Authentication**: Go to the **Authentication** section, click "Get started", and enable the **Email/Password** sign-in method.
      - **Firestore Database**: Go to the **Firestore Database** section, click "Create database", and start in **test mode** for development. You can configure security rules for production later.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## How Firebase is Used

- **Firebase Authentication**: Manages user sign-up and login securely with email and password. It also handles user sessions.
- **Firestore**: A NoSQL database used to store all application data, including:
  - `/users`: Stores user profile information, including their role.
  - `/produce`: Stores all details about each batch of farm produce, including its tracking history.
- **Firebase Hosting**: While the backend services run on Firebase, the Next.js frontend is best deployed to a platform like Vercel or Netlify.

## Deployment

This is a Next.js application and should be deployed to a hosting provider that supports Node.js environments.

### Recommended: Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- Push your code to a Git repository (e.g., GitHub).
- Sign up for a Vercel account and connect your Git repository.
- Vercel will automatically detect that it is a Next.js app, build it, and deploy it.
- **Important**: Remember to add your Firebase environment variables from your `.env.local` file to the Vercel project settings.

### Note on GitHub Pages

The initial request mentioned deploying the frontend to GitHub Pages. While possible for simple static sites, GitHub Pages does not support the server-side features of Next.js (like Server Components, API routes, or server-side rendering). Therefore, a platform like **Vercel** or **Netlify** is strongly recommended for this project.
