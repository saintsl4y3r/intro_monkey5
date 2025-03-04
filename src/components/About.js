import React from "react";
import "../styles/About.css";

import about1 from "../assets/logo-monkey5.png"; 
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";
import about6 from "../assets/about6.png";
import coreValueImage from "../assets/core-value-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      
      <div className="about-section">
        <div className="about-text">
          <h2>Chúng tôi là MONKEY5</h2>
          <p>
            Công ty TNHH MONKEY5 được thành lập vào ngày 14 tháng 01 năm 2025
            bởi CEO – Founder Hoàng Anh.
          </p>
          <p>
            MONKEY5 là doanh nghiệp tiên phong trong việc ứng dụng công nghệ vào ngành giúp
            việc nhà ở Việt Nam. Chúng tôi cung cấp đa dịch vụ tiện ích như: dọn dẹp nhà,
            vệ sinh máy lạnh, đi chợ, … tại Đông Nam Á. Thông qua ứng dụng đặt lịch dành cho
            khách hàng MONKEY5 và ứng dụng nhận việc của cộng tác viên MONKEY5 Partner,
            khách hàng và cộng tác viên có thể chủ động đăng và nhận việc trực tiếp trên ứng dụng.
          </p>
        </div>
        <div className="about-image">
          <img src={about1} alt="Chúng tôi là MONKEY5" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>Ý nghĩa của MONKEY5</h2>
          <p>
            Tên gọi MONKEY5 lấy cảm hứng từ hình ảnh những chú khỉ dễ thương để nói về các cộng tác viên giúp việc luôn hoàn thành
            tốt công việc (Task) được giao. Họ (mTasker) - những chú khỉ siêng năng, chăm chỉ
            và cần mẫn - sẽ cung cấp cho khách hàng những dịch vụ chất lượng cao một cách
            tiện lợi và nhanh chóng.
          </p>
        </div>
        <div className="about-image">
          <img src={about2} alt="Ý nghĩa của MONKEY5" />
        </div>
      </div>

      <div className="about-section section-left">
        <div className="about-text">
          <h2>Khu vực hoạt động</h2>
          <p>
            Hiện tại, MONKEY5 cung cấp các dịch vụ tiện ích cho nhiều hộ gia đình ở khắp
            hơn 20 tỉnh thành phố lớn tại Việt Nam: Hà Nội, Hải Phòng, Đà Nẵng, Hội An,
            Nha Trang, Đà Lạt, Bình Dương, Biên Hòa, TP.HCM, Cần Thơ và hơn 10 tỉnh thành khác.
            Ngoài ra, MONKEY5 đang mở rộng ra thị trường nước ngoài với dịch vụ chính là
            giúp việc nhà theo giờ tại Thái Lan và Indonesia.
          </p>
        </div>
        <div className="about-image">
          <img src={about3} alt="Khu vực hoạt động" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>Phát triển nhiều hơn nữa</h2>
          <p>
            Tại Việt Nam, tính đến nay, MONKEY5 đã giúp hơn 1,000,000 người giúp việc
            có thu nhập ổn định và đáp ứng nhu cầu chăm sóc nhà cửa cho hơn 10,000,000
            khách hàng. Với mục tiêu mang đến cho khách hàng những trải nghiệm dịch vụ tốt nhất,
            MONKEY5 không ngừng cải thiện chất lượng dịch vụ, ứng dụng.
          </p>
        </div>
        <div className="about-image">
          <img src={about4} alt="Phát triển nhiều hơn nữa" />
        </div>
      </div>

      <div className="about-section section-left">
        <div className="about-text">
          <h2>Tầm nhìn</h2>
          <p>
            Không chỉ muốn giúp bạn chăm sóc gia đình từ những dịch vụ 
            <strong> dọn dẹp nhà, vệ sinh máy lạnh, nấu ăn gia đình, giặt ủi...</strong> 
            iTasker đang không ngừng mở rộng sang nhiều dịch vụ khác nhau ở khu vực Đông Nam Á,
            cung cấp nhiều hơn nữa dịch vụ tiện ích gia đình tích hợp trên ứng dụng di động.
          </p>
        </div>
        <div className="about-image">
          <img src={about5} alt="Tầm nhìn" />
        </div>
      </div>

      <div className="about-section section-right">
        <div className="about-text">
          <h2>Sứ mệnh</h2>
          <p>
            MONKEY5 ra đời với sứ mệnh đem đến cho bạn giải quyết việc nhà
            của người dân đô thị và nâng cao chất lượng cuộc sống nhờ cách áp dụng
            nguồn nhân lực giúp việc bài bản, chuyên nghiệp và tận tâm. Đồng thời,
            MONKEY5 còn tạo cơ hội kiếm thêm thu nhập cho các chị em giúp việc,
            giúp khách hàng và cộng tác viên dễ dàng kết nối lao động chính thức
            và bán thời gian.
          </p>
        </div>
        <div className="about-image">
          <img src={about6} alt="Sứ mệnh" />
        </div>
      </div>
      
      <div className="core-values">
        <h2>Giá trị cốt lõi</h2>
        <div className="core-value-image">
          <img src={coreValueImage} alt="Core Value" />
        </div>
        <div className="core-values-items">
          <div className="value-item">
            <h3>Chất lượng</h3>
            <p>
              Đảm bảo chất lượng dịch vụ cho khách hàng. iTasker chúng tôi đầu tư
              vào quy trình tuyển chọn, đào tạo, kiểm tra, nhằm nâng cao trải nghiệm.
            </p>
          </div>
          <div className="value-item">
            <h3>Tận tâm</h3>
            <p>
              Luôn đặt sự hài lòng và lợi ích của khách hàng lên trên hết. Mỗi công việc
              đều được thực hiện với sự chăm chút và nhiệt huyết.
            </p>
          </div>
          <div className="value-item">
            <h3>Tiện lợi</h3>
            <p>
              Ứng dụng nhanh chóng, tiện lợi giúp khách hàng tiết kiệm thời gian.
              Chỉ với vài thao tác, việc nhà được giải quyết gọn gàng.
            </p>
          </div>
          <div className="value-item">
            <h3>Cải tiến</h3>
            <p>
              Không ngừng đổi mới để mang đến trải nghiệm tốt nhất cho khách hàng.
              Luôn lắng nghe ý kiến và phản hồi để phát triển mỗi ngày.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;