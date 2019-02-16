import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-better-form',
  templateUrl: './better-form.component.html',
  styleUrls: ['./better-form.component.css']
})
export class BetterFormComponent implements OnInit {
  calcForm: FormGroup;
  result: String = '足し算しましょう';

  constructor() { }

  ngOnInit() {
    this.calcForm = new FormGroup({
      'fieldOne': new FormControl('0', Validators.required),
      'fieldTwo': new FormControl('0', [Validators.required, Validators.maxLength(5)])
    });
  }

  get fieldOne() { return this.calcForm.get('fieldOne'); }
  get fieldTwo() { return this.calcForm.get('fieldTwo'); }

  addAnyway() {
    let text1 = this.fieldOne.value;
    let text2 = this.fieldTwo.value;
    let resultStr: String = '';

    if ( Number.isNaN( Number(text1)) || Number.isNaN( Number(text2))) {
      resultStr = text1 + text2;
    } else {
      resultStr = `${text1}+${text2} = ${Number(text1) + Number(text2)}`;
    }
    this.result = resultStr;
  }

  clearResalt() {
    this.result = '';
  }
}
