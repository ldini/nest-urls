import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TracksService } from './tracks.service';


// localhost:3000/api/tracks

@Controller('tracks')
export class TracksController {

    constructor(private readonly tracksService:TracksService){}

    @Get('all')
    getAll(){
        return this.tracksService.getAll();
    }
    
    @Get(':id')
    getOne(@Param('id') id:string){
        return this.tracksService.getOne(id);
    }

    @Post('crear')
    create(@Body() track:any){
        return this.tracksService.create(track);
    }

    @Put(':id')
    update(@Param('id') id:string,@Body() body:any){
        return this.tracksService.update(+id,body)
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.tracksService.delete(+id);
    }

    

}
