import axios from 'axios';

class GetRequest {
  
  static async getRequest(username, getFollowers) {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  }
}

export default GetRequest;
