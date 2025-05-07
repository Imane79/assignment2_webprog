// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("openBtn");

  button.addEventListener("click", function () {
    let url = document.getElementById("urlInput").value.trim();

    if (!url) {
      alert("Please enter a URL.");
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    window.open(url, "_blank");
  });
});
