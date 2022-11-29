function createArticle() {
	let titleEl = document.getElementById("createTitle");
	let contentEl = document.getElementById("createContent");
	let title = titleEl.value;
	let content = contentEl.value;

	let articles = document.getElementById("articles");

	let article = document.createElement("article");
	articles.appendChild(article);

	let h3Title = document.createElement("h3");
	article.appendChild(h3Title);
	h3Title.textContent = title;
	let par = document.createElement("p");
	par.textContent = content;
	article.appendChild(par);
	
	titleEl.value = "";
	contentEl.value = ""
}