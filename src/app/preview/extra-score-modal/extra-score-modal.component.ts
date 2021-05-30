import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-extra-score-modal',
  templateUrl: './extra-score-modal.component.html',
  styleUrls: ['./extra-score-modal.component.scss'],
})
export class ExtraScoreModalComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ExtraScoreModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) { }

  ngOnInit() {}
  closeModal() {
    this.dialogRef.close(false)
  }
}
