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
  Seleccion,
} from '../models';
import {EmpleadosrrhhRepository} from '../repositories';

export class EmpleadosrrhhSeleccionController {
  constructor(
    @repository(EmpleadosrrhhRepository) protected empleadosrrhhRepository: EmpleadosrrhhRepository,
  ) { }

  @get('/empleadosrrhhs/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Array of Empleadosrrhh has many Seleccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Seleccion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Seleccion>,
  ): Promise<Seleccion[]> {
    return this.empleadosrrhhRepository.seleccions(id).find(filter);
  }

  @post('/empleadosrrhhs/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Empleadosrrhh model instance',
        content: {'application/json': {schema: getModelSchemaRef(Seleccion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Empleadosrrhh.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {
            title: 'NewSeleccionInEmpleadosrrhh',
            exclude: ['id'],
            optional: ['empleadosrrhhId']
          }),
        },
      },
    }) seleccion: Omit<Seleccion, 'id'>,
  ): Promise<Seleccion> {
    return this.empleadosrrhhRepository.seleccions(id).create(seleccion);
  }

  @patch('/empleadosrrhhs/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Seleccion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {partial: true}),
        },
      },
    })
    seleccion: Partial<Seleccion>,
    @param.query.object('where', getWhereSchemaFor(Seleccion)) where?: Where<Seleccion>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.seleccions(id).patch(seleccion, where);
  }

  @del('/empleadosrrhhs/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Empleadosrrhh.Seleccion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Seleccion)) where?: Where<Seleccion>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.seleccions(id).delete(where);
  }
}
