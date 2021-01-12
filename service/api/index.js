import axios from 'axios';

export const fetcher = url => axios({url}).then(
  res => res
)

export const getProjectsUrl = (page, per_page = 9, search = "") => {
  return 'https://www.vooreenmooiestad.nl/wp-json/wp/v2/projects?_embed'
}

class API {
  
  getProjects = async() => {

    const options = {
      url: 'https://www.vooreenmooiestad.nl/wp-json/wp/v2/projects?_embed',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    return axios(options)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response
    });
  }

  getProjectBySlug = async(slug) => {
    
    const options = {
      url: 'https://www.vooreenmooiestad.nl/wp-json/wp/v2/projects/?_embed&slug=' + slug,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    return axios(options)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response
    });
  } 
  
}

export default new API();