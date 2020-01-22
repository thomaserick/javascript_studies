import api from "./api.js";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");
    this.inputEl = document.querySelector("input[name=repository]");
    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.linkEl === 0) {
      return;
    }

    const response = await api.get(`/repos/${repoInput}`);

    //Desestruturação
    const {
      name,
      description,
      html_url,
      owner: { avatar_url }
    } = response.data;

    console.log(response);

    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url
    });

    this.inputEl.value = "";
    this.render();
  }

  render() {
    this.listEl.innerHTML = "";
    ("");
    //alterar use Map

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEL = document.createElement("p");
      descriptionEL.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listitemEl = document.createElement("li");
      listitemEl.appendChild(imgEl);
      listitemEl.appendChild(titleEl);
      listitemEl.appendChild(descriptionEL);
      listitemEl.appendChild(linkEl);

      this.listEl.appendChild(listitemEl);
    });
  }
}

new App();
