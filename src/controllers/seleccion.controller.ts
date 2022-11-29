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
import {Seleccion} from '../models';
import {SeleccionRepository} from '../repositories';

export class SeleccionController {
  constructor(
    @repository(SeleccionRepository)
    public seleccionRepository : SeleccionRepository,
  ) {}

  @post('/seleccions')
  @response(200, {
    description: 'Seleccion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Seleccion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {
            title: 'NewSeleccion',
            exclude: ['id'],
          }),
        },
      },
    })
    seleccion: Omit<Seleccion, 'id'>,
  ): Promise<Seleccion> {
    return this.seleccionRepository.create(seleccion);
  }

  @get('/seleccions/count')
  @response(200, {
    description: 'Seleccion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Seleccion) where?: Where<Seleccion>,
  ): Promise<Count> {
    return this.seleccionRepository.count(where);
  }

  @get('/seleccions')
  @response(200, {
    description: 'Array of Seleccion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Seleccion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Seleccion) filter?: Filter<Seleccion>,
  ): Promise<Seleccion[]> {
    return this.seleccionRepository.find(filter);
  }

  @patch('/seleccions')
  @response(200, {
    description: 'Seleccion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {partial: true}),
        },
      },
    })
    seleccion: Seleccion,
    @param.where(Seleccion) where?: Where<Seleccion>,
  ): Promise<Count> {
    return this.seleccionRepository.updateAll(seleccion, where);
  }

  @get('/seleccions/{id}')
  @response(200, {
    description: 'Seleccion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Seleccion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Seleccion, {exclude: 'where'}) filter?: FilterExcludingWhere<Seleccion>
  ): Promise<Seleccion> {
    return this.seleccionRepository.findById(id, filter);
  }

  @patch('/seleccions/{id}')
  @response(204, {
    description: 'Seleccion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {partial: true}),
        },
      },
    })
    seleccion: Seleccion,
  ): Promise<void> {
    await this.seleccionRepository.updateById(id, seleccion);
  }

  @put('/seleccions/{id}')
  @response(204, {
    description: 'Seleccion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() seleccion: Seleccion,
  ): Promise<void> {
    await this.seleccionRepository.replaceById(id, seleccion);
  }

  @del('/seleccions/{id}')
  @response(204, {
    description: 'Seleccion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.seleccionRepository.deleteById(id);
  }
}
