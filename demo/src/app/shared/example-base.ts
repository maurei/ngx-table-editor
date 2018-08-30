import { Injectable, DoCheck } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

// export type ViewMode = 'table' | 'html' | 'ts' | 'css';

// export abstract class ExampleBase  {
//   public view: ViewMode = 'table';
//   public viewTs: string;
//   public viewHtml: string;
//   public viewCss: string;
//   public rows: any[];
//   public viewJson: string;
//   public switchView(target: ViewMode): void {
//     this.view = target;
//   }

// }

export type ViewMode = 'table' | 'html' | 'ts' | 'css';

@Injectable()
export abstract class ExampleBase implements DoCheck {
  public view: ViewMode = 'table';
  public viewTs: string;
  public viewHtml: string;
  public viewCss: string;
  public rows: any[];
  public viewJson: string;
  public switchView(target: ViewMode): void {
    this.view = target;
  }
  constructor(protected jsonPipe: JsonPipe, protected fb: FormBuilder) {}
  ngDoCheck(): void {
    if (this.rows && this.rows[0] && this.rows[0]) {
      let target = this.rows[0];
      if (target instanceof FormGroup) {
        target = target.value;
      }
      this.viewJson = this.jsonPipe.transform(target);
    }
  }
}
