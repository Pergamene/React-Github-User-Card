import axios from 'axios';

class GetRequest {
  
  static getRequest(username) {
    return new Promise(resolve => {
      axios.get(`https://api.github.com/users/${username}`).then(response => {
        const user = response.data;
        axios.get(user.followers_url).then(response => {
          const followers = response.data;
          const promises = [];
          for (let i = 0; i < followers.length; i++) {
            promises.push(axios.get(`https://api.github.com/users/${followers[i].login}`));
          }
          Promise.all(promises).then(results => {
            resolve({ user, followers: results });
          });
        });
      });
    });
  }
}

export default GetRequest;
