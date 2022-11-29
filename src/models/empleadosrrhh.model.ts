import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Empleadosrrhh>) {
    super(data);
  }
}

export interface EmpleadosrrhhRelations {
  // describe navigational properties here
}

export type EmpleadosrrhhWithRelations = Empleadosrrhh & EmpleadosrrhhRelations;
