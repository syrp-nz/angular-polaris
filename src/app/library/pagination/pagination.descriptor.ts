export interface PaginationDescriptor {
  hasNext?: boolean,
  hasPrevious?: boolean,
  nextURL?: string,
  previousURL?: string,
  onNext?(): void,
  onPrevious?(): void,
}
