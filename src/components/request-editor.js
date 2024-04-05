/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { Flex, Select, TextField, Tabs, Box, Button } from '@radix-ui/themes';
import { Link2Icon } from '@radix-ui/react-icons';

import { getMethodColor } from '@/helpers/utils';

import ParamsEditor from './params-editor';
import CodeEditor from './code-editor';

export default function RequestEditor({ onChange }) {
    const [advancedMode, setAdvancedMode] = useState(false);
    const [method, setMethod] = useState('GET');
    const [endpoint, setEndpoint] = useState('');
    const [params, setParams] = useState({});
    const [headers, setHeaders] = useState({});
    const [body, setBody] = useState('');

    const [methodItemColor, setMethodmethodItemColor] = useState(undefined);

    const handleToggleAdvancedMode = () => {
        setAdvancedMode(current => !current);
    };

    const handleMethodChange = value => {
        setMethod(value);
    };

    const handleEndpointChange = ev => {
        setEndpoint(ev.target.value);
    };

    const handleParamsChange = value => {
        setParams(value);
    };

    const handleHeadersChange = value => {
        setHeaders(value);
    };

    const handleBodyChange = value => {
        setBody(value);
    };

    useEffect(() => {
        onChange?.({
            method,
            endpoint,
            params,
            headers,
            body,
        });
    }, [method, endpoint, params, headers, body]);

    return (
        <div className='flex flex-col gap-4'>
            <Flex gap='2'>
                {advancedMode && (
                    <Box maxWidth='200px'>
                        <Select.Root size='3' value={method} onValueChange={handleMethodChange}>
                            <Select.Trigger color={getMethodColor(method)} variant='soft' />
                            <Select.Content color={methodItemColor}>
                                <Select.Item
                                    value='GET'
                                    onMouseEnter={() => setMethodmethodItemColor('green')}
                                >
                                    GET
                                </Select.Item>
                                <Select.Item
                                    value='POST'
                                    onMouseEnter={() => setMethodmethodItemColor('yellow')}
                                >
                                    POST
                                </Select.Item>
                                <Select.Item
                                    value='PUT'
                                    onMouseEnter={() => setMethodmethodItemColor('blue')}
                                >
                                    PUT
                                </Select.Item>
                                <Select.Item
                                    value='DELETE'
                                    onMouseEnter={() => setMethodmethodItemColor('red')}
                                >
                                    DELETE
                                </Select.Item>
                                <Select.Item
                                    value='PATCH'
                                    onMouseEnter={() => setMethodmethodItemColor('crimson')}
                                >
                                    PATCH
                                </Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </Box>
                )}

                <Box width='100%'>
                    <TextField.Root
                        size='3'
                        placeholder='https://'
                        value={endpoint}
                        onChange={handleEndpointChange}
                    >
                        <TextField.Slot>
                            <Link2Icon height='16' width='16' />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>

                <Box maxWidth='100%'>
                    <Button
                        size='3'
                        variant={advancedMode ? 'solid' : 'outline'}
                        onClick={handleToggleAdvancedMode}
                    >
                        Advanced
                    </Button>
                </Box>
            </Flex>

            {advancedMode && (
                <Tabs.Root defaultValue='params'>
                    <Tabs.List>
                        <Tabs.Trigger value='params'>Params</Tabs.Trigger>
                        <Tabs.Trigger value='headers'>Headers</Tabs.Trigger>
                        <Tabs.Trigger value='body'>Body</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt='3'>
                        <Tabs.Content value='params'>
                            <ParamsEditor params={params} onChange={handleParamsChange} />
                        </Tabs.Content>

                        <Tabs.Content value='headers'>
                            <ParamsEditor params={headers} onChange={handleHeadersChange} />
                        </Tabs.Content>

                        <Tabs.Content value='body'>
                            <CodeEditor code={body} onChange={handleBodyChange} />
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            )}
        </div>
    );
}
