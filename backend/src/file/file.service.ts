import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { Storage } from '@google-cloud/storage';
const storage = new Storage();

@Injectable()
export class FileService {
  async createFile(file): Promise<string> {
    try {
      const fileExtension = file.originalname.split('.').pop();
      const fileName = uuid.v4() + '.' + fileExtension;
      await storage.bucket(process.env.BUCKET_NAME).upload(file.path, {
        destination: file.filename,
      });

      return fileName;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
