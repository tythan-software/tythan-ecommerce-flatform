import api from "../config/api";

const baseUrl = "/api/files";

// File service
const fileService = {
  uploadAvatar: async (avatar: File) => {
    const formData = new FormData();
    formData.append("avatar", avatar);

    const response = await api.post(`${baseUrl}/upload-avatar`, formData);
    return response.data;
  },
};

export default fileService;
