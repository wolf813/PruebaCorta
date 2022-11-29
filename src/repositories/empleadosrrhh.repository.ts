import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CpnnDataSource} from '../datasources';
import {Empleadosrrhh, EmpleadosrrhhRelations} from '../models';

export class EmpleadosrrhhRepository extends DefaultCrudRepository<
  Empleadosrrhh,
  typeof Empleadosrrhh.prototype.id,
  EmpleadosrrhhRelations
> {
  constructor(
    @inject('datasources.cpnn') dataSource: CpnnDataSource,
  ) {
    super(Empleadosrrhh, dataSource);
  }
}
