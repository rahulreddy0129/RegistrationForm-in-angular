import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  expForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.expForm = this.fb.group({
    product:['', Validators.required],
    route: ['', Validators.required],
    stage: ['', Validators.required],
    projectStatus: ['', Validators.required],
    expNo: ['', Validators.required],
    date: ['', Validators.required],
    aim: ['', Validators.required],
    rawMaterialsList: this.fb.array([this.createRawMaterials()]),
    description: [''],
    operationsList: this.fb.array([this.createOperations()]),
    observations: [''],
    // yieldDetailsList: this.fb.array([this.createyieldDetails()]),
    wetUom: ['', Validators.required],
      wetWt: ['', Validators.required],
      dryUom: ['', Validators.required],
      dryWt: ['', Validators.required],
      yield: ['', Validators.required],
      remarks: [''],
    analyticalResultsList: this.fb.array([this.createAnalyticalResults()]),
    conclusion: ['']
  })

  }
  createRawMaterials(){
    return this.fb.group({
      material: ['', Validators.required],
      quantity: ['', Validators.required],
      inventary: [''],
      unit: ['', Validators.required],
      molWt: [''],
      moles: [''],
      moleRatio: [''],
      remarks: [''],
    })
  }
  createOperations(){
    return this.fb.group({
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      temp: ['', Validators.required],
      operation: ['', Validators.required],
      observation:['', Validators.required]
    })
  }
  // createyieldDetails(){
  //   return this.fb.group({
  //     wetUom: ['', Validators.required],
  //     wetWt: ['', Validators.required],
  //     dryUom: ['', Validators.required],
  //     dryWt: ['', Validators.required],
  //     yield: ['', Validators.required],
  //     remarks: ['']
  //   })
  // }
  createAnalyticalResults(){
    return this.fb.group({
      testName: [''],
      result: [''],
      attachment: [''],
    })
  }

  addRawMaterialRow(){
    const control = this.expForm.get('rawMaterialsList') as FormArray;
    control.push(this.createRawMaterials())
  }
  addOperationRow(){
    const control = this.expForm.get('operationsList') as FormArray;
    control.push(this.createOperations())
  }
  addAnalyticalResultsRow(){
    const control = this.expForm.get('analyticalResultsList') as FormArray;
    control.push(this.createAnalyticalResults())
  }

}
