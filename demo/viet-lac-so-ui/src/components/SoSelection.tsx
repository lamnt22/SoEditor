import { useState } from "react";
import { mockLongSo, mockBoSo } from "../mockData";
import type { SoItem } from "../mockData";
import { X } from "lucide-react";

export default function SoSelection() {
    const [selectedSos, setSelectedSos] = useState<SoItem[]>([]);

    const handleToggle = (item: SoItem) => {
        setSelectedSos(prev => {
            const exists = prev.find(i => i.id === item.id);
            if (exists) {
                return prev.filter(i => i.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const isSelected = (id: number) => selectedSos.some(i => i.id === id);

    return (
        <div className="flex flex-col h-full bg-gray-50 p-4 gap-4">
            {/* Top Toolbar */}
            <div className="flex gap-2 items-center text-sm">
                <button className="flex items-center gap-1 font-semibold text-blue-700 bg-white px-3 py-1.5 border border-blue-600 rounded">
                    CHỌN LÒNG SỚ
                </button>
                <button className="flex items-center gap-1 text-gray-700 bg-white px-3 py-1.5 border rounded hover:bg-gray-100">
                    TÙY CHỈNH CÚNG
                </button>
                <button className="flex items-center gap-1 text-gray-400 bg-white px-3 py-1.5 border rounded opacity-50 cursor-not-allowed">
                    XEM TRƯỚC
                </button>
                <button className="flex items-center gap-1 text-gray-400 bg-white px-3 py-1.5 border rounded opacity-50 cursor-not-allowed">
                    IN DANH SÁCH
                </button>
                <button className="flex items-center gap-1 text-gray-400 bg-white px-3 py-1.5 border rounded opacity-50 cursor-not-allowed">
                    BỎ CHỌN TẤT CẢ LS
                </button>
            </div>

            <div className="text-red-600 text-sm">(* Mới): Quý thầy muốn thêm lòng sớ cá nhân vui lòng liên hệ nhân viên Việt Lạc Sớ</div>

            {/* 3 Columns Layout */}
            <div className="grid grid-cols-3 flex-1 gap-6">

                {/* Column 1: Lòng mớ */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
                    <div className="p-3 border-b border-gray-100 flex gap-4 text-blue-800 font-bold">
                        <span className="flex-1 ml-6 text-sm">Tên lòng sớ</span>
                        <span className="w-24 text-sm text-center">Loại</span>
                    </div>
                    <div className="p-2 border-b border-gray-100 flex gap-2">
                        <div className="relative flex-1">
                            <input placeholder="Tìm kiếm..." className="w-full border-b pb-1 text-sm outline-none px-2 text-gray-600" />
                            <X size={14} className="absolute right-1 top-1 text-gray-400" />
                        </div>
                        <div className="w-24 text-center">
                            <select className="border-b text-sm pb-1 outline-none text-gray-600"><option>Tất cả</option></select>
                        </div>
                    </div>
                    <ul className="flex-1 overflow-auto">
                        {mockLongSo.map(item => (
                            <li key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                                <label className="flex gap-4 p-3 items-center cursor-pointer w-full h-full">
                                    <input type="checkbox" checked={isSelected(item.id)} onChange={() => handleToggle(item)} className="ml-2 rounded" />
                                    <span className="flex-1 text-sm text-gray-700">{item.name}</span>
                                    <span className="w-24 text-center text-sm text-gray-600">{item.type}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2: Bộ Sớ */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
                    <div className="p-3 border-b border-gray-100 flex gap-4 text-blue-800 font-bold">
                        <span className="flex-1 ml-6 text-sm">Tên bộ sớ</span>
                        <span className="w-24 text-sm text-center">Số lượng</span>
                    </div>
                    <div className="p-2 border-b border-gray-100 flex gap-2">
                        <div className="relative flex-1">
                            <input placeholder="Tìm kiếm..." className="w-full border-b pb-1 text-sm outline-none px-2 text-gray-600" />
                            <X size={14} className="absolute right-1 top-1 text-gray-400" />
                        </div>
                        <div className="w-24 border-b border-dotted pb-1 text-center">
                            <input placeholder="Tìm kiếm" className="w-16 outline-none text-sm text-gray-600 bg-transparent text-center" />
                        </div>
                    </div>
                    <ul className="flex-1 overflow-auto">
                        {mockBoSo.map(item => (
                            <li key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                                <label className="flex gap-4 p-3 items-center cursor-pointer w-full h-full">
                                    <input type="checkbox" checked={isSelected(item.id)} onChange={() => handleToggle(item)} className="ml-2" />
                                    <span className="flex-1 text-sm text-gray-700">{item.name}</span>
                                    <span className="w-24 text-center text-sm text-gray-600">{item.quantity}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Lòng sớ được chọn */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
                    <div className="p-3 border-b border-gray-100 flex gap-4 text-blue-800 font-bold justify-center">
                        <span className="flex-1 text-center text-sm">Lòng sớ được chọn</span>
                        <span className="w-24 text-sm text-center">Loại</span>
                    </div>
                    <div className="flex-1 flex flex-col max-h-[70vh] overflow-y-auto">
                        {selectedSos.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm h-48">
                                No data
                            </div>
                        ) : (
                            <ul>
                                {selectedSos.map(item => (
                                    <li key={item.id} className="flex p-3 border-b text-sm text-gray-700">
                                        <span className="flex-1 pl-4">{item.name} {item.quantity ? `(${item.quantity})` : ''}</span>
                                        <span className="w-24 text-center">{item.type || 'Bộ sớ'}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {/* Footer Grid */}
                    <div className="flex items-center justify-end p-3 border-t text-sm text-gray-500 gap-4 bg-gray-50">
                        <span>Số dữ liệu mỗi trang</span>
                        <select className="border rounded px-1"><option>10</option></select>
                        <span>0-0 của 0</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
