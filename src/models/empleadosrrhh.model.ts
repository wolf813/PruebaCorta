import {Entity, model, property, hasMany} from '@loopback/repository';
import {Candidato} from './candidato.model';
import {Plaza} from './plaza.model';
import {Seleccion} from './seleccion.model';

@model()
export class Empleadosrrhh extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  usr: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @hasMany(() => Candidato)
  candidatoes: Candidato[];

  @hasMany(() => Plaza)
  plazas: Plaza[];

  @hasMany(() => Seleccion)
  seleccions: Seleccion[];

  constructor(data?: Partial<Empleadosrrhh>) {
    super(data);
  }
}

export interface EmpleadosrrhhRelations {
  // describe navigational properties here
}

export type EmpleadosrrhhWithRelations = Empleadosrrhh & EmpleadosrrhhRelations;
