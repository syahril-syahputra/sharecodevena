'use client';
import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';

export default function page() {
    return (
        <div className="container py-8">
            <h1>RFQ</h1>
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        required
                        type="text"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="name@flowbite.com"
                        required
                        type="text"
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        placeholder="input"
                        required
                        type=""
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" required type="password" />
                </div>
                <Button type="submit">Submit t</Button>
            </form>
        </div>
    );
}
