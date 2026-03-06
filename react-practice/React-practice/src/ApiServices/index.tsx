import axios from "axios";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const PostData = async (data: string) => {
  return await Api.post("/posts", data);
};
export const GetPosts = async () => {
  return await Api.get("/posts");
};

export const updateData = async (id: number, data: string) => {
  return await Api.put(`/posts/${id}`, data);
};
export const deleteData = async (id: number) => {
  return await Api.delete(`/posts/${id}`);
};
