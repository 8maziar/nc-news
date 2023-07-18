import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://nc-news-api-zwda.onrender.com/api",
});

export const getArticles = () => {
  return usersApi.get("/articles").then(({data}) => {
    return data.articles
  });
};

