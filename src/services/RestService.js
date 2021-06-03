export class RestService {
  static GET = async (url, headers, token) => {
    const headersHTTP = new Headers(headers);

    if (token) {
      headersHTTP.append("Authorization", `Bearer ${token}`);
    }

    let options = {
      method: "GET",
      headers: headersHTTP,
    };

    const request = new Request(url, options);
    return await fetch(request);
  };

  static POST = async (url, headers, params, token) => {
    const headersHTTP = new Headers(headers);

    if (token) {
      headersHTTP.append("Authorization", `Bearer ${token}`);
    }

    let options = {
      method: "POST",
      headers: headersHTTP,
      body: params ? JSON.stringify(params) : "",
    };

    const request = new Request(url, options);
    return await fetch(request);
  };

  static POSTFORM = async (url, headers, body, token) => {
    const headersHTTP = new Headers(headers);

    if (token) {
      headersHTTP.append("Authorization", `Bearer ${token}`);
    }

    let options = {
      method: "POST",
      headers: headersHTTP,
      body: body,
    };

    const request = new Request(url, options);
    return await fetch(request);
  };

  static PUT = async (url, headers, params, token) => {
    const headersHTTP = new Headers(headers);

    if (token) {
      headersHTTP.append("Authorization", `Bearer ${token}`);
    }

    let options = {
      method: "PUT",
      headers: headersHTTP,
      body: params ? JSON.stringify(params) : "",
    };
    const request = new Request(url, options);
    return await fetch(request);
  };

  static DELETE = async (url, headers, token) => {
    const headersHTTP = new Headers(headers);

    if (token) {
      headersHTTP.append("Authorization", `Bearer ${token}`);
    }

    let options = {
      method: "DELETE",
      headers: headersHTTP,
    };
    const request = new Request(url, options);
    return await fetch(request);
  };
}

export default RestService;
