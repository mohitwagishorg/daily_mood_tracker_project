export function saveMood(mood) {
  let today = new Date().toLocaleDateString();
  let moods = JSON.parse(localStorage.getItem("moodLogs")) || [];

  let existingEntry = moods.find((entry) => entry.date === today);
  if (existingEntry) {
    existingEntry.mood = mood;
  } else {
    moods.push({ date: today, mood: mood });
  }

  localStorage.setItem("moodLogs", JSON.stringify(moods));
  displayHistory();
  displayCalendar();
}

export function displayHistory() {
  let historyContainer = document.getElementById("history");
  let moods = JSON.parse(localStorage.getItem("moodLogs")) || [];

  historyContainer.innerHTML = "";
  moods.reverse().forEach((entry) => {
    let div = document.createElement("div");
    div.classList.add("entry");
    div.innerHTML = `<strong>${entry.date}</strong>: ${entry.mood}`;
    historyContainer.appendChild(div);
  });
}

export function displayCalendar() {
  let calendarContainer = document.getElementById("calendar");
  let moods = JSON.parse(localStorage.getItem("moodLogs")) || [];
  let daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();

  calendarContainer.innerHTML = "";
  for (let day = 1; day <= daysInMonth; day++) {
    let date = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      day
    ).toLocaleDateString();
    let moodEntry = moods.find((entry) => entry.date === date);
    let mood = moodEntry ? moodEntry.mood : "⬜";

    let div = document.createElement("div");
    div.classList.add("day");
    div.innerHTML = `${day}<br>${mood}`;
    calendarContainer.appendChild(div);
  }
}
