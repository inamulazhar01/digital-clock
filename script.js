// Array of time zones to display
const timeZones = [
    { name: '🗽 New York', timezone: 'America/New_York' },
    { name: '🇬🇧 London', timezone: 'Europe/London' },
    { name: '🗼 Paris', timezone: 'Europe/Paris' },
    { name: '🕌 Dubai', timezone: 'Asia/Dubai' },
    { name: '🗾 Tokyo', timezone: 'Asia/Tokyo' },
    { name: '🇸🇬 Singapore', timezone: 'Asia/Singapore' },
    { name: '🦘 Sydney', timezone: 'Australia/Sydney' },
    { name: '🌴 Hong Kong', timezone: 'Asia/Hong_Kong' },
    { name: '🍁 Toronto', timezone: 'America/Toronto' },
    { name: '🇲🇽 Mexico City', timezone: 'America/Mexico_City' },
    { name: '🌅 Los Angeles', timezone: 'America/Los_Angeles' },
    { name: '🇧🇷 São Paulo', timezone: 'America/Sao_Paulo' }
];

// Function to format time for a specific timezone
function formatTime(timezone) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
    };

    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: timezone
    };

    const dayOptions = {
        weekday: 'long',
        timeZone: timezone
    };

    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    const date = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date());
    const day = new Intl.DateTimeFormat('en-US', dayOptions).format(new Date());

    return { time, date, day };
}

// Function to get UTC offset for a timezone
function getUTCOffset(timezone) {
    const now = new Date();
    const tzString = now.toLocaleString('en-US', { timeZone: timezone });
    const tzDate = new Date(tzString);
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    
    const offset = (tzDate - utcDate) / (1000 * 60 * 60);
    const sign = offset >= 0 ? '+' : '';
    
    return `UTC ${sign}${offset.toFixed(0)}`;
}

// Function to create clock card HTML
function createClockCard(timezone, name) {
    const { time, date, day } = formatTime(timezone);
    const offset = getUTCOffset(timezone);
    
    return `
        <div class="clock-card">
            <div class="timezone-name">${name}</div>
            <div class="timezone-time">${time}</div>
            <div class="timezone-date">${date}</div>
            <div class="timezone-day">${day}</div>
            <div class="timezone-offset">${offset}</div>
        </div>
    `;
}

// Function to update all clocks
function updateClocks() {
    const clocksGrid = document.querySelector('.clocks-grid');
    clocksGrid.innerHTML = timeZones.map(tz => createClockCard(tz.timezone, tz.name)).join('');
}

// Initialize clocks on page load
document.addEventListener('DOMContentLoaded', () => {
    updateClocks();
    // Update clocks every second
    setInterval(updateClocks, 1000);
});