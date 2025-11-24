import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface User {
    id: number;
    name: string;
    email: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit User',
        href: 'users/edit',
    },
];

export default function Edit({ user }: { user: User }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(route('users.update', user.id));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users | Edit" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="gap-1.5">
                        <Input
                            placeholder="Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        ></Input>
                        {errors.name && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.name}
                            </div>
                        )}
                    </div>
                    <div className="gap-1.5">
                        <Input
                            placeholder="Email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        ></Input>
                        {errors.email && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className="gap-1.5">
                        <Input
                            placeholder="Password (leave blank to keep current)"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                        ></Input>
                        {errors.password && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <Button
                        disabled={processing}
                        type="submit"
                        className="cursor-pointer"
                    >
                        Update User
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
