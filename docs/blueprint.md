# **App Name**: AERON

## Core Features:

- Real-time Wind Speed Display (On-site): Display real-time wind speed on a 3.5-inch TFT screen connected to the ESP32, showing current speed in m/s.
- Data Upload to Firebase: Automatically send wind speed data to Firebase Realtime Database for remote access and storage.
- Real-time Data Visualization: Display current wind speed from Firebase on the website, updating in real-time. The update rate should not negatively impact performance.
- Historical Data Analysis: Calculate and display the average, maximum, and minimum wind speeds based on the last hour of data points from Firebase.
- Wind Speed Graph: Generate a dynamic graph visualizing wind speed over time, fetching data from Firebase and updating automatically.
- Unit Conversion: Provide a toggle to convert wind speed units (m/s, mph, km/h) on the website for user preference.
- Theme Toggle: Add a toggle to switch between dark and light modes on the website.

## Style Guidelines:

- Use a dark color scheme with a desaturated blue background (#122C34) to provide a professional, calm, tech-friendly ambiance. 
- Primary color: A bright cyan (#00FFFF) should stand out against the dark background, drawing the user's attention to important info without causing eye strain.
- Accent color: A vibrant purple (#E0B0FF) should add depth and interest, enriching the experience and making it aesthetically engaging.
- Body and headline font: 'Inter', a sans-serif font that offers excellent readability and a modern aesthetic, making the data accessible and visually appealing.
- Use simple, clear icons for unit conversion and theme toggles, ensuring they are intuitive and easy to interact with.
- Implement a responsive design that adapts to different screen sizes, ensuring a consistent user experience across devices.
- Incorporate subtle animations for data updates and graph transitions to provide visual feedback and enhance user engagement.