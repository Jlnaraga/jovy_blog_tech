const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", async (e) => {

    e.preventDefault();
    
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data);

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        const res = await response.json();
        const errorBox = document.querySelector(".error-box");
        errorBox.textContent = res.message;
        errorBox.classList.remove("hide");
    }

    if (response.ok)
        window.location.replace("/");

});
