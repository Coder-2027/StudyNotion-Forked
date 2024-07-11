import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};


// The apiConnector function takes several parameters:
// method: The HTTP method (e.g., “GET,” “POST,” “PUT,” etc.).
// url: The URL to which the request will be made.
// bodyData: Optional data to send in the request body (used for POST or PUT requests).
// headers: Optional headers to include in the request.
// params: Optional query parameters to append to the URL.
// Inside the function, it constructs an Axios request using the provided parameters.
// The request is made using the axiosInstance created earlier.
