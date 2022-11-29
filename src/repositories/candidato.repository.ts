import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Candidato, CandidatoRelations, Plaza} from '../models';
import {PlazaRepository} from './plaza.repository';

export class CandidatoRepository extends DefaultCrudRepository<
  Candidato,
  typeof Candidato.prototype.ID,
  CandidatoRelations
> {

  public readonly plazas: HasManyRepositoryFactory<Plaza, typeof Candidato.prototype.ID>;

  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource, @repository.getter('PlazaRepository') protected plazaRepositoryGetter: Getter<PlazaRepository>,
  ) {
    super(Candidato, dataSource);
    this.plazas = this.createHasManyRepositoryFactoryFor('plazas', plazaRepositoryGetter,);
    this.registerInclusionResolver('plazas', this.plazas.inclusionResolver);
  }
}
