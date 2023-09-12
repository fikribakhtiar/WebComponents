import "./article-list.js";
import articles from "./article.js";

//containerElement = document.querySelector(".container");

const articlesItemElement = document.createElement("article-list");
articlesItemElement.articles = articles;

document.body.appendChild(articlesItemElement);