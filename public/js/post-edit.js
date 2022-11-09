const btnUpdate = document.getElementById("btn-post-update");
const btnDelete = document.getElementById("btn-post-delete");

btnUpdate.addEventListener("click", async (e) => {

    e.preventDefault();

    const id = document.getElementById("postId").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const obj = {
        id,
        title,
        content
    }

    const response = await fetch(`/posts/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
        window.location.replace("/dashboard");

});

btnDelete.addEventListener("click", async (e) => {

    e.preventDefault();

    const id = document.getElementById("postId").value;

    const response = await fetch(`/posts/delete/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 404)
        window.location.replace("/dashboard");

});

