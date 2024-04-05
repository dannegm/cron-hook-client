'use client';
import { TextField, Table, Callout } from '@radix-ui/themes';

import { InfoCircledIcon } from '@radix-ui/react-icons';

export default function ParamsViewer({ params }) {
    if (!params || !Object.keys(params).length) {
        return (
            <Callout.Root>
                <Callout.Icon>
                    <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>No information provided</Callout.Text>
            </Callout.Root>
        );
    }

    const paramsEntries = Object.entries(params);
    const paramsRows = paramsEntries.map(([key, value], id) => [id, key, value]);

    return (
        <Table.Root variant='surface'>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Key</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Value</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {paramsRows.map(([id, key, value]) => (
                    <Table.Row key={`param-item-${id}`}>
                        <Table.Cell>
                            <TextField.Root value={key} disabled />
                        </Table.Cell>
                        <Table.Cell>
                            <TextField.Root value={value} disabled />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    );
}
