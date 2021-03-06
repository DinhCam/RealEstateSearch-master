import React, { Component } from "react";
import SearchSuggestion from "../global/search-suggestion";
import "../global/shared.css";
import "./product-detail.css";
import DetailBox from "./detail-box";
import { BiArea } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { FaBed, FaBath, FaBuilding, FaDoorOpen } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import CollapseBox from "../global/collapse-box";
import { ChatButton } from "./ChatButton";
import Constants from "../global/Constants";

class ProductDetailPage extends Component {
  state = {
    isFullMode: false,
    desHeight: "96px",
    product: null,
    isLoaded: false,
  };

  switchToggle = () => {
    if (!this.state.isFullMode) {
      this.setState({
        isFullMode: true,
        desHeight: "auto",
      });
    } else {
      this.setState({
        isFullMode: false,
        desHeight: "96px",
      });
    }
  };

  componentDidMount() {
    console.log("detail");
    console.log(this.props.location.product);

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      }),
    };
    console.log("zzzzzzzzzz");
    console.log(this.props.location.product.id);

    fetch(Constants.getRealEstateDetailRef + this.props.location.product.id.toString())
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("wwwwwwwwwwwwwww");

          console.log(result);
          this.setState({
            product: result,
            isLoaded: true,
          });
          console.log(this.state.product);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error,
          // });
        }
      );
  }


  render() {
    const product = this.props.location.product;

    return (
      <React.Fragment>
        <SearchSuggestion />

        {/* product detail */}
        <div style={{ width: "100%" }}>
          <div className="horizontal">
            <div className="product-info-dislayed-wrapper">
              {/* left content */}
              <div className="product-info-container">
                {/* product image */}
                <div className="product-image-wrapper">
                  <img
                    className="product-selected-image"
                    src={product.images[0].imgUrl}
                    // src="https://file4.batdongsan.com.vn/resize/745x510/2021/06/13/20210613095556-483e_wm.jpg"
                    alt=""
                  />
                </div>

                <div style={{ height: "30px", width: "100%" }}></div>
                {/* product title */}
                <span className="product-info-title">
                  {product.title}
                  {/* PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG
                  ?????P, GI?? T???T */}
                </span>
                <div style={{ height: "10px", width: "100%" }}></div>

                <div className="product-short-detail">
                  Ng??y ????ng: {product.createAt}
                  {/*H??m nay*/}
                </div>
                <div className="product-short-detail">
                  {/* Gi?? trung b??nh khu v???c: {product.averagePrice} tri???u/m?? */}
                </div>

                <div className="divide"></div>

                <div className="short-detail-container">
                  <ul className="short-info-list">
                    <li className="short-info-item">
                      <BiMoney className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">M???c gi??:</span>
                        <span className="short-info-label2">
                          {product.price} t???{/*2.15 t???*/}
                        </span>
                      </div>
                    </li>

                    <li className="short-info-item">
                      <BiArea className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">Di???n t??ch:</span>
                        <span className="short-info-label2">
                          {product.area} m??{/*68 m??*/}
                        </span>
                      </div>
                    </li>

                    <li className="short-info-item">
                      <FaBed className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">Ph??ng ng???:</span>
                        <span className="short-info-label2">
                          {product.numberOfBedroom}
                        </span>
                      </div>
                    </li>

                    <li className="short-info-item">
                      <FaBath className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">Ph??ng t???m:</span>
                        <span className="short-info-label2">
                          {product.numberOfBathroom}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="divide"></div>

                <div className="description-container">
                  <span className="description-title">Th??ng tin m?? t???</span>
                  <div
                    style={{ height: this.state.desHeight }}
                    className="description-content"
                  >
                    {product.description}
                    {/* PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG
                    ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 1 PH?? ????NG
                    PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG ?????P, GI??
                    T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 4 PH?? ????NG PREMIER K?? H??
                    TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG ?????P, GI?? T???T, TR??? TR?????C
                    1 T???.NH?? CH??A ??? ???nh 5 PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT
                    C??N C??N ?????C QUY???N T???NG ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A
                    ??? ???nh 6 PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C
                    QUY???N T???NG ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 7 PH??
                    ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG ?????P,
                    GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 8 PH?? ????NG PREMIER K??
                    H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG ?????P, GI?? T???T, TR???
                    TR?????C 1 T???.NH?? CH??A ??? ???nh 9 PH?? ????NG PREMIER K?? H?? TR???C TI???P
                    CDT C??N C??N ?????C QUY???N T???NG ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH??
                    CH??A ??? ???nh 10 PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N
                    ?????C QUY???N T???NG ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh
                    11 PH?? ????NG PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N
                    T???NG ?????P, GI?? T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 12 PH?? ????NG
                    PREMIER K?? H?? TR???C TI???P CDT C??N C??N ?????C QUY???N T???NG ?????P, GI??
                    T???T, TR??? TR?????C 1 T???.NH?? CH??A ??? ???nh 13 PH?? ????NG PREMIER K?? H??
                    TR???C TI???P CDT C??N C??N ?????C */}
                  </div>
                  <div onClick={this.switchToggle}>
                    <CollapseBox />
                  </div>
                </div>

                <div className="divide"></div>

                <span className="description-title">?????c ??i???m b???t ?????ng s???n</span>

                <div className="short-detail-container">
                  <ul className="short-info-list">
                    <li className="short-info-item">
                      <FaBuilding className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">Lo???i:</span>
                        <span className="short-info-label2">
                          {product.typeName}
                          {/*Chung C??*/}
                        </span>
                      </div>
                    </li>

                    <li className="short-info-item">
                      <GrDirections className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">H?????ng nh??:</span>
                        <span className="short-info-label2">
                          {this.state.product == null ? null : this.state.product.direction}
                          {/*????ng Nam*/}
                        </span>
                      </div>
                    </li>

                    <li className="short-info-item">
                      <FaDoorOpen className="short-info-icon" />
                      <div className="short-info-content-box">
                        <span className="short-info-label1">
                          H?????ng ban c??ng:
                        </span>
                        <span className="short-info-label2">
                        {this.state.product == null ? null : this.state.product.balconyDirection}
                          {/* {product.balconyDirection} */}
                          {/*????ng nam*/}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="divide"></div>

                <span className="description-title">
                  Th??ng tin b???t ?????ng s???n
                </span>

                <DetailBox
                  project={product.project}
                  investor={product.investor}
                  streetName={product.streetName}
                  wardName={product.wardName}
                  disName={product.disName}
                  facilities={this.state.product == null ? [] : this.state.product.facilities}
                />
              </div>

              {/* right content */}
              <div className="linear-gray-border contact-wrapper">
                <div
                  style={{ background: "url('" + product.avatar + "')" }}
                  className="contact-pic"
                ></div>
                <div className="contact-name">
                  {product.sellerName}
                  {/*Nguyen Duc Huy*/}
                </div>
                <div className="contact-button">
                  {/* <BsFillChatDotsFill /> */}

                  {/* <div style={{width: "18px"}}></div> */}
                  {/* <Link
                    className="link contact-title-container"
                    to="/chat-page"
                    onClick={() => {
                      
                    }}
                  >
                    <div className="contact-title-container">
                      &#32; Nh???n tin
                    </div>
                  </Link> */}
                  <ChatButton product={product} />
                </div>

                <div className="more-post-button">
                  <div className="contact-title-container">
                    &#32;Xem th??m b??i vi???t
                  </div>
                </div>

                <div className="more-post-button">
                  <div className="contact-title-container">&#32;Xem h??? s??</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetailPage;
