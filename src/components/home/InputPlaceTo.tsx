import React, {FC, useCallback} from 'react';
import {Direction, TLocation} from "@/types";
import SearchPlaceInput from "@/components/ui/SearchPlaceInput";
import {useActions} from "@/hooks";

const InputPlaceTo: FC = () => {
  const {setTo} = useActions()

  const callbackSelectedAddress = useCallback((address: string, location: TLocation) => {
    setTo({address, location})
  }, [])

  return (
    <SearchPlaceInput
      type={Direction.TO}
      cbSelectedAddress={callbackSelectedAddress}
    />
  );
};

export default React.memo(InputPlaceTo);