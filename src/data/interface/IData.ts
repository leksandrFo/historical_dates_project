interface IDataItem {
  year: number
  event: string
}

export interface IData {
  id: number
  category: string
  events: IDataItem[]
}
