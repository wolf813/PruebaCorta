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
  Plaza,
  Seleccion,
} from '../models';
import {PlazaRepository} from '../repositories';

export class PlazaSeleccionController {
  constructor(
    @repository(PlazaRepository) protected plazaRepository: PlazaRepository,
  ) { }

  @get('/plazas/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Array of Plaza has many Seleccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Seleccion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Seleccion>,
  ): Promise<Seleccion[]> {
    return this.plazaRepository.seleccions(id).find(filter);
  }

  @post('/plazas/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Plaza model instance',
        content: {'application/json': {schema: getModelSchemaRef(Seleccion)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Plaza.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seleccion, {
            title: 'NewSeleccionInPlaza',
            exclude: ['id'],
            optional: ['plazaId']
          }),
        },
      },
    }) seleccion: Omit<Seleccion, 'id'>,
  ): Promise<Seleccion> {
    return this.plazaRepository.seleccions(id).create(seleccion);
  }

  @patch('/plazas/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Plaza.Seleccion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
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
    return this.plazaRepository.seleccions(id).patch(seleccion, where);
  }

  @del('/plazas/{id}/seleccions', {
    responses: {
      '200': {
        description: 'Plaza.Seleccion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Seleccion)) where?: Where<Seleccion>,
  ): Promise<Count> {
    return this.plazaRepository.seleccions(id).delete(where);
  }
}
