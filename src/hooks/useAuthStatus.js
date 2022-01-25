import React, { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth"

export const useAuthStatus = () => {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ checkingStatus, setCheckingStatus ] = useState(true)

  // Création du useRef pour régler le problème de memory leak 
  const isMounted = useRef(true)

  useEffect(() => {
    // Après création du useRef au-dessus, on pose le if dessous. En gros, si il trouve la référence à l'élément, il bosse normalement, sinon il sort avec le return
    if (isMounted) {

      const auth = getAuth()

      onAuthStateChanged(auth, user => {
        if (user) {
          setLoggedIn(true)
        }
        setCheckingStatus(false)
      })
    }

    // Return pour régler le problème de memory leak
    return () => {
      isMounted.current = false
    }
    // On rentre dans les dépendances du useEffect le useRef
  }, [ isMounted ])

  return { loggedIn, checkingStatus };
};
