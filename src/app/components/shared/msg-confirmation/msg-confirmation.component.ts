import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-msg-confirmation',
  templateUrl: './msg-confirmation.component.html',
  styleUrls: ['./msg-confirmation.component.css']
})
export class MsgConfirmationComponent implements OnInit {
  
  mensaje: string;
  btn = 'aceptar';
  constructor(public dialogRef: MatDialogRef<MsgConfirmationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { 
                this.mensaje = data.mensaje;
              }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
