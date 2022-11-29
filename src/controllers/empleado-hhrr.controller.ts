import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Empleadosrrhh} from '../models';
import {EmpleadosrrhhRepository} from '../repositories';

export class EmpleadoHhrrController {
  constructor(
    @repository(EmpleadosrrhhRepository)
    public empleadosrrhhRepository : EmpleadosrrhhRepository,
  ) {}

  @post('/empleadohhrr')
  @response(200, {
    description: 'Empleadosrrhh model instance',
    content: {'application/json': {schema: getModelSchemaRef(Empleadosrrhh)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleadosrrhh, {
            title: 'NewEmpleadosrrhh',
            exclude: ['id'],
          }),
        },
      },
    })
    empleadosrrhh: Omit<Empleadosrrhh, 'id'>,
  ): Promise<Empleadosrrhh> {
    return this.empleadosrrhhRepository.create(empleadosrrhh);
  }

  @get('/empleadohhrr/count')
  @response(200, {
    description: 'Empleadosrrhh model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Empleadosrrhh) where?: Where<Empleadosrrhh>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.count(where);
  }

  @get('/empleadohhrr')
  @response(200, {
    description: 'Array of Empleadosrrhh model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Empleadosrrhh, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Empleadosrrhh) filter?: Filter<Empleadosrrhh>,
  ): Promise<Empleadosrrhh[]> {
    return this.empleadosrrhhRepository.find(filter);
  }

  @patch('/empleadohhrr')
  @response(200, {
    description: 'Empleadosrrhh PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleadosrrhh, {partial: true}),
        },
      },
    })
    empleadosrrhh: Empleadosrrhh,
    @param.where(Empleadosrrhh) where?: Where<Empleadosrrhh>,
  ): Promise<Count> {
    return this.empleadosrrhhRepository.updateAll(empleadosrrhh, where);
  }

  @get('/empleadohhrr/{id}')
  @response(200, {
    description: 'Empleadosrrhh model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Empleadosrrhh, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Empleadosrrhh, {exclude: 'where'}) filter?: FilterExcludingWhere<Empleadosrrhh>
  ): Promise<Empleadosrrhh> {
    return this.empleadosrrhhRepository.findById(id, filter);
  }

  @patch('/empleadohhrr/{id}')
  @response(204, {
    description: 'Empleadosrrhh PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Empleadosrrhh, {partial: true}),
        },
      },
    })
    empleadosrrhh: Empleadosrrhh,
  ): Promise<void> {
    await this.empleadosrrhhRepository.updateById(id, empleadosrrhh);
  }

  @put('/empleadohhrr/{id}')
  @response(204, {
    description: 'Empleadosrrhh PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() empleadosrrhh: Empleadosrrhh,
  ): Promise<void> {
    await this.empleadosrrhhRepository.replaceById(id, empleadosrrhh);
  }

  @del('/empleadohhrr/{id}')
  @response(204, {
    description: 'Empleadosrrhh DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.empleadosrrhhRepository.deleteById(id);
  }
}
