import React from 'react'
import { createPortal } from 'react-dom';

export default function Modal({isOpen,name}) {
  if(!isOpen) return null;
  return createPortal(
    <div>
        <div>
            <h1>This is a modal</h1>
        </div>
    </div>,document.getElementById("adfar"))
}
