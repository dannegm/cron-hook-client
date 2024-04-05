/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { TextField, Table, IconButton, Button } from '@radix-ui/themes';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';

const Fields = {
    ID: 0,
    Key: 1,
    Value: 2,
};

const isEmpty = ([, key, value]) => !key && !value;

export default function ParamsEditor({ params, onChange }) {
    const [rows, setRows] = useState([[0, '', '']]);

    const handleAddRow = () => {
        const copy = [...rows];

        if (copy.at(-1) && !isEmpty(copy.at(-1))) {
            copy.push([copy.length, '', '']);
            setRows(copy);
        }

        if (!copy.length) {
            copy.push([copy.length, '', '']);
            setRows(copy);
        }
    };

    const handleFieldChange = (id, field) => {
        return ev => {
            const copy = [...rows];
            copy[id][field] = ev.target.value;
            setRows(copy);
        };
    };

    const handleRemove = id => {
        return () => {
            const copy = [...rows];

            const filtered = copy.filter(row => row[Fields.ID] !== id);

            if (!filtered.length) {
                filtered.push([copy.length, '', '']);
            }

            setRows(filtered);
        };
    };

    useEffect(() => {
        const paramsEntries = Object.entries(params);

        if (paramsEntries.length) {
            const paramsRows = paramsEntries.map(([key, value], id) => [id, key, value]);
            setRows(paramsRows);
        }
    }, []);

    useEffect(() => {
        const rowsEntries = rows.filter(row => !isEmpty(row)).map(([, key, value]) => [key, value]);
        const params = Object.fromEntries(rowsEntries);
        onChange?.(params);
    }, [JSON.stringify(rows)]);

    return (
        <div className='flex flex-col gap-4'>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Key</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Value</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {rows.map(([id, key, value]) => (
                        <Table.Row key={`param-item-${id}`}>
                            <Table.Cell>
                                <TextField.Root
                                    value={key}
                                    onChange={handleFieldChange(id, Fields.Key)}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                <TextField.Root
                                    value={value}
                                    onChange={handleFieldChange(id, Fields.Value)}
                                />
                            </Table.Cell>
                            <Table.Cell justify='end'>
                                <IconButton variant='outline' onClick={handleRemove(id)}>
                                    <TrashIcon width='15' height='15' />
                                </IconButton>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            <Button variant='surface' onClick={handleAddRow}>
                <PlusIcon />
                Add new row
            </Button>
        </div>
    );
}
