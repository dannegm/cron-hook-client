"use client";
import { useState } from "react";
import { Flex, Card, Button, Text, Em, Strong, Separator } from "@radix-ui/themes";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

import RequestEditor from "./request-editor";
import PatternEditor from "./pattern-editor";

export default function CronEditor() {
    const [pattern, setPattern] = useState(null);
    const [request, setRequest] = useState(null);

    const handleCreate = () => {
        console.log({
            pattern: pattern.pattern,
            patternDescription: pattern.patternDescription,
            method: request.method,
            hook: request.endpoint,
            headers: request.headers,
            params: request.params,
            body: request.body,
            firstRun: new Date().toISOString(),
        });
    };

    return (
        <Card>
            <div className="flex flex-col gap-4 p-2">
                <PatternEditor onChange={(val) => setPattern(val)} />
                {!pattern?.pattern && (
                    <>
                        <Separator orientation="horizontal" size="4" />
                        <Text>
                            Configura el <Strong>URL</Strong> que se va a ejecutar{" "}
                            <Em>{pattern?.patternDescription}</Em>.
                        </Text>
                        <RequestEditor onChange={(val) => setRequest(val)} />
                        <Separator orientation="horizontal" size="4" />
                        <Flex justify="center">
                            <Button
                                size="3"
                                radius="full"
                                variant="solid"
                                disabled={!request?.endpoint}
                                onClick={handleCreate}
                            >
                                <BookmarkFilledIcon />
                                Schedule
                            </Button>
                        </Flex>
                    </>
                )}
            </div>
        </Card>
    );
}
