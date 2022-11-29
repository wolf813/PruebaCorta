import {Entity, model, property} from '@loopback/repository';

@model()
export class Seleccion extends Entity {
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
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  plaza: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  idcandidato: string;


  constructor(data?: Partial<Seleccion>) {
    super(data);
  }
}

export interface SeleccionRelations {
  // describe navigational properties here
}

export type SeleccionWithRelations = Seleccion & SeleccionRelations;
