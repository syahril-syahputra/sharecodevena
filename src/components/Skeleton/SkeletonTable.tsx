import React from 'react';

interface IProps {
    row: number;
}
export default function SkeletonTable(props: IProps) {
    const renderRows = () => {
        const rows = [];

        for (let i = 0; i < props.row; i++) {
            rows.push(<tr key={i}>{renderColumns()}</tr>);
        }

        return rows;
    };

    const renderColumns = () => {
        const columns = [];

        // Assume we want 5 columns
        const numberOfColumns = 5;

        for (let i = 0; i < numberOfColumns; i++) {
            columns.push(
                <td key={i} className="border p-2 dark:border-gray-500">
                    {/* You can put your skeleton content here */}
                    <div className="mb-2.5 h-4 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
                </td>
            );
        }

        return columns;
    };
    return (
        <table className="w-full animate-pulse">
            <tbody>{renderRows()}</tbody>
        </table>
    );
}
