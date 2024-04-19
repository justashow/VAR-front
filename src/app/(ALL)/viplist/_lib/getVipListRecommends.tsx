"use client";

import axios from "axios";

export async function getVipListRecommends({
  pageParam = 0,
  searchQuery = "",
}: {
  pageParam?: number;
  searchQuery?: string;
}) {
  const encodedSearchQuery = encodeURIComponent(searchQuery);
  const searchPart = encodedSearchQuery ? `&search=${encodedSearchQuery}` : "";

  const url = `${process.env.BASE_URL}/api/all/vipList?page=${pageParam}&size=10${searchPart}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch data");
  }
}
