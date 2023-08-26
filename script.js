const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".weather-container");
const grantLocationAccess = document.querySelector(".grant-location-container");

const SearchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-screen-container");

const userInfoContainer = document.querySelector(".user-info-container");

// initially variables

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
let oldTab = userTab;
oldTab.classList.add('current-tab');




userTab.addEventListener("click", () => {
    switchTab(userTab);
})

searchTab.addEventListener("click", () => {
    switchTab(searchTab); 
})

function switchTab(newTab) {
    if (newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");
        
        if (!SearchForm.classList.contains(".active")) {
            userInfoContainer.classList.remove(".active");
            grantLocationAccess.classList.remove(".active");
            SearchForm.classList.add(".active");
        }
        else {
            SearchForm.classList.remove(".active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}
