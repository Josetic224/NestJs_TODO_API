const { Injectable } = require('@nestjs/common');
const { PrismaClient } = require('@prisma/client');

@Injectable()
class PrismaService extends PrismaClient {
  constructor() {
    super();
    this.$connect()
      .then(() => {
        console.log('Database connected successfully');
      })
      .catch((error) => {
        console.error('Error connecting to the database', error);
      });
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Database disconnected successfully');
  }

  
}

export default PrismaService;
