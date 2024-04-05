'use client';
import { useState } from 'react';
import { Flex, Card, Button, Text, Em, Strong, Separator, Spinner } from '@radix-ui/themes';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

import RequestEditor from './request-editor';
import PatternEditor from './pattern-editor';
import cronHookApi from '@/services/cronHookApi';

export default function CronEditor() {
    const [creating, setCreating] = useState(false);
    const [pattern, setPattern] = useState(null);
    const [request, setRequest] = useState(null);

    const createCron = async data => {
        setCreating(true);

        try {
            await cronHookApi.post('/crons', data);
        } catch (err) {
            console.log(err);
        } finally {
            setCreating(false);
            window.location.reload();
        }
    };

    const handleCreate = () => {
        createCron({
            pattern: pattern.pattern,
            patternDescription: pattern.patternDescription,
            method: request.method,
            hook: request.endpoint,
            headers: request.headers,
            params: request.params,
            body: request.body,
        });
    };

    return (
        <Card>
            <div className='flex flex-col gap-4 p-2'>
                <PatternEditor onChange={val => setPattern(val)} />
                {pattern?.pattern && (
                    <>
                        <Separator orientation='horizontal' size='4' />
                        <Text>
                            Configura el <Strong>URL</Strong> que se va a ejecutar{' '}
                            <Em>{pattern?.patternDescription}</Em>.
                        </Text>
                        <RequestEditor onChange={val => setRequest(val)} />
                        <Separator orientation='horizontal' size='4' />
                        <Flex justify='center'>
                            <Button
                                size='3'
                                radius='full'
                                variant='solid'
                                disabled={!request?.endpoint || creating}
                                onClick={handleCreate}
                            >
                                <Spinner loading={creating}>
                                    <BookmarkFilledIcon />
                                </Spinner>
                                Schedule
                            </Button>
                        </Flex>
                    </>
                )}
            </div>
        </Card>
    );
}
