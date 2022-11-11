import { ReactNode } from "react"

interface ModalProps{
    children: React.ReactNode,
    title: string,
    onClose: ()=>void
}

export default function Modal({children,title,onClose} : ModalProps) {
  return (
    <>
    <div className='fixed bg-black/50 top-0 right-0 bottom-0 left-0' onClick={onClose}></div>
    <div className='bg-white w-[500px] absolute top-10 left-1/2 -translate-x-1/2'>
      <h2>{title}</h2>
      {children}
    </div>
  </>
  )
}
