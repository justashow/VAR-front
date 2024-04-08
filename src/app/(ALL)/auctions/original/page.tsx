// import AuctionBox from "@/app/_component/Auction/AuctionBox";

import styles from "./page.module.css";
import Carousel from "@/app/_component/Carousel/Carousel";
import Link from "next/link";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
// import AuctionListRecommends from "./_component/AuctionListRecommends";
import { getAuctionListRecommends } from "./_lib/getAuctionListRecommends";
import { SearchProvider } from "./_component/SearchProvider";
// import SearchBar from "./_component/SearchBar";

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["Vip"],
    queryFn: getAuctionListRecommends,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <div className={styles.CarouselContainer}>
        <Carousel />
      </div>
      <div className={styles.AuctionListInfo}>
        <h1>일반 경매</h1>
        <div>
          <button className="btn-basic">
            <Link href="/addauction">경매 올리기</Link>
          </button>
        </div>
      </div>
      <HydrationBoundary state={dehydratedState}>
        <SearchProvider>
          <div className={styles.ListUtil}>
            {/* <SearchBar /> */}
            <div className={styles.ListUtilButton}>
              <button className="btn-basic">인기경매순</button>
              <button className="btn-basic">마감임박순</button>
              <button className="btn-basic">신규경매순</button>
            </div>
          </div>

          <div className={styles.ListWrapper}>
            <div className={styles.VipList}>
              {/* <AuctionListRecommends /> */}
            </div>
          </div>
        </SearchProvider>
      </HydrationBoundary>
    </div>
  );
}
