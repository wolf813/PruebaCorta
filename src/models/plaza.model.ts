import {Entity, model, property} from '@loopback/repository';

@model()
export class Plaza extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  puesto: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'number',
    required: true,
  })
  salario: number;


  constructor(data?: Partial<Plaza>) {
    super(data);
  }
}

export interface PlazaRelations {
  // describe navigational properties here
}

export type PlazaWithRelations = Plaza & PlazaRelations;
