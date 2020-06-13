import { createContext } from 'react'


export const PictureContext = createContext({
    pictureIndex: 0,
    setPicture: (pictureIndex: number) => {}
})