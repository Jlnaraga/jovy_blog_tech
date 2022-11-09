const button = document.getElementById("btn-post-create");

button.addEventListener("click", async (e) => {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const obj = {
        title,
        content
    }
    console.log(obj)
    const response = await fetch('/posts/create', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
        window.location.replace("/dashboard");

});
