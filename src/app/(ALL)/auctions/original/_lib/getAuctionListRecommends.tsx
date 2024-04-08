"use client";

export async function getAuctionListRecommends({
  pageParam = 0,
  searchQuery = "",
}: {
  pageParam?: number;
  searchQuery?: string;
}) {
  const searchPart: string = searchQuery ? `&search=${searchQuery}` : "";
  const url = `https://won-backserver.kro.kr:8081/api/all/auction/generalList?page=${pageParam}&size=10`;
  // &sortType={정렬타입}&search=검색어`;

  const res: Response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
