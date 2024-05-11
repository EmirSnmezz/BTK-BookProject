import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  @Input() starNumber: any = '';
  starLenght: number = 0;

  ngOnInit() {
    this.starLenght = Math.round(this.starNumber);
  }

}

