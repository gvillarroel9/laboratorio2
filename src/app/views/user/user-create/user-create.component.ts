import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-create",
  templateUrl: "./user-create.component.html",
  styleUrls: ["./user-create.component.scss"]
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public firebaseService: UserService
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("[A-z' ']*")]],
      surname: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
          )
        ]
      ],
      age: ["", [Validators.required, Validators.pattern("[1-9][0-9]")]]
    });
  }

  onSubmit(value) {
    let avatarLink =
      "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png";
    this.firebaseService.createUser(value, avatarLink).then(res => {
      this.router.navigate(["/"]);
    });
  }
}
