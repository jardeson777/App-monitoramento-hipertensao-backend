import { CreateVideoInput, IVideoRepository } from "../../domain/interfaces/IVideoRepository";
import { prisma } from "../../infra/db/prisma";

class VideoRepository implements IVideoRepository {
  async createVideo({ title, url, hospitalId }: CreateVideoInput): Promise<{ id: string } | null> {
    try {
      const videoCreated = await prisma.listVideo.create({
        data: {
          title,
          url,
          hospitalId
        }
      })

      return {
        id: videoCreated.id
      }
    } catch (e) {
      throw new Error(`error on create video: ${e}`);
    }
  }
}

export default VideoRepository;