import React, {FC, useEffect, useRef, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {useActions, useAppSelector} from "@/hooks";
import {IOption} from "$/api/types";
import ButtonHomeLocation from "@/components/home/ButtonHomeLocation";
import {MAP_OPTIONS} from "@/const";
import {ToastType, useToast} from "@/contexts";

interface IMap {
  map: google.maps.Map,
  maps: any
}

interface IMyMap {
  options: IOption[],
}

const MyMap: FC<IMyMap> = ({options}) => {
  const {currentLocation: center, from, to, selectedOption} = useAppSelector(state => state.taxi)
  const {setTravelDistance, setTravelTime, setSelectedOption} = useActions()
  const [displayMap, setDisplayMap] = useState<IMap>({} as IMap)
  const {showToast} = useToast()

  //save directionRender for clear old map route
  const directionRenderRef = useRef<google.maps.DirectionsRenderer>()

  const renderPath = async () => {
    if (directionRenderRef.current) directionRenderRef.current?.setMap(null)

    if (displayMap) {
      const directionsRenderer: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer()
      const directionsService: google.maps.DirectionsService = new google.maps.DirectionsService()
      directionRenderRef.current = directionsRenderer

      try {
        const route = await directionsService.route({
          origin: from.location,
          destination: to.location,
          travelMode: google.maps.TravelMode.DRIVING
        })

        directionsRenderer.setDirections(route)
        const travelTime = route.routes[0].legs[0]?.duration?.value
        const travelDistance = route.routes[0].legs[0]?.distance?.value

        if (travelDistance && travelTime) {
          setTravelTime(Math.round(travelTime / 60))
          setTravelDistance(travelDistance)
        }

        if (!selectedOption) setSelectedOption(options[0].title)

        directionsRenderer.setOptions({markerOptions: {clickable: false}})
        directionsRenderer.setMap(displayMap.map)
      } catch (e) {
        showToast('Ошибка: невозможно проложить маршрут', ToastType.ERROR)
      }
    }
  }

  useEffect(() => {
    if (from.location?.lng && to.location?.lng && displayMap) {
      renderPath()
    }
  }, [from, to])

  return (
    <div className="fixed inset-0">
      <GoogleMapReact
        bootstrapURLKeys={{key: String(process.env.GOOGLE_API_KEY)}}
        center={center}
        defaultZoom={13}
        options={MAP_OPTIONS}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setDisplayMap}
      />
      <ButtonHomeLocation displayMap={displayMap?.map}/>
    </div>
  );
};

export default React.memo(MyMap);