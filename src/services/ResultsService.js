import RestService from "./RestService";

export class RequestService {
  //Private properties
  #headers = {};

  constructor() {
    this.#headers["Content-Type"] = "application/json";
  }

  createResult = (body) => {
    return RestService.POST("/api/result", this.#headers, body, null);
  };

  deleteResults = () => {
    return RestService.DELETE("/api/result", this.#headers, null);
  };

  getResults = () => {
    return RestService.GET("/api/results", this.#headers, null);
  };
}

export default RequestService;
