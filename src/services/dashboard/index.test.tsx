import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllPayments } from './';
import Api from '../../network/axiosClient';

const mock = new MockAdapter(Api);

describe('getAllPayments with Interceptors', () => {
  afterEach(() => {
    mock.reset(); // Reset mock adapter after each test
  });

  it('should fetch payments data successfully', async () => {
    // Arrange
    const mockData = { data: [{ id: 1, amount: 100 }, { id: 2, amount: 200 }] };
    mock.onGet('/payments').reply(200, mockData);

    // Act
    const response = await getAllPayments();

    // Assert
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockData);
  });
});
