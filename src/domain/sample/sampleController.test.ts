import statusCodes from '../../../common/messages/statusCodes';
import request from 'supertest';
import app from '../../../exypress/loaders/server';

describe('sample test', () => {
  test('should return sample', async () => {
    const resp = await request(app).get('/test/').send();

    expect(resp.status).toBe(statusCodes.OK);
    expect(resp.body).toEqual({ id: 1, name: 'dgt' });
    resp.body;
  });
});
