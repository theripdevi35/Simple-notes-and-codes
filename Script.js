document.addEventListener("DOMContentLoaded", () => {
  const savedNote = localStorage.getItem("noteContent");
  if (savedNote) {
    document.getElementById("noteArea").value = savedNote;
  }
});

function toggleMode() {
  const textarea = document.getElementById("noteArea");
  textarea.classList.toggle("codeMode");
}

function saveNote() {
  const noteContent = document.getElementById("noteArea").value;
  localStorage.setItem("noteContent", noteContent);
}

function exportNote() {
  const noteContent = document.getElementById("noteArea").value;
  const blob = new Blob([noteContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "note.txt";
  link.click();
}