import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5500/` });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = ` Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = (authData) => API.post("/user/login", authData);

export const updateChanelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const fetchAllChanels = () => API.get("/user/getAllChanels");

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadVideo", fileData, fileOptions);
export const getVideos = () => API.get("/video/getvideos");

export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });

export const addToLikedVideo = (likedVideoData) =>API.post("/video/likeVideo", likedVideoData);

export const getAlllikedVideo =()=>API.get("/video/getAlllikeVideo");

