import dotenv from 'dotenv';
import API from '../src/api';

dotenv.config();
let api;
describe('example test', () => {
  it('should init', async () => {
    api = new API({ url: 'https://api.fleetbase.io/v1', apiKey: process.env.API_KEY || '' });
    const res = await api.serviceQuotes.get({});
  });
});
