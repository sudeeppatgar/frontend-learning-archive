import { useCallback, useEffect, useState } from "react";
import { deleteData, GetPosts, PostData, updateData } from "../ApiServices";
import "./Form.css"; // separate css file

const Form = () => {
  const [data, setData] = useState<any[]>([]);
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [editId, setEditId] = useState<number | null>(null);

  // fetch posts
  const getData = async () => {
    const res = await GetPosts();
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  // input change
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // create
  const createData = async () => {
    const res = await PostData(formData);
    setData((prev) => [...prev, res.data]);
    setFormData({ title: "", body: "" });
  };

  // update
  const handleUpdate = async () => {
    if (!editId) return;
    const res = await updateData(editId, formData); // use imported API
    setData((prev) =>
      prev.map((item) => (item.id === editId ? { ...item, ...res.data } : item))
    );
    setFormData({ title: "", body: "" });
    setEditId(null);
  };

  // delete
  const handleDelete = async (id: number) => {
    await deleteData(id);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  // submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      handleUpdate();
    } else {
      createData();
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="body"
          placeholder="Body"
          value={formData.body}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-btn">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <div className="posts-container">
        {data.map((item) => (
          <div key={item.id} className="post-card">
            <h2>ID: {item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="post-actions">
              <button
                className="edit-btn"
                onClick={() => {
                  setFormData({ title: item.title, body: item.body });
                  setEditId(item.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
