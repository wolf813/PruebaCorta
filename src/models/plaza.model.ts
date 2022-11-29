import {Entity, model, property, hasMany} from '@loopback/repository';
import {Seleccion} from './seleccion.model';

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

  @property({
    type: 'string',
  })
  empleadosrrhhId?: string;

  @property({
    type: 'string',
  })
  candidatoId?: string;

  @hasMany(() => Seleccion)
  seleccions: Seleccion[];

  constructor(data?: Partial<Plaza>) {
    super(data);
  }
}

export interface PlazaRelations {
  // describe navigational properties here
}

export type PlazaWithRelations = Plaza & PlazaRelations;
