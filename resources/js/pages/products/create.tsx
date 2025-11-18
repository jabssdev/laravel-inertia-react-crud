import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: 'products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        stock: '',
        price: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products | Create" />
            <div className="w-8/12 p-4">
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    action=""
                    className="space-y-4"
                >
                    <div className="gap-1.5">
                        <Input
                            placeholder="Product Name"
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
                            placeholder="Product Stock"
                            value={data.stock}
                            onChange={(e) => setData('stock', e.target.value)}
                        ></Input>
                        {errors.stock && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.stock}
                            </div>
                        )}
                    </div>
                    <div className="gap-1.5">
                        <Input
                            placeholder="Product Price"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        ></Input>
                        {errors.price && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.price}
                            </div>
                        )}
                    </div>
                    <div className="gap-1.5">
                        <Textarea
                            placeholder="Product Description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                        />
                        {errors.description && (
                            <div className="mt-1 flex items-center text-sm text-red-500">
                                {errors.description}
                            </div>
                        )}
                    </div>
                    <Button
                        disabled={processing}
                        type="submit"
                        className="cursor-pointer"
                    >
                        Create Product
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
