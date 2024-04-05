'use client';
import { useState } from 'react';

import { Card, Heading } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '@/helpers/utils';

export default function Collapsable({ title, expanded, children }) {
    const [collapsed, setCollapsed] = useState(expanded);

    return (
        <Card>
            <div
                className='flex flex-row justify-between items-center cursor-pointer'
                onClick={() => setCollapsed(c => !c)}
            >
                <Heading size='2'>{title}</Heading>
                <ChevronDownIcon
                    width='20px'
                    height='20px'
                    className={cn('transition-transform', {
                        'rotate-180': collapsed,
                    })}
                />
            </div>

            {collapsed && <div className='mt-2'>{children}</div>}
        </Card>
    );
}
