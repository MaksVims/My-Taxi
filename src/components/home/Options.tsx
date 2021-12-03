import React, {FC} from 'react';
import {IOption} from "$/api/types";
import Image from "next/image";
import {useActions, useAppSelector} from "@/hooks";
import cn from "classnames";
import {getFormatTravelPrice} from "@/utils";

interface IOptions {
  options: IOption[]
}

const Options: FC<IOptions> = ({options}) => {
  const {selectedOption, travelTime} = useAppSelector(state => state.taxi)
  const {setSelectedOption} = useActions()

  return (
    <div className="mb-5 flex flex-nowrap overflow-x-scroll hidden-scroll">
      <ul className="flex flex-nowrap w-full xl:justify-between">
        {options.map(option => (
          <li
            className="mr-3 last:mr-0 bg-white cursor-pointer rounded-md flex-shrink-0"
            style={{minWidth: '110px'}}
            key={option.id}
          >
            <button
              className={cn('w-full p-2 text-left transition-opacity opacity-1 duration-300 outline-none',
                {'opacity-50 transition-opacity duration-300': selectedOption !== option.title})}
              onClick={() => setSelectedOption(option.title)}
              onPointerDown={e => e.preventDefault()}
            >
              <div className="mx-auto relative w-9 h-9 md:h-11 md:w-11 mb-1">
                <Image
                  src={option.url}
                  layout="fill"
                  alt={option.title}
                  className="flex-shrink-0"
                />
              </div>
              <span className="block text-gray-500 text-sm">
                {option.title}
              </span>
              <span className="text-black font-semibold">
                {getFormatTravelPrice(option.multiplier, travelTime)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Options);