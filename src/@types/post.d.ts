declare type CategoryType = {
  id: number;
  name: string;
};

declare type PostType = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  media_url: string;
};

declare type MediaType = {
  id: number;
  title: string;
  media_details: {
    sizes: {
      medium_large: {
        source_url: string;
      };
    };
  };
};
