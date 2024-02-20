'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import Button from '../../buttons/Button';
import { useAppDispatch } from '@/app/redux/hooks';


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    btnLabel: string;
    title: string;
    bodyElement?: React.ReactElement;
    footerElement?: React.ReactElement;

}
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    btnLabel,
    title,
    bodyElement,
    footerElement
}) => {
   
    const closeFunc = () => {
        onClose()
    }


    const submitFunc = () => {
        onSubmit()
    }
    if(!isOpen){
        return null;
    }
    return (
        <div className='bg-black bg-opacity-70 flex fixed items-center justify-center w-full h-full'>
            <div className='bg-white rounded-lg p-5 w-1/2'>
                <div className='flex items-center justify-between pb-3 mb-3 border-b'>
                    <div className='font-bold text-2xl '>{title}</div>
                    <div onClick={closeFunc}>
                        <IoMdClose size={30} className='cursor-pointer' />
                    </div>
                  
                </div>
                <div>{bodyElement}</div>
                <Button onSubmit={submitFunc}
                    btnLabel={btnLabel}
                />
                <div className='m-3 hover:bg-black hover:text-white transition-all hover:rounded-md'>
                    {footerElement}
                </div>
            </div>
        </div>
    )
}

export default Modal