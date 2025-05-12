import { AxiosInstance } from 'axios';

export async function fetchAllPaginatedData(apiInstance: AxiosInstance, endpoint: string) {
  let allData: any[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await apiInstance.get(endpoint, { params: { page } });
    const { data, pagination } = response.data;
    debugger;
    
    allData = [...allData, ...data];
    totalPages = pagination?.totalPages || 1;
    page++;
  } while (page <= totalPages);

  return allData;
}
