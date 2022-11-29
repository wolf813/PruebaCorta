import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Seleccion, SeleccionRelations} from '../models';

export class SeleccionRepository extends DefaultCrudRepository<
  Seleccion,
  typeof Seleccion.prototype.id,
  SeleccionRelations
> {
  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource,
  ) {
    super(Seleccion, dataSource);
  }
}
