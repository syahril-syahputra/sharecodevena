'use client';
import { Button } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function ItemList(props: {
    title: string;
    value: string;
    hideValue?: boolean;
}) {
    return (
        <div>
            <div className=" pb-4 font-semibold">{props.title}</div>
            {props.hideValue ? (
                <Button onClick={() => signIn()}>Show</Button>
            ) : (
                <h1 className="text-base font-normal">{props.value}</h1>
            )}
        </div>
    );
}
