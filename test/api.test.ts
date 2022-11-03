import dotenv from 'dotenv';
import API from '../src/api';

dotenv.config();
const api = new API({
  url: 'https://api.fleetbase.io/v1',
  apiKey: process.env.API_KEY || '',
  development: true,
});

describe('places', () => {
  it('should search for places', async () => {
    const res = await api.places.search({
      query: 'Da’an District',
      latitude: 25.033,
      longitude: 121.5654,
      language: 'zh-TW',
    });
    expect(res).toEqual(expect.any(Array));
  });

  it('should query for places', async () => {
    const res = await api.places.query({
      limit: 1,
    });
    expect(res).toEqual(expect.any(Array));
  });
});

describe('service quotes', () => {
  it('should retrieve service quotes', async () => {
    const res = await api.serviceQuotes.get({
      service_type: 'VAN',
      facilitator: 'lalamove',
      is_route_optimized: true,
      waypoints: [
        {
          name: 'stop 1',
          location: {
            type: 'Point',
            coordinates: [121.526333, 25.036688],
          },
          phone: '+886970699044',
        },
        {
          name: 'stop 2',
          location: {
            type: 'Point',
            coordinates: [121.545474, 25.035209],
          },
          phone: '+886970699044',
          remarks: 'testing comments',
        },
        {
          name: 'stop 3',
          location: {
            type: 'Point',
            coordinates: [121.541398, 25.040692],
          },
          phone: '+886970699044',
          remarks: 'testing comments again',
        },
      ],
    });

    expect(res).toEqual(expect.any(Array));
  });
});

describe('orders', () => {
  it('should create an order', async () => {
    // retrieve service quotes
    const resServiceQuotes = await api.serviceQuotes.get({
      service_type: 'VAN',
      facilitator: 'lalamove',
      is_route_optimized: true,
      waypoints: [
        {
          name: 'stop 1',
          location: {
            type: 'Point',
            coordinates: [121.526333, 25.036688],
          },
          phone: '+886970699044',
        },
        {
          name: 'stop 2',
          location: {
            type: 'Point',
            coordinates: [121.545474, 25.035209],
          },
          phone: '+886970699044',
          remarks: 'testing comments',
        },
        {
          name: 'stop 3',
          location: {
            type: 'Point',
            coordinates: [121.541398, 25.040692],
          },
          phone: '+886970699044',
          remarks: 'testing comments again',
        },
      ],
    });

    const serviceQuoteId = resServiceQuotes[0].id;
    console.log(serviceQuoteId);
    // create order
    const resOrder = await api.orders.create({
      service_quote: serviceQuoteId,
    });

    console.log(resOrder);
    expect(resOrder).toEqual(expect.any(Object));
  });
});
