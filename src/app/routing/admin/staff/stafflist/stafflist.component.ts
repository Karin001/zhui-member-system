import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.scss']
})
export class StafflistComponent implements OnInit {
  items= [
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
    "jack 123123dsf",
    "张三 sdfsdfsd324",
    "王二 dfjk3423",
  ]
  selectedValue;
  constructor() { }

  ngOnInit() {
  }

}
