window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("urlInput");
  const button = document.getElementById("openBtn");
  const historyList = document.getElementById("historyList");

  function openURL() {
    let url = input.value.trim();

    if (!url) {
      alert("Please enter a URL.");
      return;
    }

    // Add https:// if missing
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    // Open the URL in a new tab
    window.open(url, "_blank");

    // Create and add the link to the history list
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    a.target = "_blank";
    li.appendChild(a);
    historyList.prepend(li); // add to top
  }

  // Button click handler
  button.addEventListener("click", openURL);

  // Enter key handler
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      openURL();
    }
  });
});
