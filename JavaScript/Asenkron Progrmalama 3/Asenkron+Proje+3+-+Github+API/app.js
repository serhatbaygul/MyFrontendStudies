class Github {

  constructor() {
      this.url = "https://api.github.com/users/"
  }

  async getGithubData(username) {
      const responseUser = await fetch(this.url + username);
      const responseRepo = await fetch(this.url + username + "/repos");

      const userData = await responseUser.json();
      const repoData = await responseRepo.json();


      return {
          user:userData,
          repo:repoData
      }
  }
}

export default Github();

import github from "./github";

// Select Element
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
  
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Please enter a valid username.");
  } else {
    github.getGithubData(username)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  e.preventDefault();
}

function clearAllSearched() {
  // Arananları Temizleme İşlemleri
}

function getAllSearched() {
  // Tüm Arananları Alma İşlemleri
}