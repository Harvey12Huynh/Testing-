# UrbanData Cheat Sheet: Thuật ngữ cần mở sẵn khi họp

**UrbanData trong một câu:** Giúp app publisher kiếm thêm một dòng doanh thu từ first-party data, gửi server-to-server, không SDK, chỉ non-PII, revenue share, chạy song song với hệ thống quảng cáo. **Không phải** DSP, SSP, ad exchange, ad network. **Không** bán hay đặt quảng cáo.

**Không bao giờ tự đưa ra:** % revenue share, % hoa hồng referral, chứng nhận compliance, số liệu KPI. Nói: "Tôi sẽ xác nhận với team và gửi lại anh/chị."

---

## Các bên trong ngành

| Thuật ngữ | Nghĩa ngắn |
|---|---|
| **Advertiser** | Công ty trả tiền để quảng cáo sản phẩm (phía cầu / demand). |
| **Publisher** | Công ty sở hữu app / website có người dùng; nhận tiền (phía cung / supply). Khách hàng chính của UrbanData. |
| **User** | Người dùng app; cho đi sự chú ý và dữ liệu hành vi. |
| **Audience** | Tập người dùng của một app / website. |
| **Adtech** | Công nghệ quảng cáo; các công ty trung gian giữa advertiser và publisher. |
| **Supply / Demand** | Supply = phía publisher (có hàng); Demand = phía advertiser (có tiền). |
| **Ad Network** | Gom inventory của nhiều publisher và bán lại cho advertiser (vd: AppLovin, Unity Ads, AdMob). |
| **Mediation** | Phần mềm trong app chọn nguồn quảng cáo trả giá cao nhất cho mỗi ad slot (vd: AppLovin MAX, LevelPlay). |
| **SSP** (Supply-Side Platform) | Nền tảng giúp publisher bán impression qua đấu giá với giá cao nhất. |
| **DSP** (Demand-Side Platform) | Nền tảng giúp advertiser mua quảng cáo tự động. |
| **Ad Exchange** | "Sàn" nơi SSP và DSP gặp nhau và đấu giá diễn ra. |
| **DMP** (Data Management Platform) | Phần mềm gom dữ liệu ẩn danh thành nhóm người dùng (segment) để nhắm quảng cáo. |
| **CDP** (Customer Data Platform) | Phần mềm gom dữ liệu khách hàng của chính công ty vào một hồ sơ, thường có PII. |
| **CMP** (Consent Management Platform) | Phần mềm hiện pop-up xin đồng ý và lưu lựa chọn của người dùng. |
| **MMP** (Mobile Measurement Partner) | Công ty đo lượt cài app đến từ quảng cáo nào (vd: AppsFlyer, Adjust). |
| **Walled garden** | Nền tảng khép kín tự dùng dữ liệu của mình (Google, Meta, Amazon, TikTok). Không phải khách của UrbanData. |
| **DOOH** (Digital Out-Of-Home) | Màn hình quảng cáo ngoài trời. Không phải khách của UrbanData. |
| **Retail media network** | Mạng quảng cáo của chuỗi bán lẻ, dùng dữ liệu giao dịch nội bộ. Không phải khách của UrbanData. |
| **UA** (User Acquisition) | Chạy quảng cáo để có thêm người cài app. |
| **UA agency** | Công ty dịch vụ chạy UA cho các app; ứng viên referral partner tốt. |
| **Affiliate network** | Mạng giới thiệu sống bằng hoa hồng / rev-share; ứng viên referral partner tốt. |
| **Sales house** | Công ty / liên minh bán quảng cáo thay cho nhiều publisher. |

## Quảng cáo và cách nó chạy

| Thuật ngữ | Nghĩa ngắn |
|---|---|
| **Ad slot / Ad unit** | Vị trí trống trong app để hiện quảng cáo. |
| **Impression** | Một lần quảng cáo hiện ra trước người dùng. |
| **Inventory** | Tổng số ad slot / impression publisher có thể bán. |
| **Creative** | Nội dung quảng cáo thực tế (ảnh, video). |
| **Banner / Interstitial / Rewarded video** | Quảng cáo dải ngang / toàn màn hình giữa hai màn / video xem xong được thưởng. |
| **Programmatic** | Mua bán quảng cáo tự động bằng phần mềm. |
| **RTB** (Real-Time Bidding) | Đấu giá từng impression ngay lúc app mở, trong khoảng 100 - 200 ms. |
| **OpenRTB** | Chuẩn định dạng dữ liệu chung (của IAB Tech Lab) cho đấu giá quảng cáo. |
| **Bid request** | Tin nhắn SSP / exchange gửi DSP mô tả impression đang được bán. |
| **Floor price** | Giá sàn; giá thấp nhất publisher chấp nhận. |
| **SDK** (Software Development Kit) | Gói code của công ty khác gắn vào trong app. UrbanData không cần SDK. |
| **S2S** (Server-to-Server) | Dữ liệu đi thẳng giữa hai server, không qua code trong app. Cách UrbanData nhận dữ liệu. |
| **API** | "Cổng" để hai hệ thống phần mềm gửi dữ liệu cho nhau. |
| **Adtech tax** | Phần tiền các trung gian giữ lại giữa advertiser và publisher. |

## Tiền và chỉ số

| Thuật ngữ | Nghĩa ngắn |
|---|---|
| **CPM** (Cost Per Mille) | Giá cho 1.000 impression. |
| **eCPM** (effective CPM) | Doanh thu thực tế trên 1.000 impression = doanh thu / impression x 1.000. |
| **CPC** (Cost Per Click) | Trả tiền mỗi lượt bấm. |
| **CPA** (Cost Per Action) | Trả tiền mỗi hành động (mua, đăng ký). |
| **CPI** (Cost Per Install) | Trả tiền mỗi lượt cài app. |
| **Fill rate** | % yêu cầu quảng cáo thực sự có quảng cáo để hiện. |
| **Unfilled inventory** | Phần kho quảng cáo không bán được, không ra tiền. |
| **DAU / MAU** | Số người dùng khác nhau hoạt động trong ngày / tháng. |
| **Stickiness (DAU/MAU)** | Người dùng quay lại thường xuyên đến mức nào. |
| **ARPU** | Doanh thu trung bình mỗi người dùng (thường theo tháng). |
| **ARPDAU** | Doanh thu trung bình mỗi người dùng hoạt động mỗi ngày. |
| **IAP** (In-App Purchase) | Mua hàng bằng tiền thật trong app. |
| **Subscription** | Gói trả tiền định kỳ. |
| **Margin / Take rate** | % mỗi trung gian giữ lại trên số tiền đi qua. |
| **Revenue share (rev share)** | Chia doanh thu theo tỷ lệ %. Mô hình của UrbanData. Tỷ lệ: [Confirm with the team]. |
| **Minimum guarantee** | Mức doanh thu tối thiểu được đảm bảo. Có hay không: [Confirm with the team]. |
| **Additive revenue** | Doanh thu cộng thêm, không lấy bớt từ nguồn cũ. |

**Nhớ:** CPM / eCPM = "mỗi 1.000 lần hiện". ARPU / ARPDAU = "mỗi người dùng". Không so sánh trực tiếp. ARPDAU từ ads = (impression mỗi người mỗi ngày x eCPM) / 1.000.

## Data và quyền riêng tư

| Thuật ngữ | Nghĩa ngắn |
|---|---|
| **First-party data** | Dữ liệu công ty tự thu thập trực tiếp từ người dùng của mình. |
| **Third-party data** | Dữ liệu công ty khác thu thập từ nhiều nguồn rồi bán lại. |
| **Data monetization** | Tạo doanh thu từ dữ liệu. Khác quảng cáo: không bán chỗ hiện quảng cáo, người dùng không thấy gì thay đổi. |
| **PII** | Thông tin định danh trực tiếp một người (tên, email, số điện thoại). |
| **Non-PII** | Thông tin hành vi / bối cảnh không tự chỉ ra đó là ai. Vẫn có thể là "personal data" theo GDPR. |
| **Personal data** (GDPR) | Khái niệm rộng hơn PII; gồm cả mã thiết bị, IP trong nhiều trường hợp. |
| **Ping / Event** | Một tín hiệu nhỏ ghi nhận việc gì đó xảy ra trong app (vd: phiên bắt đầu). |
| **Event volume / Events-per-user** | Tổng số event / số event mỗi người dùng. Chỉ số quan trọng để qualify publisher. |
| **Data scheme** | Danh sách và cấu trúc các trường dữ liệu được gửi. |
| **Data-flow diagram** | Sơ đồ dữ liệu đi từ đâu, đến đâu, ai chạm vào. Mang theo mọi cuộc họp. |
| **Segment** | Nhóm người dùng có đặc điểm chung. |
| **IDFA / GAID** | Mã quảng cáo của thiết bị iPhone / Android. |
| **ATT** (App Tracking Transparency) | Quy định của Apple: app phải xin phép trước khi theo dõi người dùng qua app khác. |
| **Third-party cookie** | Cookie theo dõi người dùng qua nhiều website; đang bị hạn chế. |
| **Consent** | Người dùng chủ động đồng ý cho thu thập / dùng dữ liệu cho mục đích rõ ràng. |
| **Opt-in / Opt-out** | Đồng ý trước mới được dùng / được dùng cho đến khi người dùng từ chối. |
| **GDPR** | Luật bảo vệ dữ liệu của EU; phạt tới 20 triệu EUR hoặc 4% doanh thu toàn cầu. |
| **BDSG** | Luật bảo vệ dữ liệu của Đức, bổ sung GDPR. |
| **CCPA / CPRA** | Luật quyền riêng tư California; quyền biết, xóa, và từ chối việc bán / chia sẻ dữ liệu. |
| **APPI / PIPA / PDPA** | Luật dữ liệu cá nhân của Nhật / Hàn Quốc / Thái Lan. |
| **Nghị định 13/2023** | Quy định bảo vệ dữ liệu cá nhân của Việt Nam. |
| **Controller / Processor** | Bên quyết định mục đích xử lý dữ liệu / bên xử lý thay cho bên khác (GDPR). Vai trò của UrbanData: [Confirm with the team]. |
| **DPA** (Data Processing Agreement) | Hợp đồng quy định việc xử lý dữ liệu giữa hai bên. |

## Bán hàng và sự kiện

| Thuật ngữ | Nghĩa ngắn |
|---|---|
| **BD** (Business Development) | Phát triển kinh doanh; tìm và xây dựng đối tác / khách hàng mới. |
| **ICP** (Ideal Customer Profile) | Chân dung khách hàng lý tưởng. Với UrbanData: app publisher, nhiều event mỗi người dùng, nhiều quốc gia; game mobile phù hợp nhất. |
| **Lead** | Người / công ty có thể trở thành khách hàng. |
| **Qualify** | Đánh giá nhanh lead có phù hợp không và phù hợp theo cách nào. |
| **Referral partner** | Đối tác giới thiệu publisher cho UrbanData và nhận hoa hồng. % hoa hồng: [Confirm with the team]. |
| **NDA** (Non-Disclosure Agreement) | Thỏa thuận bảo mật, ký trước khi trao đổi chi tiết. |
| **Pilot** | Chạy thử có giới hạn (vd: một thị trường) trước khi mở rộng. |
| **Pipeline / CRM** | Danh sách deal đang theo đuổi / phần mềm lưu thông tin khách hàng. Cập nhật trong 24 giờ sau mỗi cuộc gặp. |
| **Hit list** | Danh sách người / công ty cần gặp ở sự kiện. |
| **Trade show / Conference** | Hội chợ thương mại / hội nghị ngành. |
| **DMEXCO / SBC Summit / ad:tech Tokyo** | Sự kiện digital marketing (Đức) / cá cược và iGaming (Lisbon) / adtech (Nhật). |

---

## 3 câu trả lời nhanh cho câu hỏi hay gặp nhất

- **"Các anh là DSP / SSP / ad network à?"** "Không. Chúng tôi không mua, bán hay hiện quảng cáo nào. Chúng tôi mở một dòng doanh thu riêng từ first-party data, chạy song song với quảng cáo của anh/chị."
- **"Có cần SDK không?"** "Không. Dữ liệu đi server-to-server."
- **"Các anh bán thông tin cá nhân à?"** "Không. Chỉ tín hiệu non-PII, và anh/chị kiểm soát chính xác trường nào được gửi. Tôi có sơ đồ luồng dữ liệu để team pháp lý của anh/chị xem."
