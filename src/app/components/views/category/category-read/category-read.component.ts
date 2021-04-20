import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(private service: CategoryService) { }

  // Do its methods everytime the application is launched
  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      this.categories = response
    })
  }

}
