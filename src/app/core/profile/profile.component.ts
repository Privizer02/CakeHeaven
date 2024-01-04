import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { CakeService } from 'src/app/service/cake.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:User = new User();
  editClicked = false;
	constructor(private service:CakeService) {

	}
  ngOnInit() {
    this.getUser()
  }

  form = new FormGroup({
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email])
  })

  getUser() {
    this.service.getUser().subscribe({
      next:(data:User) => {
        this.user=data;
        this.form.patchValue(this.user)
        this.form.disable();
      }
    })
  }

  onEditClicked() {
    this.editClicked = !this.editClicked
    this.form.enable()
    
  }

  onDoneClicked() {
    
    let newUser = new User(this.form.value)
    newUser._id = this.user._id
    
    this.service.editUser(newUser).subscribe({
      next:(data:User) => {
        this.getUser()
      }
    })
    this.editClicked = !this.editClicked
    this.form.disable()
  }
  
}
