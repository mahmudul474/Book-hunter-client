
interface Book {
  _id?: string;
    authorName: string;
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews: Review[];
  
  }
  
  interface Review {
    img?: string;
    text: string;
    rating: number;
  }
  
  export type { Book, Review };
  