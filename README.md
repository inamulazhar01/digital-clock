# Digital Clock - Multiple Time Zones

A beautiful, responsive digital clock application that displays the current time across 12 different time zones around the world.

## Features

✨ **Key Features:**
- **Real-time Clock Updates**: Updates every second
- **12 Major Time Zones**: New York, London, Tokyo, Dubai, Sydney, Singapore, Paris, Los Angeles, Hong Kong, Toronto, Mexico City, and São Paulo
- **Beautiful UI**: Modern gradient background with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Detailed Information**: Shows time, date, day of the week, and UTC offset for each timezone
- **Smooth Animations**: Hover effects and transitions for better user experience

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Gradients, and Animations
- **Vanilla JavaScript**: No dependencies, using Intl API for timezone handling

## Project Structure

```
digital-clock/
├── index.html      # Main HTML file
├── styles.css      # Styling and responsive design
├── script.js       # Clock logic and timezone handling
└── README.md       # This file
```

## How to Use

1. Clone the repository or download the files
2. Open `index.html` in your web browser
3. The clocks will automatically start displaying current times in each timezone
4. Times update every second automatically

## Live Demo

View the live demo here: [https://github.com/inamulazhar01/digital-clock](https://github.com/inamulazhar01/digital-clock)

## Customization

### Add More Time Zones

Edit the `timeZones` array in `script.js`:

```javascript
const timeZones = [
    { name: 'City Name', timezone: 'Continent/City' },
    // Add more...
];
```

List of valid IANA timezone identifiers: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

### Change Colors

Modify the CSS variables and gradient colors in `styles.css`:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.timezone-name {
    color: #667eea;
}
```

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE 11: ⚠️ Limited support (no Intl.DateTimeFormat)

## API Used

- **Intl.DateTimeFormat**: Browser's internationalization API for accurate timezone handling
- **No external dependencies**: Pure JavaScript implementation

## License

Free to use and modify for personal or commercial projects.

## Author

Created with ❤️ by inamulazhar01

---

**Enjoy tracking time across the world! ⏰🌍**