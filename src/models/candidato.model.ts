import {Entity, model, property, hasMany} from '@loopback/repository';
import {Plaza} from './plaza.model';

@model()
export class Candidato extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  identidad: number;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaNac: string;

  @property({
    type: 'number',
    required: true,
  })
  RangoSalarial: number;

  @property({
    type: 'string',
  })
  empleadosrrhhId?: string;

  @hasMany(() => Plaza)
  plazas: Plaza[];

  constructor(data?: Partial<Candidato>) {
    super(data);
  }
}

export interface CandidatoRelations {
  // describe navigational properties here
}

export type CandidatoWithRelations = Candidato & CandidatoRelations;
