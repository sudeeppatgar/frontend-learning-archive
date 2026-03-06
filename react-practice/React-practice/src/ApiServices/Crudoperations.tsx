import api from "./index";

export const PostData = async (data: string) => {
  return await api.post("/posts", data);
};
export const GetPosts = async () => {
  return await api.get("/posts");
};

export const updateData = async (id: number, data: string) => {
  return await api.put(`/posts/${id}`, data);
};
export const deleteData = async (id: number) => {
  return await api.delete(`/posts/${id}`);
};
