import React from 'react'
import { useParams } from 'react-router-dom'

export default function Numbers() {
  const params = useParams()
  console.log(params)

  return (
    <div>{params.numbers}
    <h1>numbers component</h1></div>

  )
}
