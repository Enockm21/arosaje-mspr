import axios from "axios";

const apiUrl = () => {
    var url = "";

    switch (true) {
        case window.location.href.includes("localhost:3000"):
        case window.location.href.includes("localhost:3001"):
            url = "http://localhost:8081/api/";
            break;
        default:
            throw new Error("Cannot detect corresponding API");
    }

    return url;
};

const request = async (data, url, method) => {
  var headers = "";

    if (localStorage.getItem("arosaje-token")) {
       // console.log("asas",localStorage.getItem("arosaje-token"))
        headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
             Authorization: "Bearer" + localStorage.getItem("arosaje-token"),
        };
    } else {
        headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

  const pending = await axios({
    headers,
    method,
    //credentials: false,
    url: apiUrl() + url,
    data,
    //maxContentLength: Infinity,
    //maxBodyLength: Infinity,
    //timeout: 0,
  });

    const response = pending;

    return response.data;
};

const ApiService = {
    apiUrl,
    request,
};
export default ApiService;