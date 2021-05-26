import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from 'src/app/services/employer.service';
import { Employer } from '../../models/employer';

@Component({
  selector: 'app-add-edit-employer',
  templateUrl: './add-edit-employer.component.html',
  styleUrls: ['./add-edit-employer.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmployerComponent implements OnInit {
  
  accion = 'Agregar';
  idEmpleado: any;
  myForm: FormGroup;
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];

  constructor(
    private fb: FormBuilder,
    private employerService: EmployerService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
    const idParam = 'id';
    this.idEmpleado = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined){
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  guardarEmpleado() {
    const empleado: Employer = {
      nombreCompleto: this.myForm.get('nombreCompleto').value,
      correo: this.myForm.get('correo').value,
      fechaIngreso: this.myForm.get('fechaIngreso').value,
      telefono: this.myForm.get('telefono').value,
      estadoCivil: this.myForm.get('estadoCivil').value,
      sexo: this.myForm.get('sexo').value,
    };

    if (this.idEmpleado !== undefined) {
      this.editarEmpleado(empleado);
    } else {
      this.agregarEmpleado(empleado);
    }
  }

  agregarEmpleado(empleado: Employer) {
    this.employerService.agregarEmpleado(empleado);
    this.snackBar.open('El empleado fue registrado correctamente!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  editarEmpleado(empleado: Employer) {
    this.employerService.editEmpleado(empleado, this.idEmpleado);
    this.snackBar.open('El empleado fue actualizado correctamente!', '', {
      duration: 3000,
    });
    this.route.navigate(['/']);
  }

  esEditar() {
    const empleado: Employer = this.employerService.getEmpleado(
      this.idEmpleado
    );
    console.log(empleado);
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo,
    });
  }
}
