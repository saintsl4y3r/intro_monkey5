import React from "react";
import "../styles/About.css";

import coreValueImage from "../assets/core-value-1.jpg";

const About = () => {
  return (
    <section className="about">

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