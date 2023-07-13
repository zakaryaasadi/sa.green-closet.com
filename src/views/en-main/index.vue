<template>
  <div class="body">
    <en-header />
    <main>

      <section id="work" class="work__
       top_section">
        <div class="container">
          <div class="section_header">
            <h2>Know How Our Process Works</h2>
            <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
          </div>
          <div class="kiswah_cards web">
            <div class="row">

              <div class="col-md-8">
                <div
                  class="c_card__ animate__animated flex_style"
                  v-inview:class="['animate__slideInUp']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span>Request</h3>
                    <p>First step, you sign up your request through our website or any of our social media profiles</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span>Rewards</h3>
                        <p>You will get an immediate reward whether cash or shopping coupons</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span>Sort </h3>
                        <p>After collecting, we sort the gathered clothes into categories to be reused safely and easily</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="c_card__ animate__animated second_"
                  v-inview:class="['animate__slideInLeft']"
                >
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span>Collect</h3>
                    <p>After signing up your request, our representative will give you a light visit within 24 hours to collect your unneeded extra clothes.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="kiswah_cards mobile">
            <div class="row">
              <div class="col-sm-12">
                <div class="c_card__ animate__animated flex_style">
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span>Request</h3>
                    <p>First step, you sign up your request through our website or any of our social media profiles.</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated second_">
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span>Collect</h3>
                    <p>After signing up your request, our representative will give you a light visit within 24 hours to collect your unneeded extra clothes</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A1063.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">3</span>Rewards</h3>
                    <p>You will get an immediate reward whether cash or shopping coupons</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A0947.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">4</span>Sorting </h3>
                    <p>After collecting, we sort the gathered clothes into categories to be reused safely and easily</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="work1" class="work__
       top_section">
        <div class="container">
          <div class="section_header">
            <h2>Companies and Associations</h2>
            <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
          </div>
          <div class="kiswah_cards web">
            <div class="row">
              <div class="col-md-8">
                <div
                  class="c_card__ animate__animated flex_style"
                  v-inview:class="['animate__slideInUp']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span>Agreement</h3>
                    <p>We have a cooperation agreement between Green Closet and your company or association</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span>Collecting</h3>
                        <p>We collect the gathered clothes from your company </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span>Sorting</h3>
                        <p>After collecting, we sort the clothes into categories so we can distribute them in the right way</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="c_card__ animate__animated second_"
                  v-inview:class="['animate__slideInLeft']"
                >
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span>Identifying</h3>
                    <p>To set our agreement terms and identify every company role</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="kiswah_cards mobile">
            <div class="row">
              <div class="col-sm-12">
                <div class="c_card__ animate__animated flex_style">
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span>Agreement</h3>
                    <p>We have a cooperation agreement between Green Closet and your company or association</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated second_">
                  <div class="c_card_img">
                    <img
                      src="@/assets/img/stock-photo-beautiful-muslim-lady-at-work.png"
                      alt=""
                    />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">2</span>Identifying</h3>
                    <p>To set our agreement terms and identify every company role</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A1063.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">3</span>Collecting</h3>
                    <p>We collect the gathered clothes from your company</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A0947.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">4</span>Sorting</h3>
                    <p>After collecting, we sort the clothes into categories so we can distribute them in the right way</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


       <!-- ======= Features Section ======= -->
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="image col-lg-6" :style="{ backgroundImage: `url(${require('@/assets/img/about-us.jpeg')})` }"  data-aos="fade-right"></div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-rocket' ></i>
              <h4>Our Mission </h4>
              <p>To promote sustainability by collecting used clothing and repurposing it. We believe that by giving new life to pre-owned clothing, we can reduce waste and protect the environment.</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-target-lock'></i>
              <h4>Our Goal</h4>
              <p>To keep as much clothing out of landfills as possible. In addition, we work closely with communities and organizations to raise environmental awareness and to help those who are really in need.</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-sun'></i>
              <h4>Our Vision</h4>
              <p>To be the leading company in the industry of recycling used clothing. We aim to make an impact in the community by helping our environment and society, supporting local charities and offering job opportunities, with our main goal in mind which is to create a sustainable and better future.  </p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Features Section -->



    </main>
    <EnFooter />
  </div>
</template>

<script>
import EnFooter from "../../components/en-Footer.vue";
import EnHeader from '../../components/en-Header.vue';
export default {
  components: {EnFooter, EnHeader },
  data() {
    return {
      images: [
        "image01.jpg",
        "C3383.00_00_32_015.Still001.jpg",
        "DSC04763.jpg",
        "DSC04775.jpg",
        "DSC05453.jpg",
        "DSC05460.jpg",
        "DSC05464.jpg",
        "DSC05481.jpg",
        "DSC08883.jpg",
        "DSC08897.jpg",
        "DSC09007.jpg",
        "DSC09035.jpg",
        "DSC09071.jpg",
        "DSC09080.jpg",
        "EQ0A1824.jpg",
        "EQ0A2148.jpg",
        "EQ0A2154.jpg",
        "EQ0A7661.jpg",
        "EQ0A7683.jpg",
        "IMG_1E0B55F0F5F7-46.jpeg",
        "IMG_4797.jpg",
        "IMG_4816.jpg",
        "IMG_4858.jpg",
        "IMG_5427.jpg",
        "IMG_5447.jpg",
        "IMG_5454.jpg",
        "‎⁨IMG_5458.jpg",
        "‎⁨IMG_5459.jpg",
        "‎IMG_5588.jpg",
      ],
      responsivePip: {
        0: { items: 1, nav: false },
        480: { items: 1 },
      },
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      news: [],
      charities: [],
    };
  },
  created() {
    window.fbq('track', 'home');
  },
  mounted() {
  },
  methods: {
    redirectTo(link) {
      window.open(link, "_blank");
    },
  },
  filters: {
    truncateString(str, num) {
      // If the length of str is less than or equal to num
      // just return str--don't truncate it.
      if (str.length <= num) {
        return str;
      }
      // Return str truncated with '...' concatenated to the end of str.
      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style scoped>
.cancel {
  font-size: 16px;
  cursor: pointer;
  text-align: right;
  padding-top: 30px;
  padding-left: 10px;
}

.vm--modal .more__news {
  padding: 30px !important;
  text-align: right;
}
.more__news--image {
  width: 100%;
  object-fit: cover;
  /* max-width: 400px; */
}
</style>
