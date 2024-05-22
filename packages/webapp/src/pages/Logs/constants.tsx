import type { ColumnDef } from '@tanstack/react-table';
import type { SearchOperationsData, SearchOperationsState } from '@nangohq/types';
import { formatDateToLogFormat } from '../../utils/utils';
import { StatusTag } from './components/StatusTag';
import { OperationTag } from './components/OperationTag';
import type { MultiSelectArgs } from './components/MultiSelect';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export const columns: ColumnDef<SearchOperationsData>[] = [
    {
        accessorKey: 'createdAt',
        header: 'Timestamp',
        size: 170,
        cell: ({ row }) => {
            return <div className="font-code text-s">{formatDateToLogFormat(row.original.createdAt)}</div>;
        }
    },
    {
        accessorKey: 'state',
        header: 'Status',
        size: 90,
        cell: ({ row }) => {
            return <StatusTag state={row.original.state} />;
        }
    },
    {
        accessorKey: 'operation',
        header: 'Type',
        size: 100,
        cell: ({ row }) => {
            return <OperationTag operation={row.original.operation!} />;
        }
    },
    {
        accessorKey: 'configId',
        header: 'Integration',
        size: 200,
        cell: ({ row }) => {
            return <div className="truncate font-code text-s">{row.original.configName}</div>;
        }
    },
    {
        accessorKey: 'syncId',
        header: 'Script',
        size: 180,
        cell: ({ row }) => {
            return <div className="truncate font-code text-s">{row.original.syncName}</div>;
        }
    },
    {
        accessorKey: 'connectionId',
        header: 'Connection',
        size: 200,
        cell: ({ row }) => {
            return <div className="truncate font-code text-s">{row.original.connectionName}</div>;
        }
    },
    {
        accessorKey: 'id',
        header: '',
        size: 40,
        cell: () => {
            return (
                <div className="-ml-2">
                    <ChevronRightIcon />
                </div>
            );
        }
    }
];

export const statusDefaultOptions: SearchOperationsState[] = ['all'];
export const statusOptions: MultiSelectArgs['options'] = [
    {
        name: 'All',
        value: 'all'
    },
    {
        name: 'Success',
        value: 'success'
    },
    {
        name: 'Failed',
        value: 'failed'
    },
    {
        name: 'Running',
        value: 'running'
    },
    {
        name: 'Cancelled',
        value: 'cancelled'
    },
    {
        name: 'Timeout',
        value: 'timeout'
    },
    {
        name: 'Waiting',
        value: 'waiting'
    }
];