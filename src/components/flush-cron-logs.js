'use client';
import { useState } from 'react';
import { Spinner } from '@radix-ui/themes';
import { EraserIcon } from '@radix-ui/react-icons';

import cronHookApi from '@/services/cronHookApi';

import WarningButton from './warning-button';

export default function FlushCronLogs({ id }) {
    const [loading, setLoading] = useState(false);

    const flushLogs = async () => {
        setLoading(true);
        await cronHookApi.get(`/crons/${id}/logs/flush`);
        setLoading(false);
        window.location.reload();
    };

    return (
        <WarningButton
            message='Flushin logs is not possible to revert it, do you want to continue?'
            variant='soft'
            color='crimson'
            disabled={loading}
            onConfirm={flushLogs}
        >
            <Spinner loading={loading}>
                <EraserIcon />
            </Spinner>
            Flush Logs
        </WarningButton>
    );
}
