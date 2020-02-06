export interface LinieProductie {
  line_id: string;
  id?: string;
  createdAt?: string;
  name?: string;
  sef_linie?: string;
}

export interface LiniiProductie {
  startIndex: number,
  totalResults: number,
  itemsPerPage: number,
  items?: LinieProductie[]
}