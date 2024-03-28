import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  isGenreSelected: boolean = false;


  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.searchForm = this.formBuilder.group({
      name: [''],
      type: [null]
    });
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required], type: [null] // Initialize genre form control
    });
  }

  onSubmit(): void {
    // Handle form submission here
  }

  onInputChange(event: any): void {
    this.clearSelectedGenre(); // Call the function to clear selected genre
  }

  clearSelectedGenre(): void {
    this.searchForm.patchValue({
      type: null // Reset the selected genre to null
    });
  }

  onRadioChange(genre: string): void {
    this.clearSearchInput();
  }

  clearSearchInput(){
    this.searchForm.patchValue({
      name: '' // Clear the search input value
    });
  }

  search() {

    let param2Value = '';
    console.log(this.searchForm.getRawValue())
    if(this.searchForm.getRawValue()["type"]!=null){
      let param1Value = 'type';
      param2Value=this.searchForm.getRawValue()["type"];
      this.router.navigate(['/result', param1Value, param2Value]);
    }else if(this.searchForm.getRawValue()["name"].length!=0){
      const param1Value = 'name';
      param2Value=this.searchForm.getRawValue()["name"];
      this.router.navigate(['/result', param1Value, param2Value]);

    }
    else{
      alert("Il faut choir un critere de recherche")
    }

  }
}
