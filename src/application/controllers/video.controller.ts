import { Request, Response } from "express";
import { CreateVideoUseCase } from "../../domain/useCases/create-video.use-case";
import VideoRepository from "../repositories/video.repository";

class VideoController {
  async create(req: Request, res: Response) {
    try {
      const { title, url, hospitalId } = req.body;
      const repository = new VideoRepository();
      const useCase = new CreateVideoUseCase(repository);

      if (!title) {
        res.status(400).json({
          status: 400,
          messenger: "title missing",
        });
        return;
      }

      if (!url) {
        res.status(400).json({
          status: 400,
          messenger: "url missing",
        });
        return;
      }

      if (!hospitalId) {
        res.status(400).json({
          status: 400,
          messenger: "hospitalId missing",
        });
        return;
      }

      const createdVideo = await useCase.execute({ title, url, hospitalId });

      if (!createdVideo) {
        res.status(400).json({
          status: 400,
          messenger: "Video not created",
        });
        return;
      }

      res.json({ status: 200, messenger: "Video created", id: createdVideo.id });
    } catch (e) {
      const error = e as { message: string };
      res.status(400).json({
        status: 400,
        message: error.message,
      });
      return;
    }
  }
}

export default new VideoController();