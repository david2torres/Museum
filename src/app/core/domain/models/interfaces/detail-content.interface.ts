export interface IOPTION_VIEW {
  isPaginator: boolean;
  isCreate: boolean;
  isHeaders: any[];
  isEdit: boolean;
  isSeguimiento: boolean;
  isEvaluate: boolean;
  isSearch: boolean;
  origin: string; // Use for set class header and content based in component
}

export interface IStatusClassMap {
  [key: string]: string;
}

export interface IFilterType {
  key: string | null;
}
