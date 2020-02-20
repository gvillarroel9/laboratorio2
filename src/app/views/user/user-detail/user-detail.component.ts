import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  
  user: any;

  constructor(private router: Router, private route: ActivatedRoute,public firebaseService: UserService,) { }

  ngOnInit() {
    let iduser= this.route.snapshot.paramMap.get("id");
    this.firebaseService.getUser(iduser)
    .subscribe(result => {
      this.user = result.payload.data();
      this.user.id = iduser
    })
  }

}
