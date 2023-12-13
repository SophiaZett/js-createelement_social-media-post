console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
newPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent ="Das bootcamp is so unfassbar krass schwer für mich!!!";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUser =document.createElement("span");
postUser.classList.add("post__username");
postUser.textContent = "@Linetti";

const postButton =document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";

newPost.append(postText, postFooter);
postFooter.append(postUser, postButton);
document.body.append(newPost);

postButton.addEventListener("click", handleLikeButtonClick);

console.log(newPost);
