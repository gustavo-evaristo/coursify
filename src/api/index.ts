import axios, {AxiosInstance} from 'axios';

class Api {
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: 'https://blog.coursify.me/wp-json/wp/v2',
      timeout: 30000,
    });
  }

  public async getPosts(): Promise<PostType[]> {
    try {
      const {data} = await this.request.get('/posts');
      return data;
    } catch (err) {
      return [];
    }
  }

  public async getCategories(): Promise<CategoryType[]> {
    try {
      const {data} = await this.request.get('/categories');
      return data;
    } catch (err) {
      return [];
    }
  }

  public async getMedia(id: number): Promise<MediaType> {
    try {
      const {data} = await this.request.get(`/media/${id}`);
      return data;
    } catch (err) {
      return null;
    }
  }
}

export default new Api();
