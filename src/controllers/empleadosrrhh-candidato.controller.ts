import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Empleadosrrhh,
  Candidato,
} from '../models';
import {EmpleadosrrhhRepository} from '../repositories';

export class EmpleadosrrhhCandidatoController {
  constructor(
    @repository(EmpleadosrrhhRepository) protected empleadosrrhhRepository: EmpleadosrrhhRepository,
  ) { }

  @get('/empleadosrrhhs/{id}/candidatoes', {
    responses: {
      '200': {
        description: 'Array of Empleadosrrhh has many Candidato',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Candidato)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Candidato>,
  ): Promise<Candidato[]> {
    return this.empleadosrrhhRepository.candidatoes(id).find(filter);
  }

  @post('/empleadosrrhhs/{id}/candidatoes', {
    responses: {
      '200': {
        description: 'Empleadosrrhh model instance',
        content: {'application/json': {schema: getModelSchemaRef(Candidato)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleadosrrhh.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidato, {
            title: 'NewCandidatoInEmpleadosrrhh',
            exclude: ['ID'],
            optional: ['empleadosrrhhId']
          }),
        },
      },
    }) candidato: Omit<Candidato, 'ID'>,
  ): Promise<Candidato> {
    return this.empleadosrrhhRepository.candidatoes(id).create(candidato);
  }

  @patch('/empleadosrrhhs/{id}/candidatoes', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Candidato PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Candidato, {partial: true}),
        },
      },
    })
    candidato: Partial<Candidato>,
    @param.query.object('where', getWhereSchemaFor(Candidato)) where?: Where<Candidato>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.candidatoes(id).patch(candidato, where);
  }

  @del('/empleadosrrhhs/{id}/candidatoes', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Candidato DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Candidato)) where?: Where<Candidato>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.candidatoes(id).delete(where);
  }
}
