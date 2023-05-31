import { Component, OnInit, ViewChild } from "@angular/core";
import { MatInput } from "@angular/material/input";
import { FieldType } from "@ngx-formly/material";

@Component({
  selector: "app-integer-input",
  templateUrl: "./integer-input.component.html",
  styleUrls: ["./integer-input.component.css"]
})
export class IntegerInputComponent extends FieldType {
  @ViewChild(MatInput) formFieldControl!: MatInput;
}
