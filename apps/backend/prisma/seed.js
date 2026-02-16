import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main() {
    const adminPassword = await bcrypt.hash('Admin1234!', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@vincey.com' },
        update: {},
        create: {
            email: 'admin@vincey.com',
            name: 'System Admin',
            passwordHash: adminPassword,
            role: Role.ADMIN
        }
    });
    const category = await prisma.category.upsert({
        where: { slug: 'electronics' },
        update: {},
        create: { name: 'Electronics', slug: 'electronics' }
    });
    await prisma.product.upsert({
        where: { slug: 'wireless-headphones-pro' },
        update: {},
        create: {
            name: 'Wireless Headphones Pro',
            slug: 'wireless-headphones-pro',
            description: 'Noise cancelling headphones with 30-hour battery.',
            price: 199.99,
            stock: 100,
            images: ['https://cdn.example.com/products/headphones.jpg'],
            categoryId: category.id,
            featured: true
        }
    });
    console.log('Seeded admin:', admin.email);
}
main().finally(async () => prisma.$disconnect());
