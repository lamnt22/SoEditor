export interface Household {
    id: number;
    name: string;
    phone: string;
    date: string;
    address: string;
    note: string;
}

export const mockHouseholds: Household[] = [
    { id: 1, name: "(Chưa Có Họ Tên)", phone: "", date: "", address: "", note: "" },
    { id: 2, name: "Ngô Vĩnh Là", phone: "", date: "", address: "71, Phạm Hồng Thái, Hồng V...", note: "" },
    { id: 3, name: "Nguyễn Anh Tuấn", phone: "", date: "", address: "2801 Tòa C6, Dcapital, 119 Tr...", note: "" },
    { id: 4, name: "Nguyễn Khắc Công", phone: "", date: "", address: "2, Vương Thừa Vũ, Khương Tr...", note: "" },
    { id: 5, name: "Bùi Lan Anh", phone: "", date: "", address: "2607, UDIC Complex, Hoàng ...", note: "" },
    { id: 6, name: "Nguyễn Đức Hà", phone: "", date: "", address: "5, 8, Huyền Kỳ, Phú Lãm, Hà Đ...", note: "" },
    { id: 7, name: "Đỗ Thị Chính", phone: "", date: "", address: "6, Đoàn Kết, Đống Đa, Cao Vi...", note: "" },
    { id: 8, name: "Nguyễn Văn Triệu", phone: "", date: "", address: "5, 18, Đồng Mai, Hà Đông, H...", note: "" },
    { id: 9, name: "Nguyễn Thế Long", phone: "", date: "", address: "15, 101 Trên 2, 32, 4, Mễ Trì, ...", note: "" },
    { id: 10, name: "Đỗ Đức Việt", phone: "", date: "", address: "150, 322, 12, Mỹ Đình 1, Nam...", note: "" }
];

export interface SoItem {
    id: number;
    name: string;
    type?: string;
    quantity?: number;
}

export const mockLongSo: SoItem[] = [
    { id: 1, name: "Thổ Công", type: "Quốc ngữ" },
    { id: 2, name: "Giao Thừa Ngoài Trời", type: "Quốc ngữ" },
    { id: 3, name: "Chúc Phúc Mùng Một", type: "Quốc ngữ" },
    { id: 4, name: "Gia Tiên", type: "Quốc ngữ" },
    { id: 5, name: "Phúc Thọ", type: "Song ngữ" },
    { id: 6, name: "Lễ Phật", type: "Song ngữ" },
    { id: 7, name: "Phúc thọ mới", type: "Quốc ngữ" },
    { id: 8, name: "Sơn Trang", type: "Song ngữ" },
];

export const mockBoSo: SoItem[] = [
    { id: 101, name: "Bộ Sớ Tết", quantity: 57 },
    { id: 102, name: "Bộ sớ tết quốc ngữ", quantity: 7 },
    { id: 103, name: "Chỉ Việt", quantity: 7 },
    { id: 104, name: "Cáo ngữ phương", quantity: 30 },
    { id: 105, name: "Cúng Phật", quantity: 18 },
    { id: 106, name: "Cầu an", quantity: 18 },
    { id: 107, name: "Cầu tử phủ", quantity: 72 },
    { id: 108, name: "Cắt tiền duyên", quantity: 33 },
];

export const mockVerticalTextLines = [
    "CHỈ TIỀN VIÊN NĂM THÀNH TÂM KHẢN ĐẢO",
    "LIÊU CHỨNG MINH TUẾ THỨ NAM KIỀN THÂN THƯỢNG TẤU",
    "TUỆ NHÂN CHI TÔN THẦN CÚNG DƯỜNG THIÊN TIẾN LỄ BÀN THỔ ĐẠI VƯƠNG KÌ GIA TRẠCH BÌNH AN DIÊN SINH TĂNG PHÚC THỌ SỰ KIM THẦN VIỆT NAM QUỐC HÀ NỘI THÀNH PHỐ YÊN HÒA PHƯỜNG ĐƯỜNG 119 TRẦN DUY HƯNG CHUNG CƯ DCAPITAL SỐ 2501 TÒA C6 Y VU THẦN CHI CUNG ĐIẾN THƯỢNG TẤU",
    "NGUYỄN ANH TUẤN SINH NĂM KỶ MÙI NIÊN TỨ THẬP BÁT TUẾ NGUYÊN PHỤC THỊ HƯƠNG SINH NHÂM TUẤT NIÊN TỨ THẬP TIỂU TỪ GIA TỰ NGỮ TUẾ BÌNH NHẬT NGƯỠNG CAN",
    "NGUYỄN PHAN QUÂN SINH NHÂM THÌN NIÊN THẬP TỨ TUẾ PHAN HƯNG GIÁP NGÔ NIÊN THẬP TAM ĐỒNG GIA QUYẾN ĐẢNG THỨC MẠC CÁT HUNG TẬP TÀ",
    "THIẾT KHỦNG PHẠM CẤM HOẶC DO THẬP CỬU NAN THÔNG THẢO SINH TĂNG NIÊN THỨC CÁT HUNG NHẬT CHI LỆNH MINH",
    "TU THIẾT BÁI ĐẢO HƯƠNG HOA NGÂN THÀNH NGŨ THỂ TỊNH TÍN NHẤT TÂM CỤ HỮU SỚ VĂN KIỀN THÂN THƯỢNG TẤU",
    "BẢN XỨ THỔ ĐỊA PHÚC ĐỨC CHÍNH THẦN",
    "BẢN GIA ĐỘNG TRÙ TÁO QUÂN",
    "NGŨ PHƯƠNG LONG MẠCH TIỀN CHỦ TÀI THẦN",
    "TÔN THẦN ĐỒNG CHIẾU GIÁM THỦY MỘC CỘNG TIẾP CHI THẦN",
    "QUYẾT YÊU TÀ TRẤN PHƯƠNG BẤT NGUNG QUYỀN TIẾP CHI TÀI TRIỀU LINH THÔNG HỮU HÁCH NGÔ PHỤC CỐ KHÍ NHI KHẲNG SỬ BẰNG LÀNG CHÍNH TRỰC VÔ TƯ NGOẠI",
    "THIÊN VẬN BÍNH NGÔ NIÊN CÁT NGUYỆT KIM NHẬT THẦN KHẤU THỦ THƯỢNG SỚ"
];
