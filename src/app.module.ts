import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './workouts/workouts.module';
import { PersonModule } from './person/person.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [WorkoutsModule, PersonModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
