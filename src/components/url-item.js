'use client';
import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import { Code, IconButton } from '@radix-ui/themes';
import { Link2Icon, CopyIcon, CheckIcon } from '@radix-ui/react-icons';

import useTimeout from '@/hooks/use-timeout';

const FEEDBACK_DURATION = 3000;

export default function UrlItem({ url, onCopy }) {
    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    const { start } = useTimeout(
        () => {
            setCopied(false);
        },
        FEEDBACK_DURATION,
        { autoRun: false },
    );

    const handleCopy = () => {
        setCopied(true);
        start();
        copyToClipboard(url);
    };

    useEffect(() => {
        if (copiedText) {
            onCopy?.(copiedText);
        }
    }, [copiedText]);

    return (
        <Code className='flex flex-row items-center gap-2 pl-2 pr-0' color={copied && 'green'}>
            <div>
                <Link2Icon width='15' height='15' />
            </div>
            <div className='w-auto break-all line-clamp-1'>{url}</div>
            <IconButton size='1' variant='soft' color={copied && 'green'} onClick={handleCopy}>
                {copied ? (
                    <CheckIcon width='18' height='18' />
                ) : (
                    <CopyIcon width='15' height='15' />
                )}
            </IconButton>
        </Code>
    );
}
