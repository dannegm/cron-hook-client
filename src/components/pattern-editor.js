/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { Text, Code, TextField, IconButton, Skeleton } from '@radix-ui/themes';
import { ClockIcon, LightningBoltIcon } from '@radix-ui/react-icons';

import usePatternGenerator from '@/hooks/use-pattern-generator';
import useTeletype from '@/hooks/use-teletype';

export default function PatternEditor({ onChange }) {
    const [pattern, thinking, fetchPattern] = usePatternGenerator();

    const placeholder = useTeletype({
        texts: [
            // ...
            'Cada tres días a las 6pm',
            'Lunes, martes y viernes a las 10:30 am',
            'Un día sí y un día no',
            'Cada 3 horas',
            'Cada 3 meses los días 15',
        ],
    });
    const [message, setMessage] = useState('');

    const handleFetchPattern = ev => {
        ev.preventDefault();
        fetchPattern({ message });
    };

    const handleChange = ev => {
        setMessage(ev.target.value);
    };

    useEffect(() => {
        onChange?.({
            pattern,
            patternDescription: message,
        });
    }, [pattern]);

    return (
        <div className='flex flex-col gap-4 items-center rounded-md bg-white text-black p-4'>
            <Text size='4' weight='medium'>
                ¿Cáda cuándo debe ejecutarse?
            </Text>

            <form className='w-full px-8' onSubmit={handleFetchPattern}>
                <TextField.Root
                    className='light bg-white'
                    variant='surface'
                    size='3'
                    placeholder={placeholder}
                    radius='full'
                    value={message}
                    onChange={handleChange}
                >
                    <TextField.Slot>
                        <ClockIcon height='16' width='16' />
                    </TextField.Slot>
                    <TextField.Slot>
                        <IconButton size='1' onClick={handleFetchPattern}>
                            <LightningBoltIcon height='14' width='14' />
                        </IconButton>
                    </TextField.Slot>
                </TextField.Root>
            </form>

            {(pattern || thinking) && (
                <Skeleton loading={thinking}>
                    <Code
                        className='light bg-indigo-200 px-8 py-2 rounded-full'
                        color='indigo'
                        size='6'
                        variant='outline'
                    >
                        {pattern || '* * * * * *'}
                    </Code>
                </Skeleton>
            )}
        </div>
    );
}
