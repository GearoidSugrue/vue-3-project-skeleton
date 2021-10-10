import { useHttp } from './use-http';
import axios from 'axios';

jest.mock('axios', () => ({
  create: jest.fn(() => 'mock http instance'),
}));

jest.mock('axios-retry', () => jest.fn());

describe('user-http', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  test('should create and return an axios http instance', () => {
    (axios.create as jest.Mock).mockReturnValue('http instance');
    const http = useHttp();
    expect(axios.create).toHaveBeenCalledWith({ timeout: 30000 });
    expect(http).toEqual({ http: 'http instance' });
  });

  test('should only create a http instance once', () => {
    (axios.create as jest.Mock).mockReturnValue('http instance');
    useHttp();
    expect(axios.create).toHaveBeenCalledTimes(1);
    useHttp();
    expect(axios.create).toHaveBeenCalledTimes(1);
  });
});
