const form = document.getElementById("form-signup");

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data);
    
    const response = await fetch('/auth/signup', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
        window.location.replace("/auth/login");

});

