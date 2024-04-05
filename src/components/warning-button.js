import { Text, Button, Popover } from '@radix-ui/themes';

export default function WarningButton({ message, children, onConfirm, ...props }) {
    return (
        <Popover.Root>
            <Popover.Trigger>
                <Button {...props}>{children}</Button>
            </Popover.Trigger>
            <Popover.Content width='320px'>
                <div className='flex flex-col gap-4'>
                    <Text>{message}</Text>

                    <div className='flex flex-row gap-2 justify-end'>
                        <Popover.Close>
                            <Button variant='soft'>Cancel</Button>
                        </Popover.Close>
                        <Popover.Close>
                            <Button color='red' onClick={onConfirm}>
                                Accept
                            </Button>
                        </Popover.Close>
                    </div>
                </div>
            </Popover.Content>
        </Popover.Root>
    );
}
