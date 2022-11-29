import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'cpnn',
  connector: 'mongodb',
  url: 'mongodb+srv://admin:<password>@cluster0.kdhcswl.mongodb.net/Seleccion',
  host: 'mongodb+srv://admin:<password>@cluster0.kdhcswl.mongodb.net/Seleccion',
  port: 27018,
  user: 'admin',
  password: 'admin',
  database: 'seleccion',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CpnnDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cpnn';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cpnn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
