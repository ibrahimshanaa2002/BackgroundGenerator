function getRandomBasicColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradientColor() {
  const letters = "0123456789ABCDEF";
  let startColor = "#";
  let endColor = "#";

  for (let i = 0; i < 6; i++) {
    startColor += letters[Math.floor(Math.random() * 16)];
    endColor += letters[Math.floor(Math.random() * 16)];
  }

  return `linear-gradient(to bottom, ${startColor}, ${endColor})`;
}

const boxes = document.querySelectorAll(".box");
const colorCodes = document.querySelectorAll('[id^="color-code"]');
const generateButton = document.getElementById("generate-button");
const colorTypeSelect = document.getElementById("color-type");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notification-text");

generateButton.addEventListener("click", () => {
  generateColors();
});

document.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Spacebar") {
    event.preventDefault();
    generateColors();
  }
});

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    copyToClipboard(colorCodes[index].textContent);
    showNotification("Color code copied!");
  });
});

function generateColors() {
  const selectedColorType = colorTypeSelect.value;
  boxes.forEach((box, index) => {
    let color;
    if (selectedColorType === "basic") {
      color = getRandomBasicColor();
    } else if (selectedColorType === "gradient") {
      color = getRandomGradientColor();
    }
    box.style.background = color;
    colorCodes[index].textContent = color;
  });
}

function getRandomBasicColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradientColor() {
  const letters = "0123456789ABCDEF";
  let startColor = "#";
  let endColor = "#";

  for (let i = 0; i < 6; i++) {
    startColor += letters[Math.floor(Math.random() * 16)];
    endColor += letters[Math.floor(Math.random() * 16)];
  }

  return `linear-gradient(to bottom, ${startColor}, ${endColor})`;
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function showNotification(message) {
  notificationText.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}
