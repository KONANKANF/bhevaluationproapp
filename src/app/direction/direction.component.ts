import { Component, OnInit } from '@angular/core';
import { Direction } from '../interfaces/direction';
import { Response } from '../interfaces/response';
import { DirectionService } from '../service/direction.service';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  directions!: Direction[];

  constructor(private directionService: DirectionService) { }

  ngOnInit(): void {
    this.getDirections();
  }

  public getDirections(): void {
    this.directionService.getDirections().subscribe(
      (response: Response) => {
        this.directions = response.data as Direction[] ;
      },
      (error: Response) => {
        alert(error.message);
      }
    )
  }
}
