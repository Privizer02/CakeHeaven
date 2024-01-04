import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { CakeService } from 'src/app/service/cake.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user:User=new User();
  message:Message = new Message();
	constructor(private service:CakeService,private router:Router) {
	}

  ngOnInit() {
    this.getUser()
  }

  onSend() {
    this.message.message = this.form.value.message as string;
    this.service.sendMessage(this.message).subscribe({
      next:(data:Message) => {
        console.log(data);
        alert("Message was sent successfully")
        this.router.navigate(['/home'])
      }
    })
  }

  form = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    message: new FormControl("",Validators.required)
  })

  getUser() {
    this.service.getUser().subscribe({
      next:(data:User) => {
        this.user=data;
        this.message.name = this.user.firstName + " "+this.user.lastName
        this.message.email = this.user.email
        this.form.patchValue(this.message)
        

      }
    })
  }

}
