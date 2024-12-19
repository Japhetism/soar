import Card, { CardProps } from "../../../components/card"

interface CardItemProps extends CardProps {
  title: string
  titleLeftAlign?: boolean
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  balance,
  name,
  expiryDate,
  number,
  isBlack,
  titleLeftAlign = false
}) => {

  const extraClasses = titleLeftAlign ? "flex flex-end" : "";
  const extraSpanClasses = titleLeftAlign ? "text-[17px] text-right ml-auto" : "text-[22px]";

  return (
    <div>
      <div className={`${extraClasses} mb-10`}>
        <span className={`text-[#343C6A] ${extraSpanClasses} font-inter font-semibold`}>{title}</span>
      </div>
      <Card
        balance={balance}
        name={name}
        expiryDate={expiryDate}
        number={number}
        isBlack={isBlack}
      />
    </div>
  )
}

export default CardItem