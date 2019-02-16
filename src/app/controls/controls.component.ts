import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  coffeeForm: FormGroup;
  hotcoldsel = ['Hot', 'Cold'];
  addssel = ['Milk', 'Sugar'];
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group({
      name: 'ブレンド',
      taste: 'バランスのよい口当たり',
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([])
    });
   }

  ngOnInit() {
  }

  onCheckChanged(item: string, isChecked: boolean) {
    const formArray = <FormArray>this.coffeeForm.controls.adds;
    if (isChecked) {
      formArray.push(new FormControl(item));
    } else {
      const index = formArray.controls.findIndex(elm => elm.value == item)
      formArray.removeAt(index);
    }
    }
  }

}
