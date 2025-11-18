import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: 'products/create',
    },
];

interface Product {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
}

export default function Show({ product }: { product: Product }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products | Show" />
            <div className="w-8/12 p-4">
                <h1 className="mb-4 text-2xl font-bold">Product Details</h1>
                <div className="mb-2">
                    <strong>Name:</strong> {product.name}
                </div>
                <div className="mb-2">
                    <strong>Description:</strong> {product.description}
                </div>
                <div className="mb-2">
                    <strong>Stock:</strong> {product.stock} uds.
                </div>
                <div className="mb-2">
                    <strong>Price:</strong> S/. {product.price}
                </div>
            </div>
            <Link href={route('products.index')}>
                <Button className="m-4 cursor-pointer bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                    Back to Products
                </Button>
            </Link>
        </AppLayout>
    );
}
