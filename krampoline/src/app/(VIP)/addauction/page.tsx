import AddAuctionForm from "./_component/AddAuctionForm";
import AddAuctionWarning from "./_component/AddAuctionWarning";

const page = () => {
  return (
    <div>
      <AddAuctionWarning />
      <AddAuctionForm />
    </div>
  );
};

export default page;
