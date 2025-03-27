# Mindbody Widgets for Squarespace

This project provides embeddable widgets for Mindbody integration with Squarespace, including class scheduling and retail purchasing capabilities.

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Mindbody API credentials:
   ```
   VITE_MINDBODY_API_KEY=your_api_key_here
   VITE_MINDBODY_SITE_ID=your_site_id_here
   VITE_MINDBODY_API_URL=https://api.mindbodyonline.com/public/v6
   ```
4. Build the project:
   ```bash
   npm run build
   ```

## Available Widgets

### Scheduling Widget
The scheduling widget allows users to:
- View available classes and appointments
- Book classes and appointments
- Purchase class packages
- View their schedule

### Retail Widgets
The retail widgets enable users to:
- Browse and purchase retail items
- Purchase gift cards

There are two separate retail widgets:
1. Products Widget: For browsing and purchasing retail items
2. Gift Cards Widget: Specifically for purchasing gift cards

## Embedding in Squarespace

1. After building the project, the widgets will be available in the `dist` directory
2. Add the following script to your Squarespace site's header:
   ```html
   <script src="path-to-your-widgets.js"></script>
   ```
3. Add the widget containers where you want them to appear:
   ```html
   <!-- For the scheduling widget -->
   <div id="mindbody-scheduler"></div>
   
   <!-- For the products widget -->
   <div id="mindbody-retail"></div>
   
   <!-- For the gift cards widget -->
   <div id="mindbody-giftcards"></div>
   ```

## Development

To start the development server:
```bash
npm run dev
```

## Security Notes

- Never commit your `.env` file to version control
- Keep your Mindbody API credentials secure
- Use appropriate CORS settings when deploying the widgets

## License

MIT License 