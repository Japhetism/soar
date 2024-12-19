import CardItem from "./components/cardItem";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <CardItem
          title="My Cards"
          balance="$5,756"
          name="Eddy Cusuma"
          expiryDate="12/22"
          number="3778 **** **** 1234"
        />
        <CardItem
          title="See All"
          balance="$5,756"
          name="Eddy Cusuma"
          expiryDate="12/22"
          number="3778 **** **** 1234"
          isBlack={false}
          titleLeftAlign
        />
        <CardItem
          title="Recent Transactions"
          balance="$5,756"
          name="Eddy Cusuma"
          expiryDate="12/22"
          number="3778 **** **** 1234"
        />
      </div>
    </>
  )
}

export default Dashboard;