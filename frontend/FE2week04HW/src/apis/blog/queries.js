import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, readUser, updateUser, deleteUser } from "./axios";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => alert("환영합니다"),
  });
};
