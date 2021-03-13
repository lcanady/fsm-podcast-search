const fetchData = async (url, token) => {
  const results = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await results.json();
  return data;
};

let token = window.localStorage.getItem("token");

// If there's no token, login.

// Capture the fields from the location hash if available.
const hash = location.hash
  .slice(1)
  .split("&")
  .reduce((acc, cur) => {
    let [key, value] = cur.split("=");
    if (key) acc[key] = value;
    return acc;
  }, {});
window.location.hash = "";

if (hash.access_token) {
  window.localStorage.setItem("token", hash.access_token);
  token = hash.access_token;
}

if (token)
  fetchData(
    "https://api.spotify.com/v1/browse/categories?limit=50",
    token
  ).then((data) => console.log("DATA", data));

if (!token) window.location.replace("/login.html");
