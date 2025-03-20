import {
  saveMood,
  displayHistory,
  displayCalendar,
} from "./utils/functions.js";

document.addEventListener("DOMContentLoaded", function () {
  // Attach event listeners to mood buttons
  document.querySelectorAll(".mood").forEach((moodElement) => {
    moodElement.addEventListener("click", function () {
      let mood = this.getAttribute("data-mood");
      saveMood(mood);
    });
  });

  displayHistory();
  displayCalendar();
});
