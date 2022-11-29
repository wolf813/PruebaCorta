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
  Candidato,
  Plaza,
} from '../models';
import {CandidatoRepository} from '../repositories';

export class CandidatoPlazaController {
  constructor(
    @repository(CandidatoRepository) protected candidatoRepository: CandidatoRepository,
  ) { }

  @get('/candidatoes/{id}/plazas', {
    responses: {
      '200': {
        description: 'Array of Candidato has many Plaza',
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
    return this.candidatoRepository.plazas(id).find(filter);
  }

  @post('/candidatoes/{id}/plazas', {
    responses: {
      '200': {
        description: 'Candidato model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plaza)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Candidato.prototype.ID,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plaza, {
            title: 'NewPlazaInCandidato',
            exclude: ['id'],
            optional: ['candidatoId']
          }),
        },
      },
    }) plaza: Omit<Plaza, 'id'>,
  ): Promise<Plaza> {
    return this.candidatoRepository.plazas(id).create(plaza);
  }

  @patch('/candidatoes/{id}/plazas', {
    responses: {
      '200': {
        description: 'Candidato.Plaza PATCH success count',
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
    return this.candidatoRepository.plazas(id).patch(plaza, where);
  }

  @del('/candidatoes/{id}/plazas', {
    responses: {
      '200': {
        description: 'Candidato.Plaza DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plaza)) where?: Where<Plaza>,
  ): Promise<Count> {
    return this.candidatoRepository.plazas(id).delete(where);
  }
}
