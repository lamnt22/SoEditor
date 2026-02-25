import { useState, useRef, useEffect } from "react";
import { mockVerticalTextLines } from "../mockData";
import { ZoomIn, ZoomOut, Printer, Eye, Pencil } from "lucide-react";
import { SoTemplate } from "./SoTemplate";
import { VerticalTextRenderer } from "./VerticalTextRenderer";

export default function SoPreview() {
    const [zoom, setZoom] = useState(0.4);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fill background
        // ctx.fillStyle = 'transparent'; // Let the div handling the background show

        // 3. Render flow
        // The array order maps roughly to:
        // [0: kyTen, 1: kyTen2, 2: noiDung, 3: giaChu1, 4: giaChu2, 5-9:noiDung, 10: diaChi, 11: diaChi2, 12: header]

        // This is a simplified mapping based on SoTemplate
        if (mockVerticalTextLines.length >= 13) {
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[12], startX: SoTemplate.header.x, startY: SoTemplate.header.y, color: SoTemplate.header.color });
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[11], startX: SoTemplate.diaChi.x, startY: SoTemplate.diaChi.y, color: SoTemplate.diaChi.color });
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[10], startX: SoTemplate.diaChi.x - 48, startY: SoTemplate.diaChi.y, color: SoTemplate.diaChi.color });

            // Noi dung block
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines.slice(5, 10).join('\n'), startX: SoTemplate.noiDung.x, startY: SoTemplate.noiDung.y, color: SoTemplate.noiDung.color });

            // Gia chu block
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[4], startX: SoTemplate.giaChu.x, startY: SoTemplate.giaChu.y, color: SoTemplate.giaChu.color });
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[3], startX: SoTemplate.giaChu.x - 48, startY: SoTemplate.giaChu.y, color: SoTemplate.giaChu.color });
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[2], startX: SoTemplate.giaChu.x - 96, startY: SoTemplate.giaChu.y, color: SoTemplate.giaChu.color });

            // Ky ten
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[1], startX: SoTemplate.kyTen.x, startY: SoTemplate.kyTen.y, color: SoTemplate.kyTen.color });
            VerticalTextRenderer({ ctx, text: mockVerticalTextLines[0], startX: SoTemplate.kyTen.x - 48, startY: SoTemplate.kyTen.y, color: SoTemplate.kyTen.color });
        }

        // Add large title
        ctx.font = '900 56px sans-serif';
        ctx.fillStyle = '#dc2626'; // red-600
        const titleChars = ["T", "H", "Ổ", "C", "Ô", "N", "G"];
        titleChars.forEach((ch, idx) => {
            const yOffset = idx > 2 ? (idx + 1) * 70 : idx * 70;
            ctx.fillText(ch, SoTemplate.header.titleX, SoTemplate.header.titleY + yOffset);
        });

    }, [mockVerticalTextLines]);

    return (
        <div className="flex flex-col h-full bg-gray-100 overflow-hidden relative">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-2 bg-blue-50 border-b border-gray-200 shadow-sm z-10 w-full">
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold shadow-sm">
                    <span className="text-xl">A</span> CHỌN LÒNG SỚ
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 opacity-70">
                    TÙY CHỈNH CÚNG
                </button>
                <button className="flex items-center gap-1 bg-blue-600 px-3 py-1.5 border border-blue-600 text-white font-bold rounded shadow-sm text-sm">
                    <Eye size={16} /> XEM TRƯỚC
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold">
                    <Printer size={16} /> IN NGAY
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold">
                    <Printer size={16} /> IN DANH SÁCH
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 opacity-70">
                    BỎ CHỌN TẤT CẢ LS
                </button>

                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold ml-2">
                    <Pencil size={16} /> SỬA THÔNG TIN HGĐ
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold">
                    <Pencil size={16} /> SỬA LIÊM LUẬT SỚ
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold">
                    <Printer size={16} /> IN SỚ HIỆN TẠI
                </button>
                <button className="flex items-center gap-1 bg-white px-3 py-1.5 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100 font-semibold">
                    <Pencil size={16} /> SỬA NGẠCH CỐ ĐỊNH
                </button>
            </div>

            <div className="bg-gray-200 text-center text-sm py-1 border-b">
                <span className="text-gray-600">Sớ: 1/1</span>
            </div>

            {/* Main Preview Area */}
            <div className="flex-1 overflow-auto relative flex justify-center items-center w-full h-full p-4">

                {/* The Paper Context */}
                <div
                    className="relative bg-amber-50 shadow-2xl transition-transform origin-center"
                    style={{
                        width: '2480px', height: '1754px',
                        transform: `scale(${zoom})`,
                        // Adding a subtle yellow gradient to simulate paper
                        backgroundImage: 'linear-gradient(to right, #fef08a 0%, #fef08a 100%)',
                        border: '10px solid transparent',
                        borderImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png") 30 round'
                    }}
                >
                    {/* Decorative Border around paper */}
                    <div className="absolute inset-2 border-2 border-red-500 opacity-80 pointer-events-none rounded-sm flex">
                        <div className="border border-yellow-600 m-1 w-full h-full relative overflow-hidden flex items-center justify-center">
                            <canvas
                                ref={canvasRef}
                                width={2480}
                                height={1754}
                                style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Note bottom left */}
                    <div className="absolute bottom-12 right-24 text-center">
                        <p className="text-red-600 font-bold mb-1 tracking-widest text-sm">THỔ CÔNG</p>
                        <p className="text-red-600 font-bold tracking-widest text-sm">NGUYỄN ANH TUẤN</p>
                    </div>
                </div>

            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 right-8 flex gap-2">
                <button
                    onClick={() => setZoom(z => Math.min(z + 0.1, 2))}
                    className="p-3 bg-white rounded-full text-blue-600 shadow-md hover:bg-gray-50 border border-gray-300">
                    <ZoomIn size={24} />
                </button>
                <button
                    onClick={() => setZoom(z => Math.max(z - 0.1, 0.1))}
                    className="p-3 bg-white rounded-full text-blue-600 shadow-md hover:bg-gray-50 border border-gray-300">
                    <ZoomOut size={24} />
                </button>
            </div>

        </div>
    );
}
