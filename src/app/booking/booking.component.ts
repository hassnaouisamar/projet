import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {BooksService} from "../services/books.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  public  userId=1
  public  bookId=0;
  public selectedDate: string = '';
  constructor(private route: ActivatedRoute,private router: Router,private bookservice: BooksService) {

    // Subscribe to route parameter changes
    this.route.params.subscribe((params: { [x: string]: string; }) => {
      // Access and assign parameters to component variables
      this.bookId = Number(params['id']);

      // Perform any additional logic here
    });


  }

  onDateSelected(event: any) {
    // Retrieve the selected date from the event
    this.selectedDate = event.target.value;
    // You can also perform additional actions here based on the selected date
    console.log('Selected date:', this.selectedDate);
  }
onSubmit(){
    if(this.selectedDate.length!=0){
      this.bookservice.addBooking(this.userId,this.bookId,this.selectedDate).subscribe(
        result=>{
          console.log(result);
          console.log('Status code:', result.status);
          this.router.navigate(['/']);
          alert("Réservation ajouté")

        }
      )
    }else{
      alert("il faut choisir la date")
    }

}
}
