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
            'Ogni tre giorni alle 18:00',
            'Les jours pairs à 8 heures du matin',
            'Jede zweite Woche freitags um 9 Uhr morgens',
            'A cada hora às 45 minutos',
            'Saturdays at 10:30pm',
            'El día de Navidad a medianoche',
            'A cada 15 minutos',
            'Ogni ora alle 45 minuti',
            'Jedes Jahr am 29. Februar um 6 Uhr morgens',
            'Les jours ouvrables à 7h30 du matin',
            'Every three days at 6pm',
            'Ogni 4 ore e 30 minuti',
            'O último dia de cada mês às 23:59',
            'Los días laborables a las 7:30am',
            'Every two weeks on Fridays at 9am',
            'Chaque mois le 20 à 12 heures',
            'Ogni due settimane il venerdì alle 9:00',
            'Alle 15 Minuten',
            'Toutes les 15 minutes',
            'I giorni lavorativi alle 7:30',
            'A cada três dias às 18:00',
            'Cada 15 minutos',
        ],
    });
    const [message, setMessage] = useState('');

    const handleFetchPattern = ev => {
        if (message !== '') {
            ev.preventDefault();
            fetchPattern({ message });
        }
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
                        <IconButton size='1' disabled={message === ''} onClick={handleFetchPattern}>
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
