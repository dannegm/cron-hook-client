'use client';
import { useState } from 'react';
import { Spinner } from '@radix-ui/themes';
import { EraserIcon } from '@radix-ui/react-icons';

import cronHookApi from '@/services/cronHookApi';

import WarningButton from './warning-button';

export default function DeleteCron({ id }) {
    const [loading, setLoading] = useState(false);

    const deleteCron = async () => {
        setLoading(true);
        await cronHookApi.delete(`/crons/${id}`);
        setLoading(false);
        window.location.href = '/';
    };

    return (
        <WarningButton
            message='Deleting a cron is not possible to revert it, do you want to continue?'
            variant='soft'
            color='red'
            disabled={loading}
            onConfirm={deleteCron}
        >
            <Spinner loading={loading}>
                <EraserIcon />
            </Spinner>
            Delete
        </WarningButton>
    );
}
