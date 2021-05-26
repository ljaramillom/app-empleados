import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployerService } from '../../services/employer.service';
import { Employer } from '../../models/employer';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MsgConfirmationComponent } from '../shared/msg-confirmation/msg-confirmation.component';

@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css']
})
export class ListEmployerComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource();
  listEmpleado: Employer[];

  constructor(private employerService: EmployerService, 
              public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }

  cargarEmpleados() { 
    this.listEmpleado = this.employerService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(index: number) {

    const dialogRef = this.dialog.open(MsgConfirmationComponent, {
      width: '350px',
      data: {mensaje: '¿Está seguro de eliminar el empleado seleccionado?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this.employerService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackBar.open('El empleado ha sido eliminado correctamente!', '', {
          duration: 3000
        });
      }
    });
  }
}
