import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent implements OnInit {
  user: any;
  userForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firebaseService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    let iduser = this.route.snapshot.paramMap.get("id");
    this.firebaseService.getUser(iduser).subscribe(result => {
      this.user = result.payload.data();
      this.user.id = iduser;
      this.userForm = this.fb.group({
        name: [
          this.user.name,
          [Validators.required, Validators.pattern("[A-z' ']*")]
        ],
        surname: [
          this.user.surname,
          [
            Validators.required,
            Validators.pattern(
              "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
            )
          ]
        ],
        age: [
          this.user.age,
          [Validators.required, Validators.pattern("[1-9][0-9]")]
        ]
      });
    });
  }

  onSubmit(value) {
    value.avatar = this.user.avatar;
    this.firebaseService.updateUser(this.user.id, value).then(res => {
      this.router.navigate(["/"]);
    });
  }
}
