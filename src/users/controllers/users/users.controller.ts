import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserProfileDto } from 'src/users/dtos/createUserProfile.dto';
import { createUserDto } from 'src/users/dtos/createUser.dto';
import { updateUserDto } from 'src/users/dtos/updateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserPostDto } from 'src/users/dtos/createUserPost.dto';

@Controller('users')
export class UsersController {
  constructor(private userSrevice: UsersService) {}

  @Get()
  getUser() {
    return this.userSrevice.findUser();
  }

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    this.userSrevice.createUser(createUserDto);
  }

  @Patch('/:id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: updateUserDto,
  ) {
    await this.userSrevice.updateUser(id, updateUserDto);
  }

  @Delete('/:id')
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    this.userSrevice.deleteUser(id);
  }

  @Post(':id/profile')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    this.userSrevice.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userSrevice.createUserPost(id, createUserPostDto)
  }
}
