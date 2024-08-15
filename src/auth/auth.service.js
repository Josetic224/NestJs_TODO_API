import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(){
        this.prisma = new PrismaClient()
    }

    async getUserById(id) {
        try {
          const user = this.prisma.users.findUnique({
            where: { id: id },
          });
    
          if (!user) {
            throw new Error('User not found!');
          }
        } catch (error) {
          throw new Error('failed to fetch User By Id');
        }
      }
    
      async getUserByEmail(email) {
        try {
          await this.users.findUnique({
            where: { email: email },
          });
        } catch (error) {
          throw new Error('failed to get User By Email');
        }
      }
    async generateOTP() {
      return crypto.randomUUID(100000,999999).toString()
    }
      async createUser(username, email, password, isVerified ){
        try {
           const hashedPassword = hashSync(password, 10)
           const otpValue = this.generateOTP()
    
          //  const UserData = {
          //    username,
          //    email,
          //    password:hashedPassword
          //  }
    
           const newUser = await this.users.create({
            data:{
              username:username,
              email:email,
              password:hashedPassword,
              isVerified:false,
              otps:{
                create:{
                  otp_value:otpValue,
                  is_used:false,
                  expires_at: new Date(Date.now() + 15 * 60 * 1000)
                }
              }
            }
           })
           return newUser;
        } catch (error) {
          throw new Error("failed to create User")
        }finally{
          this.$disconnect();
        }
      }
}
