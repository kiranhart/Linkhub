import { db } from "@/db";
import getSession from "@/lib/getSession";

export async function GET(
    request: Request,
    { params }: { params: { hub: string } }
) {
    try {
        const session = await getSession();

        if (!session || !session.user) {
            return Response.json({ error: 'Unauthorized'}, { status: 401 })
        }
        
        const hub = await db.hub.findUnique({
            where: {
                username: params.hub
            }, 
            select: {
                userId: true,
                content: true,
                contentOrder: true
            }
        })
    
        if (!hub) return Response.json({ error: 'Hub not found'}, { status: 404 })
        if (hub.userId !== session.user?.id) return Response.json({ error: 'Unauthorized'}, { status: 401 })

        return Response.json({
            content: hub.content,
            contentOrder: hub.contentOrder
        });

    } catch(error) {
        console.error(error);
        return Response.json({ error: "Internal server error"}, { status: 500})
    }
}