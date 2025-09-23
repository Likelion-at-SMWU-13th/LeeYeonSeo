import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost } from "./axios";
import { getPost } from "./axios";
import { editPost } from "./axios";
import { deletePost } from "./axios";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => {
      createPost({ title, content });
    },
  });
};

export const useGetPost = (postId) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => {
      getPost(postId);
    },
    enabled: !!postId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,
  });
};

export const useEditPost = () => {
  return useMutation({
    mutationFn: async ({ postId, title, content }) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return editPost(postId, { title, content });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      alert("게시글이 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
