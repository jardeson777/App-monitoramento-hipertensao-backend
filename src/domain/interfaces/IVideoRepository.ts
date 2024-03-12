import { Video } from "../entities/Video";

export type CreateVideoInput = Omit<Video, "id" | "createdAt" | "updatedAt">;

export interface IVideoRepository {
  createVideo(video: CreateVideoInput): Promise<{ id: string } | null>;
}