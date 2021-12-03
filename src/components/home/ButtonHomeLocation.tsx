import React, {FC, useCallback} from 'react';
import {ImHome} from 'react-icons/im'
import {useAppSelector} from "@/hooks";
import Button from "@/components/ui/Button";
import { PRIMARY_COLOR } from '@/const';

interface IButtonHomeLocation {
  displayMap: google.maps.Map
}

const ButtonHomeLocation: FC<IButtonHomeLocation> = ({displayMap}) => {

  const userPlaceLocation = useAppSelector(state => state.taxi.userPlaceLocation)

  const handlerClick = useCallback(() => displayMap.setCenter(userPlaceLocation),[displayMap])

  return (
    <Button
      clickHandler={handlerClick}
      className="absolute right-5 top-5 bg-white rounded-full p-2 outline-none hover:opacity-90"
    >
      <ImHome size={24} color={PRIMARY_COLOR}/>
    </Button>
  );
};

export default React.memo(ButtonHomeLocation);