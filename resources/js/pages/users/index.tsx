import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/users',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export default function Index({ users }: { users: User[] }) {
    const { processing, delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this user?')) {
            destroy(route('users.destroy', id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users | List" />
            <div className="m-4">
                <Link href={route('users.create')}>
                    <Button className="mb-4 cursor-pointer">Create User</Button>
                </Link>
                {users.length > 0 && (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Password</TableHead>
                                <TableHead className="text-center">
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">
                                        {user.id}
                                    </TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.password}</TableCell>
                                    <TableCell className="space-x-2 text-center">
                                        <Link
                                            href={route('users.show', user.id)}
                                        >
                                            <Button className="cursor-pointer bg-green-500 hover:bg-green-600">
                                                View
                                            </Button>
                                        </Link>
                                        <Link
                                            href={route('users.edit', user.id)}
                                        >
                                            <Button className="cursor-pointer bg-slate-500 hover:bg-slate-600">
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button
                                            className="cursor-pointer bg-red-500 hover:bg-red-600"
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                            disabled={processing}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>
        </AppLayout>
    );
}
