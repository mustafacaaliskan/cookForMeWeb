
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { foodId, price, timestamp } = body;

        // In a real app, this would go to a database.
        // For MVP, we'll log to a file or just console.
        // Let's append to a JSON file for persistence if possible, or just console.log

        const logEntry = {
            id: crypto.randomUUID(),
            foodId,
            price,
            timestamp,
            userAgent: request.headers.get('user-agent'),
        };

        console.log('SALE_ATTEMPT:', JSON.stringify(logEntry));

        // Try to write to a file in the project root (might fail in some envs but fine for local)
        const logPath = path.join(process.cwd(), 'orders.json');

        let orders = [];
        if (fs.existsSync(logPath)) {
            const fileContent = fs.readFileSync(logPath, 'utf-8');
            try {
                orders = JSON.parse(fileContent);
            } catch (e) {
                // ignore error
            }
        }

        orders.push(logEntry);
        fs.writeFileSync(logPath, JSON.stringify(orders, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error tracking click:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
