const grid = document.getElementById("contentGrid") as HTMLElement;

const games = ["TEMP (may be changed later)", "TEMP (may be changed later)", "TEMP (may be changed later)"];
const sounds = ["TEMP (may be changed later)", "TEMP (may be changed later)", "TEMP (may be changed later)"];

function loadPreviews(list: string[]) {
  grid.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "preview";
    div.textContent = item;

    div.onclick = () => {
      alert("Opening: " + item);
    };

    grid.appendChild(div);
  });
}

document.getElementById("gamesBtn")!.onclick = () => loadPreviews(games);
document.getElementById("soundsBtn")!.onclick = () => loadPreviews(sounds);
document.getElementById("studioBtn")!.onclick = () => {
  alert("Welcome to Lakeland Studio!");
};

// Load games by default
loadPreviews(games);
