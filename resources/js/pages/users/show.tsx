import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show User',
        href: 'users/show',
    },
];

export default function Show({ user }: { user: User }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users | Show" />
            <div className="m-4 w-8/12 space-y-4">
                <div className="rounded-lg border p-4 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold">User Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                ID
                            </label>
                            <p className="mt-1">{user.id}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Name
                            </label>
                            <p className="mt-1">{user.name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Email
                            </label>
                            <p className="mt-1">{user.email}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Password (Hashed)
                            </label>
                            <p className="mt-1 font-mono text-xs break-all">
                                {user.password}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Created At
                            </label>
                            <p className="mt-1">
                                {new Date(user.created_at).toLocaleString()}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-500">
                                Updated At
                            </label>
                            <p className="mt-1">
                                {new Date(user.updated_at).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Link href={route('users.index')}>
                        <Button variant="outline" className="cursor-pointer">
                            Back to List
                        </Button>
                    </Link>
                    <Link href={route('users.edit', user.id)}>
                        <Button className="cursor-pointer bg-slate-500 hover:bg-slate-600">
                            Edit User
                        </Button>
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
