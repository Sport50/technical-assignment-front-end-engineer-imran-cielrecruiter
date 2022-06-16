export interface formValues {
  title: string;
  authorEmail: string;
  body: string;
}

export interface articalInt {
  _id: string;
  title: string;
  authorEmail: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface articalProps {
  artical: {
    _id: string;
    title: string;
    authorEmail: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
