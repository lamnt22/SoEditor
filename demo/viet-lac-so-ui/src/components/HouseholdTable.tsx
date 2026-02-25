import { useState } from "react";
import { mockHouseholds } from "../mockData";
import { Users, Trash2, Printer, Settings, Database, Plus, List } from "lucide-react";

export default function HouseholdTable() {
    const [households] = useState(mockHouseholds);

    return (
        <div className="flex flex-col h-full">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-2 bg-blue-50 border-b border-gray-200">
                <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    <List size={16} /> DANH SÁCH
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100">
                    <Printer size={16} /> IN SỚ
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100">
                    <Database size={16} /> TÀI NGUYÊN
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-100">
                    <Settings size={16} /> CÀI ĐẶT
                </button>

                <div className="flex-1"></div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    TẠO LÒNG SỚ
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    QUAY LẠI
                </button>
            </div>

            {/* Sub Toolbar */}
            <div className="flex items-center gap-2 p-2 bg-gray-50 border-b border-gray-200">
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-600 text-xs hover:bg-gray-100">
                    <Plus size={14} /> THÊM MỚI
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-blue-600 border border-blue-600 text-white text-xs">
                    <List size={14} /> DS CÁC HỘ GIA ĐÌNH
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-600 text-xs hover:bg-gray-100">
                    <Trash2 size={14} /> CÁC HỘ GIA ĐÌNH ĐÃ XÓA
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-600 text-xs hover:bg-gray-100 opacity-50 cursor-not-allowed">
                    XÓA
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-600 text-xs hover:bg-gray-100">
                    <Users size={14} /> QUẢN LÝ NHÓM
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-400 text-xs opacity-50 cursor-not-allowed">
                    THÊM VÀO NHÓM
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white border text-gray-400 text-xs opacity-50 cursor-not-allowed">
                    XÓA KHỎI NHÓM
                </button>
            </div>

            {/* Table Section */}
            <div className="flex-1 overflow-auto bg-white p-4">
                <table className="w-full min-w-[800px] border-collapse">
                    <thead>
                        <tr className="border-b text-blue-600 text-sm">
                            <th className="p-3 text-center w-12"><input type="checkbox" className="rounded" /></th>
                            <th className="p-3 text-left font-semibold">Chủ hộ</th>
                            <th className="p-3 text-left font-semibold">Số điện thoại</th>
                            <th className="p-3 text-left font-semibold">Ngày đăng ký cúng</th>
                            <th className="p-3 text-left font-semibold">Địa chỉ</th>
                            <th className="p-3 text-left font-semibold">Ghi chú</th>
                        </tr>
                        <tr className="border-b">
                            <th></th>
                            <th className="p-2"><input type="text" placeholder="Tìm kiếm..." className="w-full border-b text-sm p-1 outline-none focus:border-blue-500 font-normal" /></th>
                            <th className="p-2"><input type="text" placeholder="Tìm kiếm..." className="w-full border-b text-sm p-1 outline-none focus:border-blue-500 font-normal" /></th>
                            <th className="p-2"><input type="text" placeholder="Tìm kiếm..." className="w-full border-b text-sm p-1 outline-none focus:border-blue-500 font-normal" /></th>
                            <th className="p-2"><input type="text" placeholder="Tìm kiếm..." className="w-full border-b text-sm p-1 outline-none focus:border-blue-500 font-normal" /></th>
                            <th className="p-2"><input type="text" placeholder="Tìm kiếm..." className="w-full border-b text-sm p-1 outline-none focus:border-blue-500 font-normal" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {households.map((h, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50 items-center text-sm text-gray-700">
                                <td className="p-3 text-center">
                                    <input type="checkbox" className="rounded border-gray-300" />
                                </td>
                                <td className="p-3">{h.name}</td>
                                <td className="p-3">{h.phone}</td>
                                <td className="p-3">{h.date}</td>
                                <td className="p-3">{h.address}</td>
                                <td className="p-3">{h.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-end p-3 bg-white border-t text-sm text-gray-500 gap-4">
                <div className="flex gap-2 items-center">
                    <span>Số dữ liệu mỗi trang</span>
                    <select className="border rounded p-1">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                </div>
                <span>1-10 của 76</span>
                <div className="flex gap-1 items-center">
                    <button className="px-2 py-1 text-gray-400 hover:text-gray-700">&lt;</button>
                    <button className="px-2 py-1 font-bold text-blue-600">1</button>
                    <button className="px-2 py-1 hover:text-blue-600">2</button>
                    <button className="px-2 py-1 hover:text-blue-600">3</button>
                    <span>...</span>
                    <button className="px-2 py-1 hover:text-blue-600">8</button>
                    <button className="px-2 py-1 hover:text-gray-700">&gt;</button>
                </div>
            </div>
        </div>
    );
}
