const API_ENDPOINT = "https://api-proxy.potatosoup.workers.dev"
// source: https://uibakery.io/regex-library/ip-address
const IP_REGEX = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
// source: https://uibakery.io/regex-library/url
const URL_REGEX = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

const map = L.map('map', { zoomControl: false }).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const displayOutput = (data) => {
    const ipOutput = document.getElementById("ipOutput");
    const locationOutput = document.getElementById("locationOutput");
    const timezoneOutput = document.getElementById("timezoneOutput");
    const ispOutput = document.getElementById("ispOutput");

    ipOutput.textContent = data["ip"];
    locationOutput.textContent = `${data["location"]["city"]}, ${data["location"]["region"]} ${data["location"]["postalCode"]}`;
    timezoneOutput.textContent = "UTC " + data["location"]["timezone"];
    ispOutput.textContent = data["isp"];

    const lat = data["location"]["lat"];
    const lng = data["location"]["lng"];
    // set iconAnchor to align the bottom tip of the location icon (center width, full height) with the coordinates 
    // makes sure icon remains aligned with the location when changing zoom
    const marker = L.marker([lat, lng], { icon: L.icon({ iconUrl: "./images/icon-location.svg", iconAnchor: [23,56] }) }).addTo(map);
    map.flyTo(marker.getLatLng(), 12, { duration: 1.5 });
}

const getData = (ipAddress, domain) => {
    const params = new URLSearchParams();
    params.append("ipAddress", ipAddress);
    params.append("domain", domain);
    const url = `${API_ENDPOINT}?${params}`;

    fetch(url)
    .then(response => response.json())
    .then(data => displayOutput(data));
}

document.onload(() => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    getData("", "");

    searchButton.onclick = () => {
        const input = searchInput.value;
        let ipAddress = "";
        let domain = "";

        if (IP_REGEX.test(input)) ipAddress = input;
        if (URL_REGEX.test(input)) domain = input;
        
        getData(key, ipAddress, domain);
    }
});