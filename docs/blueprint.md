# **App Name**: MakolaTrack

## Core Features:

- User Authentication: Secure user authentication with Firebase, supporting roles: Farmer, Trader, Transporter, Admin.
- Dashboard Summary: Display summary cards for total produce, produce in transit, and produce delivered.
- Produce Registration: Enable farmers to register produce with details like name, category, quantity, farm location, and harvest date, stored in Firestore.
- Real-time Tracking Updates: Users can update produce status (Harvested, In Transit, At Market, Sold) and track movement history with timestamps.
- Market View: Display a list of produce currently available at Makola Market, filterable by type and status.
- Admin Management Console: Admin users can view and manage all users and produce records, with basic system monitoring.
- Report Generation: Generate and export reports on produce by category and status in a printable/PDF-ready format.

## Style Guidelines:

- Primary color: Vibrant Green (#5CB85C) to represent freshness and agriculture.
- Background color: Light Green (#F0FAF0) to create a clean and academic layout.
- Accent color: Brown (#A0522D) for highlighting and earthy tones, aligning with agricultural context.
- Body and headline font: 'PT Sans', a humanist sans-serif that combines a modern look with approachability; suitable for both headlines and body text.
- Use simple, clear icons from a standard library to represent produce categories, status, and actions.
- Maintain a clean, academic layout with a simple navigation menu on all pages for easy access and clarity.
- Implement subtle animations to show loading states and updates to data to keep the application flowing smoothly.