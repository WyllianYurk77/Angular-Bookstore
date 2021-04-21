import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  findAll(): Observable<Category[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Category[]>(url)
  }

  create(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Category>(url, category)
  }

  alert(str: String): void {
    this.snackbar.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
