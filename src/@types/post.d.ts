declare type CategoryType = {
  id: number;
  name: string;
  posts_views: number;
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
  page_views: number;
};

declare type MediaType = {
  id: number;
  title: string;
  media_details: {
    sizes: {
      medium_large: {
        source_url: string;
      };
      medium: {
        source_url: string;
      };
    };
  };
};
