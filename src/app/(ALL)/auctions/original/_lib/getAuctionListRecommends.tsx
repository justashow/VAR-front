"use client";

import axios from "axios";

export async function getAuctionListRecommends({
  pageParam = 0,
  searchQuery = "",
  sort = "",
}) {
  const url = `${process.env.BASE_URL}/api/all/auction/generalList?page=${pageParam}&size=10&sortType=${sort}&search=${searchQuery}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // 데이터만 반환
  } catch (error) {
    console.error(error.response || error.message);
    throw new Error("Failed to fetch data");
  }
}
