export interface VipBox {
  follow: boolean;
  profileImgUrl: string;
  vipNickname: string;
  vipRate?: number;
  vipUUID: string;
}

export interface ApiResponse {
  content: VipBox[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
}
