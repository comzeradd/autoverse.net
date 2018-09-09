import axios from 'axios';

export default class Api {
  static getProjects () {
    return axios.get('./static/projects.json');
  }
}
