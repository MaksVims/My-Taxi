import {useEffect, useState} from "react";

export function useCurrentLocation(callback: (position: GeolocationPosition) => void) {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      callback(position)
      setLoading(false)
    })
  }, [])

  return loading
}