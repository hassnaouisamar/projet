import {Component, OnInit} from '@angular/core';
import {BooksService} from "../services/books.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
interface BookModel {
  idLivre: number;
  Titre: string;
  Auteur: string;
  Categorie: string;
  Quantite: number;
  Image: string;
  Status: string;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
 public type= "";
 public value= "";
  constructor(private bookservice: BooksService,private route: ActivatedRoute,private router: Router) {
  }
  public  books: BookModel[] = [];
  ngOnInit(): void {
  this.getBooks();
  }
getBooks(){
  // Subscribe to route parameter changes
  this.route.params.subscribe((params: { [x: string]: string; }) => {
    // Access and assign parameters to component variables
    this.type = params['type'];
    this.value = params['value'];


    // Perform any additional logic here
  });
    this.bookservice.getBooks(this.type,this.value).subscribe(
      result=>{
        this.books=result;
      }
    )
}

  booking(bookId: number) {
    this.router.navigate(['/booking', bookId]);
  }
}
