import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Candidato, CandidatoRelations} from '../models';

export class CandidatoRepository extends DefaultCrudRepository<
  Candidato,
  typeof Candidato.prototype.ID,
  CandidatoRelations
> {
  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource,
  ) {
    super(Candidato, dataSource);
  }
}
