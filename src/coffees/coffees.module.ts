import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeSchema } from './entities/coffee.entity';
import { EventSchema } from '../event/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Coffee.name, schema: CoffeSchema },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule { }
