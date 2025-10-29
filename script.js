// URLs for event APIs - fill as per your assignment/API docs
const RECOMMENDED_API = 'https://gg-backend-assignment.azurewebsites.net/api/events?code=FOX6...typereco';
const UPCOMING_API = 'https://gg-backend-assignment.azurewebsites.net/api/events?code=FOX6...page=1&type=upcoming';

// DOM elements
const recommendedContainer = document.getElementById('recommended-events');
const upcomingContainer = document.getElementById('upcoming-events');
const loadingSpinner = document.getElementById('loading-spinner');

// --- Fetch Recommended Events ---
fetch(RECOMMENDED_API)
  .then(res => res.json())
  .then(data => {
    recommendedContainer.innerHTML = '';
    data.events.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
        <img src="${ev.imgUrl}" alt="${ev.eventName}" />
        <div class="event-info">
          <div class="event-name">${ev.eventName}</div>
          <div class="event-meta">${ev.cityName}, ${new Date(ev.date).toLocaleDateString()} | ${ev.weather}</div>
          <div>${ev.distanceKm.toFixed(1)} km away</div>
        </div>
      `;
      recommendedContainer.appendChild(card);
    });
  });

// --- Upcoming Events with Lazy Loading ---
let currentPage = 1, loading = false;
function loadUpcomingEvents() {
  loading = true;
  loadingSpinner.style.display = 'block';
  fetch(UPCOMING_API.replace('page=1', `page=${currentPage}`))
    .then(res => res.json())
    .then(data => {
      data.events.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
          <img src="${ev.imgUrl}" alt="${ev.eventName}" />
          <div class="event-info">
            <div class="event-name">${ev.eventName}</div>
            <div class="event-meta">${ev.cityName}, ${new Date(ev.date).toLocaleDateString()} | ${ev.weather}</div>
            <div>${ev.distanceKm.toFixed(1)} km away</div>
          </div>
        `;
        upcomingContainer.appendChild(card);
      });
      loading = false;
      loadingSpinner.style.display = 'none';
      if (data.hasMore) currentPage++;
    });
}

// Lazy loading on scroll
window.addEventListener('scroll', () => {
  if (!loading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    loadUpcomingEvents();
  }
});
// Initial load
loadUpcomingEvents();

// --- Authentication Modal Example ---
function showLoginForm() {
  document.getElementById('auth-modal').style.display = 'flex';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('signup-form').style.display = 'none';
}
function closeAuthModal() {
  document.getElementById('auth-modal').style.display = 'none';
}

