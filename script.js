// Dummy data for demo
const recommendedEvents = [
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    name: "Friday Night Live",
    info: "Mumbai • 23 Mar 2024"
  },
  {
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    name: "Shakespeare Drama",
    info: "Bengaluru • 25 Mar 2024"
  },
  {
    img: "https://images.unsplash.com/photo-1515169273894-482ff870cc4e?auto=format&fit=crop&w=400&q=80",
    name: "Laugh Riot Standup",
    info: "Delhi • 27 Mar 2024"
  }
];

const upcomingEvents = [
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    name: "Photography Workshop",
    info: "Hyderabad • 30 Mar 2024"
  },
  {
    img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=400&q=80",
    name: "Spring City Marathon",
    info: "Chennai • 2 Apr 2024"
  }
];

// Render cards
function renderEvents(events, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  events.forEach(ev => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
      <img src="${ev.img}" alt="${ev.name}">
      <div class="event-details">
        <div class="event-title">${ev.name}</div>
        <div class="event-info">${ev.info}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Init
renderEvents(recommendedEvents, "rec-list");
renderEvents(upcomingEvents, "up-list");
