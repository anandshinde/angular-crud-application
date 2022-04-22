import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  username: String;
  email: String;
  phone = '';
  userArr: any[] = [];
  isAddUser = true;
  ind;
  ngOnInit() {
  }
  saveUsers(ind) {
    this.isAddUser = true;
    this.userArr.splice(ind, 1 , {name: this.username, email: this.email, phone: this.phone});
    this.emptyFeild();
  }
  emptyFeild() {
    this.username = this.email = this.phone = '';
  }

  addUser(formElem) {
    this.username = formElem['username'].value;
    this.email = formElem['email'].value;
    this.phone = formElem['phone'].value;

    this.userArr.push({
      name: this.username,
      email: this.email,
      phone: this.phone
    });

    this.emptyFeild();
  }
  editUser(index) {
    this.isAddUser = false;
    this.ind = index;
    this.username = this.userArr[index]['name'];
    this.email = this.userArr[index]['email'];
    this.phone = this.userArr[index]['phone'];
  }
  deleteUser(index) {
    this.userArr.splice(index, 1);
  }

  // sorting functions
  sortString(param) {
    this.userArr.sort(function(a, b) {
      const x = a[param].toLowerCase();
      const y = b[param].toLowerCase();
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
  }
  sorting(filter) {
    if (filter === 'name') {
      this.sortString('name');
    }
    if (filter === 'email') {
      this.sortString('email');
    }
    if (filter === 'phone') {
      this.userArr.sort(function(a, b) {
        return a.phone - b.phone;
      });
    }
  }
}
