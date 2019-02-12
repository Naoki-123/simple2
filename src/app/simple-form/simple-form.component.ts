import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  result = '足し算しましょう！';
  text1 = '0';
  text2 = '0';

  addAndShow(): void {
    let forResult = '正しい値を入力してください';
    let int1: number;
    let int2: number;

    int1 = Number(this.text1);
    int2 = Number(this.text2);

    if (!Number.isNaN(int1) && !Number.isNaN(int2)) {
      forResult = `${int1}+${int2}=${int1 + int2}`;
    }
    this.result = forResult;
  }
  constructor() { }

  ngOnInit() {
  }

}
