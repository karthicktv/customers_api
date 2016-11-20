module.exports = {
  fetchJoke : () => {
    let request = require('request');
    return new Promise((resolve, reject) => {
      request(Consts.jokesUrl, (error, response, body) => {
        if (error || response.statusCode != 200) {
          reject(error);
        }
        else {
          let exit = JSON.parse(body);
          exit.value.constructor == Array ? resolve(exit.value[0].joke) : resolve(exit.value.joke);
        }
      })
    });
  }
};
