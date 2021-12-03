import React, {FC} from 'react';
import Button from "@/components/ui/Button";
import cn from 'classnames'
import {useAppSelector} from "@/hooks";

const ButtonOrder: FC = () => {
  const {selectedOption, travelTime} = useAppSelector(state => state.taxi)
  const handlerOrdered = () => {
    console.log('Order')
  }

  const classBtnOrder = cn({
    'bg-gray-600 cursor-not-allowed text-gray-300': !selectedOption || !travelTime,
    'bg-black text-sm text-white tracking-wider font-semibold uppercase block mx-auto w-2/3 py-1.5 rounded-md max-w-sm': true,
    'md:text-xl shadow-md': true,
    'hover:opacity-90 focus:opacity-90': selectedOption && travelTime
  })

  return (
    <Button clickHandler={handlerOrdered} className={classBtnOrder} style={{minWidth: '80px'}}>
      Заказать
    </Button>
  );
};

export default ButtonOrder;