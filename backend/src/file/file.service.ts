import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
const storage = new Storage();

@Injectable()
export class FileService {
  async createFile(file): Promise<string> {
    try {
      await storage.bucket(process.env.BUCKET_NAME).upload(file.path, {
        destination: file.filename,
      });

      return file.filename;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
