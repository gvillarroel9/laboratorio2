import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  items: Array<any>;

  constructor(
    public firebaseService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.items = result;
      console.log(result)
    })
  }

  viewDetails(item){
    this.router.navigate(['/user-detail/'+ item.payload.doc.id]);
  }

  edit(item){
    this.router.navigate(['/user-edit/'+ item.payload.doc.id]);
  }

  create(){
    this.router.navigate(['/user-create/']);
  }


  delete(item){
    this.firebaseService.deleteUser(item.payload.doc.id);
    this.getData();
  }

}
