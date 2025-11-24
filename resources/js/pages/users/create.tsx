import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create User',
        href: 'users/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users | Create" />
            <div className="w-8/12 p-4">
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="space-y-4"
                >
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
                            placeholder="Password"
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
                        Create User
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
