const success_btn = document.querySelector(".btn--success");
const danger_btn = document.querySelector(".btn--danger");
const info_btn = document.querySelector(".btn--info");
const warning_btn = document.querySelector(".btn--warning");
const close_btn = document.querySelector(".toast__close");
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    // auto remove
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);
    // remove onclicked
    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "check",
      warning: "exclamation",
      info: "info",
      error: "xmark",
    };
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideFromRight ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
            <div class="toast__icon">
              <i class="fa-solid fa-circle-${icons[type]}"></i>
            </div>
            <div class="toast__body">
              <h3 class="toast__title">${title}</h3>
              <p class="toast__msg">
                ${message}
              </p>
            </div>
            <div class="toast__close">
              <i class="fas fa-times"></i>
            </div>
          `;

    main.appendChild(toast);
  }
}

const showSuccessToast = () => {
  toast({
    title: "Success",
    message: "Máy vi tính kết nối Internet (Windows, Ubuntu hoặc MacOS)",
    type: "success",
    duration: 5000,
  });
};

const showErrorToast = () => {
  toast({
    title: "Failed",
    message: "Máy vi tính kết nối Internet (Windows, Ubuntu hoặc MacOS)",
    type: "error",
    duration: 5000,
  });
};
const showInfoToast = () => {
  toast({
    title: "Info",
    message: "Máy vi tính kết nối Internet (Windows, Ubuntu hoặc MacOS)",
    type: "info",
    duration: 5000,
  });
};
const showWarningToast = () => {
  toast({
    title: "Warning",
    message: "Máy vi tính kết nối Internet (Windows, Ubuntu hoặc MacOS)",
    type: "warning",
    duration: 5000,
  });
};

success_btn.addEventListener("click", showSuccessToast);
danger_btn.addEventListener("click", showErrorToast);
info_btn.addEventListener("click", showInfoToast);
warning_btn.addEventListener("click", showWarningToast);
