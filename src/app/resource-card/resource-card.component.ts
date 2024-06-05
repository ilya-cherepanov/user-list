import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Resource } from '../types';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [],
  templateUrl: './resource-card.component.html',
  styleUrl: './resource-card.component.scss'
})
export class ResourceCardComponent implements AfterViewInit {
  @Input({ required: true }) resource!: Resource;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.fillStyle = this.resource.color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
