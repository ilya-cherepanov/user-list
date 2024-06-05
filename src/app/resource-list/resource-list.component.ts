import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { Resource } from '../types';
import { ResourceCardComponent } from '../resource-card/resource-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [ResourceCardComponent, NgFor],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss'
})
export class ResourceListComponent implements OnInit {
  loading = true;
  resources: Resource[] = [];
  currentPage = 0;
  totalPages = 0;

  constructor(
    private readonly resourceService: ResourceService,
  ) {}

  ngOnInit(): void {
    this.loadResources();
  }

  private loadResources(page?: number): void {
    this.loading = true;

    this.resourceService.getResources(page)
      .subscribe((resources) => {
        this.resources.push(...resources.data);
        this.currentPage = resources.page;
        this.totalPages = resources.totalPages;
        this.loading = false;
      });
  }

  loadMore(evt: MouseEvent) {
    evt.preventDefault();

    if (this.currentPage >= this.totalPages) {
      return;
    }

    this.loadResources(this.currentPage + 1);
  }
}
