import { createPortal } from 'react-dom'
import './Modal.style.css'
import { useRef, useEffect } from 'react'

const Modal = ({ children, open }) => {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current

    if (!modal) return

    if (open && !modal.open) {
      modal.showModal()
    } else if (!open && modal.open) {
      modal.close()
    }
  }, [open])

  return createPortal(<dialog ref={dialog}>{children}</dialog>, document.getElementById('modal'))
}
export { Modal }
