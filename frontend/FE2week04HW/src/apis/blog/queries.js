import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, readUser, updateUser, deleteUser } from "./axios";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => alert("환영합니다"), // 회원가입 성공 시 "환영합니다" 알림
  });
};

export const useReasUser = (userId) => {
  return useQuery({
    queryKey: ["users", userId],
    queryFn: () => {
      readUser(userId);
    },
    enabled: !!userId,
    staleTime: 30 * 1000, // 데이터를 30초 동안 신선한 상태로 유지
    refetchInterval: 30 * 1000, // 데이터가 stale 상태가 되었을 때 재요청
    retry: 3, // 실패 시 최대 3번까지 재시도
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, username, password }) => {
      return updateUser(userId, { username, password });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // 정보 수정 후 invalidateQueries를 사용하여 마이페이지 데이터 새로고침
    },
  });
};
