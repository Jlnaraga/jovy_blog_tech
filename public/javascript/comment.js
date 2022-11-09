const commentInput = document.getElementById("comment");
const buttonCancel = document.getElementById("btn-cancel");
const buttonComment = document.getElementById("btn-comment");

const postComment = async () => {
    
    const postId = document.getElementById("postId").value;
    const comment = document.getElementById("comment").value;

    const obj = {
        postId,
        comment
    }
    console.log(obj)
    const response = await fetch('/posts/comment', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok)
        window.location.reload();

}

buttonComment.addEventListener('click', postComment);

commentInput.addEventListener("keyup", async (event) => {
    event.preventDefault();
    if (event.key === 13) {
        postComment();
    }
});

buttonCancel.addEventListener('click', () => {
    commentInput.value = '';
});