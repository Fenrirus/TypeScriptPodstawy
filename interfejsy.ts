export interface Serializable
{
    toJson(): string;
}

export interface Drawable
{
    draw(ctx:CanvasRenderingContext2D): void;
}

export function naszaFunkcja (obiekt:Serializable)
{
    obiekt.toJson();
}

export class User implements Serializable, Drawable
{
    draw(ctx: CanvasRenderingContext2D): void
    {
       // ctx.drawImage(...):
    }

    toJson()
    {   
        return "Obiekt Json"
    }
}