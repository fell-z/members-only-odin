const observer = new MutationObserver((_mutationList, _observer) => {
  const closeToastButtons = document.querySelectorAll(".close-toast");

  for (const b of closeToastButtons) {
    b.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }
});

observer.observe(document.getRootNode(), { childList: true, subtree: true });
