import http from "../http-common";

const getAll = (params) => {
  return http.get("", { params });
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const ContactService = {
  getAll,

  findByTitle,
};

export default ContactService;
