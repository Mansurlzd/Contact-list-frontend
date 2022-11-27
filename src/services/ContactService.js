import http from "../http-common";

const getAll = (params) => {
  return http.get("", { params });
};

const findByTitle = (name) => {
  return http.get(`/?name=${name}`);
};

const ContactService = {
  getAll,
  findByTitle,
};

export default ContactService;
