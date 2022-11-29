import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Plaza, PlazaRelations} from '../models';

export class PlazaRepository extends DefaultCrudRepository<
  Plaza,
  typeof Plaza.prototype.id,
  PlazaRelations
> {
  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource,
  ) {
    super(Plaza, dataSource);
  }
}
