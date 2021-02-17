import config from "../config";
import TokenService from "./token-service";

const RunApiService = {
  getRuns() {
    return fetch(`${config.API_ENDPOINT}/runs`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
},

  postRun(newRun) {
    return fetch(`${config.API_ENDPOINT}/runs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newRun)
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  },

  patchRun(run_id, updatedRun) {
    return fetch(`${config.API_ENDPOINT}/runs/${run_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        updatedRun
      })
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    );
  },

  deleteRun(run_id) {
    return fetch(`${config.API_ENDPOINT}/runs/${run_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : null
    )
    .catch(error => console.log(error))

  }
}

export default RunApiService;