import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/auth.entity';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateAuthDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateAuthDto) {
    const user = await this.userModel.create(userDto);
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateAuthDto) {
    const user = await this.userModel
      .findOne({ email: userDto.email })
      .select('+password')
      .exec();
    const passwordEquals = user
      ? await bcrypt.compare(userDto.password, user.password)
      : null;
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: 'Incorrect email or password',
    });
  }
}
