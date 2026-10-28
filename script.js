/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function searchRepertorios() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const text = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function toggleFavorite(button) {
    const title = button.parentElement.querySelector("h3").textContent;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(title)) {
        favorites = favorites.filter(item => item !== title);
        button.textContent = "☆ Favoritar";
        button.classList.remove("active");
    } else {
        favorites.push(title);
        button.textContent = "★ Favoritado";
        button.classList.add("active");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFavorite(title) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(item => item !== title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
}

function renderFavorites() {
    const favoriteList = document.getElementById("favoriteList");
    if (!favoriteList) return;

    favoriteList.innerHTML = "";
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
        favoriteList.innerHTML = "<li>Nenhum favorito ainda.</li>";
        return;
    }

    favorites.forEach(item => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = item;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.className = "remove-btn";
        removeBtn.onclick = function () {
            removeFavorite(item);
        };

        li.appendChild(span);
        li.appendChild(removeBtn);
        favoriteList.appendChild(li);
    });
}

function setInitialFavButtons() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    document.querySelectorAll(".fav-btn").forEach(button => {
        const title = button.parentElement.querySelector("h3").textContent;
        if (favorites.includes(title)) {
            button.textContent = "★ Favoritado";
            button.classList.add("active");
        }
    });
}

window.onload = function () {
    renderFavorites();
    setInitialFavButtons();
};