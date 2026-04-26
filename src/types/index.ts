export type WithChildren<T = unknown> = T & {
  children: React.ReactNode
}

export type PageProps<
  TParams = Record<string, string>,
  TSearchParams = Record<string, string | string[] | undefined>,
> = {
  params: Promise<TParams>
  searchParams: Promise<TSearchParams>
}

export type ApiResponse<T> = {
  data: T
  message?: string
}

export type ApiError = {
  message: string
  status: number
}
