import axios from "axios";

export const createUser = async (payload) => {
  const { data } = await axios.post(`/api/users`, payload);
  return data;
};

export const readUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data;
};

export const updateUser = async (userId, username) => {
  const { data } = await axios.put(`/api/users/${userId}`, { username });
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};

// { data }랑 response랑 뭐가 다르지?
// response는 axios가 반환하는 전체 응답 객체 자체를 받음 그래서 우리가 코드 작성할 때 response.data로 실제 데이터 사용했던 거!!
// { data }는 response 전체 응답 response 안의 data만 뽑아낸 거
//  -> 한 마디로 우리가 useQuery나 useMutation에서
//  { data, isPending } 이런식으로 반환값 객체 전체에서 필요한 것만 뽑아서 쓰는거랑 같다고 생각하면 돼요!!
