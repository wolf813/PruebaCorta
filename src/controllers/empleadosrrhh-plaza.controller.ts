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
  Plaza,
} from '../models';
import {EmpleadosrrhhRepository} from '../repositories';

export class EmpleadosrrhhPlazaController {
  constructor(
    @repository(EmpleadosrrhhRepository) protected empleadosrrhhRepository: EmpleadosrrhhRepository,
  ) { }

  @get('/empleadosrrhhs/{id}/plazas', {
    responses: {
      '200': {
        description: 'Array of Empleadosrrhh has many Plaza',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plaza)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Plaza>,
  ): Promise<Plaza[]> {
    return this.empleadosrrhhRepository.plazas(id).find(filter);
  }

  @post('/empleadosrrhhs/{id}/plazas', {
    responses: {
      '200': {
        description: 'Empleadosrrhh model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plaza)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleadosrrhh.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plaza, {
            title: 'NewPlazaInEmpleadosrrhh',
            exclude: ['id'],
            optional: ['empleadosrrhhId']
          }),
        },
      },
    }) plaza: Omit<Plaza, 'id'>,
  ): Promise<Plaza> {
    return this.empleadosrrhhRepository.plazas(id).create(plaza);
  }

  @patch('/empleadosrrhhs/{id}/plazas', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Plaza PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plaza, {partial: true}),
        },
      },
    })
    plaza: Partial<Plaza>,
    @param.query.object('where', getWhereSchemaFor(Plaza)) where?: Where<Plaza>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.plazas(id).patch(plaza, where);
  }

  @del('/empleadosrrhhs/{id}/plazas', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Plaza DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plaza)) where?: Where<Plaza>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.plazas(id).delete(where);
  }
}
