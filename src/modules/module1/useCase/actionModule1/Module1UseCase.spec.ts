import { describe, expect, it } from 'vitest';
import { ServiceModule1 } from '../../repositories/actionModule1/implementation/ServiceModule1';
import { Module1UseCase } from './Module1UseCase';

describe('Send ping and return pong', () => {
  it('Should return pong when send ping', async () => {
    //For testing the database can't be the same as the production, create a mock or in data chache
    const serviceModule = new ServiceModule1();
    const module1UseCase = new Module1UseCase(serviceModule);

    const pong = await module1UseCase.execute('ping');
    console.log(pong);

    expect(pong).toEqual('pong');
  });
});
