import React from "react";
import CardChip from "../../assets/images/cardchip.png";
import BlackCardChip from "../../assets/images/cardchipblack.png";
import CARD_ICON_SVG from "../../assets/icons/cardIcon";

export interface CardProps {
  balance: string
  name: string
  expiryDate: string
  number: string
  isBlack?: boolean
}

const Card: React.FC<CardProps> = ({
  balance,
  name,
  expiryDate,
  number,
  isBlack = true,
}) => {
  const extraClasses = isBlack ? "bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white" : "bg-[#FFFFFF] text-[#343C6A]"
  const headerClasses = isBlack ? "text-[#FFFFFFB2]" : "text-[#718EBF]"
  const valueClasses = isBlack ? "text-[#FFFFFF]" : "text-[#343C6A]"
  return (
    <div className="w-[350px] h-[235px]">
      <div className={`${extraClasses} rounded-[25px] shadow-lg`}>
        <div className="p-6 relative">
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className={`${headerClasses} text-xs font-normal`}>Balance</p>
              <p className={`${valueClasses} text-xl font-semibold`}>{balance}</p>
            </div>
            <img src={isBlack ? CardChip : BlackCardChip} alt="" className="w-[34.77px] h-[34.77px]" />
          </div>
          <div className="flex flex-start space-x-12 text-gray-300">
            <div>
              <p className={`${headerClasses} text-xs font-normal uppercase`}>Card Holder</p>
              <p className={`${valueClasses} text-[15px] font-semibold`}>{name}</p>
            </div>
            <div>
              <p className={`${headerClasses} text-xs font-normal uppercase`}>Valid Thru</p>
              <p className={`${valueClasses} text-[15px] font-semibold`}>{expiryDate}</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-row mb-4 justify-between ${extraClasses} ${!isBlack ? "border-t-[1px] border-gray-100" : ""} p-6 rounded-b-[25px]`}>
          <p className={`${valueClasses} text-[22px] font-semibold`}>{number}</p>
          <CARD_ICON_SVG color="#9199AF" />
        </div>
      </div>
    </div>
  );
};

export default Card;
