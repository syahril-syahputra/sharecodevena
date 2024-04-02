import React from 'react';

interface IItems {
    id: number;
    name: string;
}
interface IProduct {
    id: number;
    name: string;
    items: IItems[];
}
export default function page() {
    const data: IProduct[] = [
        {
            id: 1,
            name: 'Semiconductors and Integrated Circuits',
            items: [
                { id: 101, name: 'Microcontrollers' },
                { id: 102, name: 'Memory ICs' },
                { id: 103, name: 'Analog ICs' },
                { id: 104, name: 'Power Management ICs' },
            ],
        },
        {
            id: 2,
            name: 'Passive Components',
            items: [
                { id: 201, name: 'Capacitors' },
                { id: 202, name: 'Resistors' },
                { id: 203, name: 'Inductors' },
                { id: 204, name: 'Filters' },
            ],
        },
        {
            id: 3,
            name: 'Connectors and Cables',
            items: [
                { id: 301, name: 'Board-to-Board Connectors' },
                { id: 302, name: 'Wire-to-Board Connectors' },
                { id: 303, name: 'Ribbon Cables' },
                { id: 304, name: 'Custom Cable Assemblies' },
            ],
        },
        {
            id: 4,
            name: 'Electromechanical Components',
            items: [
                { id: 401, name: 'Relays' },
                { id: 402, name: 'Switches' },
                { id: 403, name: 'Motors' },
                { id: 404, name: 'Solenoids' },
            ],
        },
        {
            id: 5,
            name: 'Optoelectronics',
            items: [
                { id: 501, name: 'LEDs' },
                { id: 502, name: 'Optocouplers' },
                { id: 503, name: 'Photodiodes' },
                { id: 504, name: 'Display Modules' },
            ],
        },
        {
            id: 6,
            name: 'Sensors',
            items: [
                { id: 601, name: 'Temperature Sensors' },
                { id: 602, name: 'Motion Sensors' },
                { id: 603, name: 'Proximity Sensors' },
                { id: 604, name: 'Pressure Sensors' },
            ],
        },
        {
            id: 7,
            name: 'RF and Wireless Components',
            items: [
                { id: 701, name: 'Antennas' },
                { id: 702, name: 'RF Modules' },
                { id: 703, name: 'Transceivers' },
                { id: 704, name: 'Filters' },
            ],
        },
        {
            id: 8,
            name: 'Power Supplies',
            items: [
                { id: 801, name: 'AC/DC Power Supplies' },
                { id: 802, name: 'DC/DC Converters' },
                { id: 803, name: 'Battery Chargers' },
            ],
        },
        {
            id: 9,
            name: 'Displays and LCDs',
            items: [
                { id: 901, name: 'OLED Displays' },
                { id: 902, name: 'LCD Modules' },
                { id: 903, name: 'Touchscreens' },
            ],
        },
        {
            id: 10,
            name: 'Embedded Systems',
            items: [
                { id: 1001, name: 'Single Board Computers' },
                { id: 1002, name: 'Development Kits' },
                { id: 1003, name: 'Embedded Modules' },
            ],
        },
        {
            id: 11,
            name: 'Industrial Components',
            items: [
                { id: 1101, name: 'Relays' },
                { id: 1102, name: 'Industrial Sensors' },
                { id: 1103, name: 'Control Panels' },
            ],
        },
        {
            id: 12,
            name: 'Obsolete and Hard-to-Find Components',
            items: [
                { id: 1201, name: 'Vintage ICs' },
                { id: 1202, name: 'Rare Connectors' },
                { id: 1203, name: 'Discontinued Semiconductors' },
            ],
        },
        {
            id: 13,
            name: 'Customized Solutions',
            items: [
                { id: 1301, name: 'Component Sourcing Services' },
                { id: 1302, name: 'Component Packaging Solutions' },
                { id: 1303, name: 'Custom Component Kitting' },
            ],
        },
        {
            id: 14,
            name: 'Value-Added Services',
            items: [
                { id: 1401, name: 'Quality Testing and Authentication' },
                { id: 1402, name: 'Component Inspection and Verification' },
            ],
        },
    ];

    return (
        <div>
            <div className="relative flex h-auto w-full items-center bg-slate-300 dark:bg-slate-700">
                <div className="container pb-12 pt-24">
                    <h1 className="text-[48px]">Our Products</h1>
                    <span className="font-bold] mb-8 flex-wrap text-lg">
                        Venatronics provides distribution services for
                        semiconductors and electronics, including:
                    </span>
                </div>
            </div>
            <div className="container py-8">
                <ul className="grid-col-1 grid list-inside list-decimal py-4 font-bold md:grid-cols-2">
                    {data.map((product) => (
                        <li key={product.id}>
                            <b>{product.name}</b>
                            <ul className="list-inside list-disc space-y-4 px-8 py-4 font-normal">
                                {product.items.map((items) => (
                                    <li key={items.id}>{items.name}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
