'use client';
import { useState } from 'react';

import { Card, Heading } from '@radix-ui/themes';
import { ChevronUpIcon } from '@radix-ui/react-icons';

import { cn } from '@/helpers/utils';

export default function Collapsable({ title, expanded, children }) {
    const [collapsed, setCollapsed] = useState(expanded);

    return (
        <Card>
            <div
                className='flex flex-row justify-between items-center cursor-pointer max-h-60'
                onClick={() => setCollapsed(c => !c)}
            >
                <Heading size='2'>{title}</Heading>
                <ChevronUpIcon
                    width='20px'
                    height='20px'
                    className={cn('transition-transform', {
                        'rotate-180': !collapsed,
                    })}
                />
            </div>

            <div
                className={cn('grid grid-rows-[0fr] transition-all ease-in-out duration-300', {
                    'grid-rows-[1fr] mt-2': collapsed,
                })}
            >
                <div className='block overflow-hidden'>{children}</div>
            </div>
        </Card>
    );
}
