import React from 'react'
import { Card, Flex, Stack, Text } from '@sanity/ui'
import type { InputProps } from 'sanity'

type CharacterCountProps = InputProps

export function CharacterCountInput(props: InputProps) {
    const value = typeof props.value === 'string' ? props.value : ''
    const count = value.length

    const maxLength = (
        props.schemaType.options as { maxLength?: number } | undefined
    )?.maxLength

    let tone: 'default' | 'caution' | 'critical' = 'default'

    if (typeof maxLength === 'number') {
        if (count > maxLength) {
            tone = 'critical'
        } else if (count >= Math.floor(maxLength * 0.85)) {
            tone = 'caution'
        }
    }

    return (
        <Stack space={2}>
            {props.renderDefault(props)}

            {typeof maxLength === 'number' && (
                <Flex justify="flex-end">
                    <Card padding={2} radius={2} tone={tone}>
                        <Text size={1} weight="medium">
                            {count}/{maxLength} characters
                        </Text>
                    </Card>
                </Flex>
            )}
        </Stack>
    )
}