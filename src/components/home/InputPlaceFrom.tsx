import React, {FC, useCallback} from 'react';
import SearchPlaceInput from "@/components/ui/SearchPlaceInput";
import {Direction, TLocation} from "@/types";
import {useActions} from "@/hooks";

const InputPlaceFrom: FC = () => {
  const {setFrom, setCurrentLocation} = useActions()

  const callbackSelectedAddress = useCallback((address: string, location: TLocation) => {
    setFrom({address, location})
    setCurrentLocation(location)
  }, [])

  return (
    <SearchPlaceInput
      type={Direction.FROM}
      cbSelectedAddress={callbackSelectedAddress}
    />
  );
};

export default React.memo(InputPlaceFrom);