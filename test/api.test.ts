import dotenv from 'dotenv';
import API from '../src/api';

// DO NOT CHANGE: this is the sandbox keys for lalamove, if you change it could become live because only live fleetbase keys work
const facilitator = 'integrated_vendor_1lqnYLY';

dotenv.config();
const api = new API({
  url: 'https://api.fleetbase.io/v1',
  apiKey: process.env.API_KEY || '',
  development: false,
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
      service_type: 'MOTORCYCLE',
      facilitator,
      is_route_optimized: true,
      waypoints: [
        {
          name: 'stop 1',
          street1: '台北市大安區信義路四段235號',
          location: {
            type: 'Point',
            coordinates: [121.55347171831437, 25.033705734054173],
          },
          phone: '+886970699044',
        },
        {
          name: 'stop 2',
          street1: '106台北市大安區復興南路二段11之1號',
          location: {
            type: 'Point',
            coordinates: [121.54404003493946, 25.033768394640358],
          },
          phone: '+886970699044',
          remarks: 'testing comments',
        },
        {
          name: 'stop 3',
          street1: '100台北市中正區杭州南路一段131巷35-1號1樓',
          location: {
            type: 'Point',
            coordinates: [121.53007676560996, 25.036599784048644],
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
  let orderId = '';
  it('should create an order', async () => {
    // retrieve service quotes
    const resServiceQuotes = await api.serviceQuotes.get({
      service_type: 'MOTORCYCLE',
      facilitator,
      is_route_optimized: true,
      schedule_at: new Date().toISOString(),
      language: 'zh-TW',
      waypoints: [
        {
          name: 'stop 1',
          street1: '台北市大安區信義路四段235號',
          location: {
            type: 'Point',
            coordinates: [121.55347171831437, 25.033705734054173],
          },
          phone: '+886970699044',
        },
        {
          name: 'stop 2',
          street1: '106台北市大安區復興南路二段11之1號',
          location: {
            type: 'Point',
            coordinates: [121.54404003493946, 25.033768394640358],
          },
          phone: '+886970699044',
          remarks: 'testing comments',
        },
        {
          name: 'stop 3',
          street1: '100台北市中正區杭州南路一段131巷35-1號1樓',
          location: {
            type: 'Point',
            coordinates: [121.53007676560996, 25.036599784048644],
          },
          phone: '+886970699044',
          remarks: 'testing comments again',
        },
      ],
    });

    const serviceQuoteId = resServiceQuotes[0].id;

    // create order
    const resOrder = await api.orders.create({
      service_quote: serviceQuoteId,
    });

    orderId = resOrder.id;
    expect(resOrder).toEqual(expect.any(Object));
  });

  it.skip('should cancel an order', async () => {
    const resCancel = await api.orders.cancel({
      id: orderId,
    });
    expect(resCancel);
  });

  it('should delete an order', async () => {
    const resServiceQuotes = await api.serviceQuotes.get({
      service_type: 'MOTORCYCLE',
      facilitator,
      is_route_optimized: true,
      schedule_at: new Date().toISOString(),
      language: 'zh-TW',
      waypoints: [
        {
          name: 'stop 1',
          street1: '台北市大安區信義路四段235號',
          location: {
            type: 'Point',
            coordinates: [121.55347171831437, 25.033705734054173],
          },
          phone: '+886970699044',
        },
        {
          name: 'stop 2',
          street1: '106台北市大安區復興南路二段11之1號',
          location: {
            type: 'Point',
            coordinates: [121.54404003493946, 25.033768394640358],
          },
          phone: '+886970699044',
          remarks: 'testing comments',
        },
        {
          name: 'stop 3',
          street1: '100台北市中正區杭州南路一段131巷35-1號1樓',
          location: {
            type: 'Point',
            coordinates: [121.53007676560996, 25.036599784048644],
          },
          phone: '+886970699044',
          remarks: 'testing comments again',
        },
      ],
    });

    const serviceQuoteId = resServiceQuotes[0].id;

    // create order
    const resOrder = await api.orders.create({
      service_quote: serviceQuoteId,
    });

    const resDelete = await api.orders.delete({
      id: resOrder.id,
    });
    expect(resDelete);
  });
});
