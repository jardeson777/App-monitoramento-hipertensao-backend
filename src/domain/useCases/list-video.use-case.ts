import { IVideoRepository } from "../interfaces/IVideoRepository";

export class ListVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository,
  ) { }

  async execute(hospitalId: string) {
    try {
      const videos = await this.videoRepository.findVideoByHospitalId(hospitalId);

      if (!videos.length) {
        throw new Error("No videos found");
      }

      return videos;

    } catch (error) {
      throw new Error(`error on list video: ${error}`);
    }

  }
}