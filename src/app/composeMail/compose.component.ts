import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@/_models';
import { AuthenticationService } from '@/_services';

declare let Email: any;

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html'
})
export class ComposeComponent implements OnInit {
  
  @Output() close = new EventEmitter();
  currentUser: User;

  constructor( private authenticationService: AuthenticationService,) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
    
  }

  closePopup(){
    this.close.emit();
  }
  sendMail(){
    Email.send({
      SecureToken : "3b1d8094-9a2f-421f-9c0b-ff9728ae59ee",
      To : (<HTMLInputElement>document.getElementById('toMail')).value,
      From : this.currentUser,
      Subject : (<HTMLInputElement>document.getElementById('subject')).value,
      Body : (<HTMLInputElement>document.getElementById('bodyContent')).value
  }).then(
    message => alert(message)
  );
  }
}
