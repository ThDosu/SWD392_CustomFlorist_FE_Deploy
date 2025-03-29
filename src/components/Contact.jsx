import React from 'react';

const AboutUs = () => {
    return (
        <section className="about-us py-80">
            <div className="container container-lg">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <h2 className="mb-32 text-main">Về CustomFlorist</h2>
                        <p className="text-gray-700">
                            CustomFlorist là cửa hàng hoa tươi cao cấp, chuyên cung cấp các loại hoa
                            nhập khẩu chất lượng, được thiết kế độc quyền theo yêu cầu của khách hàng.
                            Với đội ngũ nghệ nhân hoa chuyên nghiệp, chúng tôi mang đến những tác phẩm
                            nghệ thuật tinh tế, giúp bạn gửi gắm tình cảm qua từng bông hoa.
                        </p>
                        <p className="text-gray-700 mt-16">
                            Tại CustomFlorist, chúng tôi tin rằng mỗi bó hoa là một câu chuyện.
                            Dù là hoa cưới, hoa chúc mừng hay hoa trang trí sự kiện, chúng tôi luôn
                            đặt tâm huyết vào từng thiết kế để mang đến sự hài lòng tuyệt đối cho khách hàng.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-wrapper position-relative rounded-16 overflow-hidden">
                        <iframe
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/BmHxDusAeiI"
    title="Giới thiệu CustomFlorist"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
></iframe>

                        </div>
                    </div>
                </div>
                <div className="row mt-80">
                  
                    {/* <div className="col-lg-4 text-center">
                        <h5 className="text-gray-900">Hoa nhập khẩu cao cấp</h5>
                        <p className="text-gray-700">Chúng tôi sử dụng hoa nhập khẩu tươi nhất từ Hà Lan, Nhật Bản, Ecuador...</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5 className="text-gray-900">Thiết kế theo yêu cầu</h5>
                        <p className="text-gray-700">Mỗi bó hoa là một kiệt tác được cá nhân hóa, phù hợp với từng sự kiện.</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5 className="text-gray-900">Dịch vụ tận tâm</h5>
                        <p className="text-gray-700">Giao hoa nhanh chóng, hỗ trợ khách hàng 24/7, đảm bảo hài lòng.</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
