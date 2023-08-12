import React from 'react';
import { Spacer, Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { MdDeleteOutline } from 'react-icons/md';
import { RxDragHandleHorizontal } from 'react-icons/rx';
import { BiSolidEdit } from 'react-icons/bi';

export default function InterfaceItem(props) {
    const { name, deleteInterface, ...drag } = props;
    const { t } = useTranslation();

    return (
        <div className='bg-content2 rounded-md px-[10px] py-[20px] flex justify-between'>
            <div className='flex'>
                <div
                    {...drag}
                    className='text-2xl my-auto'
                >
                    <RxDragHandleHorizontal />
                </div>

                <Spacer x={2} />
                <img
                    src={`${name}.svg`}
                    className='h-[24px] my-auto'
                />
                <Spacer x={2} />
                <h2 className='my-auto'>{name}</h2>
            </div>
            <div className='flex'>
                <Button
                    isIconOnly
                    size='sm'
                    variant='light'
                >
                    <BiSolidEdit className='text-2xl' />
                </Button>
                <Spacer x={2} />
                <Button
                    isIconOnly
                    size='sm'
                    variant='light'
                    onClick={() => {
                        deleteInterface(name);
                    }}
                >
                    <MdDeleteOutline className='text-2xl' />
                </Button>
            </div>
        </div>
    );
}
