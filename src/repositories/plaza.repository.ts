import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Plaza, PlazaRelations, Seleccion} from '../models';
import {SeleccionRepository} from './seleccion.repository';

export class PlazaRepository extends DefaultCrudRepository<
  Plaza,
  typeof Plaza.prototype.id,
  PlazaRelations
> {

  public readonly seleccions: HasManyRepositoryFactory<Seleccion, typeof Plaza.prototype.id>;

  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource, @repository.getter('SeleccionRepository') protected seleccionRepositoryGetter: Getter<SeleccionRepository>,
  ) {
    super(Plaza, dataSource);
    this.seleccions = this.createHasManyRepositoryFactoryFor('seleccions', seleccionRepositoryGetter,);
    this.registerInclusionResolver('seleccions', this.seleccions.inclusionResolver);
  }
}
