export interface RenderContext {
    ctx: CanvasRenderingContext2D;
    text: string;
    startX: number;
    startY: number;
    color?: string;
}

export const VerticalTextRenderer = ({ ctx, text, startX, startY, color }: RenderContext) => {
    // 4. Font + spacing
    const fontSize = 28;
    const lineHeight = 36;
    const letterSpacing = 2;
    const columnWidth = 48; // shift LEFT by 48px each column

    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = color || 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // 1. Splits text by newline into columns
    const columns = text.split('\n');

    columns.forEach((colText, colIdx) => {
        // Next column shifts LEFT by columnWidth
        const currentX = startX - (colIdx * columnWidth);
        const chars = colText.split('');

        chars.forEach((char, charIdx) => {
            // Each column renders characters top -> bottom
            // y position increases down the canvas
            const currentY = startY + (charIdx * (lineHeight + letterSpacing));

            // Xoay một số chữ cứng/dấu nếu cần (Ở đây giữ form thẳng đứng upright)
            ctx.fillText(char, currentX, currentY);
        });
    });
};
