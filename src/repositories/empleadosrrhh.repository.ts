import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Empleadosrrhh, EmpleadosrrhhRelations, Candidato, Plaza, Seleccion} from '../models';
import {CandidatoRepository} from './candidato.repository';
import {PlazaRepository} from './plaza.repository';
import {SeleccionRepository} from './seleccion.repository';

export class EmpleadosrrhhRepository extends DefaultCrudRepository<
  Empleadosrrhh,
  typeof Empleadosrrhh.prototype.id,
  EmpleadosrrhhRelations
> {

  public readonly candidatoes: HasManyRepositoryFactory<Candidato, typeof Empleadosrrhh.prototype.id>;

  public readonly plazas: HasManyRepositoryFactory<Plaza, typeof Empleadosrrhh.prototype.id>;

  public readonly seleccions: HasManyRepositoryFactory<Seleccion, typeof Empleadosrrhh.prototype.id>;

  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource, @repository.getter('CandidatoRepository') protected candidatoRepositoryGetter: Getter<CandidatoRepository>, @repository.getter('PlazaRepository') protected plazaRepositoryGetter: Getter<PlazaRepository>, @repository.getter('SeleccionRepository') protected seleccionRepositoryGetter: Getter<SeleccionRepository>,
  ) {
    super(Empleadosrrhh, dataSource);
    this.seleccions = this.createHasManyRepositoryFactoryFor('seleccions', seleccionRepositoryGetter,);
    this.registerInclusionResolver('seleccions', this.seleccions.inclusionResolver);
    this.plazas = this.createHasManyRepositoryFactoryFor('plazas', plazaRepositoryGetter,);
    this.registerInclusionResolver('plazas', this.plazas.inclusionResolver);
    this.candidatoes = this.createHasManyRepositoryFactoryFor('candidatoes', candidatoRepositoryGetter,);
    this.registerInclusionResolver('candidatoes', this.candidatoes.inclusionResolver);
  }
}
