"use client";

export async function getVipListRecommends({
  pageParam = 0,
  searchQuery = "",
}: {
  pageParam?: number;
  searchQuery?: string;
}) {
  const searchPart: string = searchQuery ? `&search=${searchQuery}` : "";
  const url = `https://won-backserver.kro.kr:8081/api/all/vipList?page=${pageParam}&size=10${searchPart}`;

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
