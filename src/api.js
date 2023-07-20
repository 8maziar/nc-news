import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://nc-news-api-zwda.onrender.com/api",
});

export const getArticles = () => {
  return usersApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticle = (id) => {
  return usersApi.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getcommentsById = (id) => {
  return usersApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const updateVotes = (id, num) => {
  return usersApi.patch(`/articles/${id}`, { inc_votes: num }).then(({ data }) => {
    return data.article;
  });
};

export const postComment = (id, comment) => {
  return usersApi
    .post(`/articles/${id}/comments`, {
      username: "weegembump",
      body: comment,
    })
    .then(({ data }) => {
      return data.comment;
    });
};
