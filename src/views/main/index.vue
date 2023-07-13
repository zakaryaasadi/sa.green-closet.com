<template>
  <div class="body">
    <Header />
    <main>

      <section id="work" class="work__
       top_section">
        <div class="container">
          <div class="section_header">
            <h2>كيفية عملنا؟</h2>
            <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
          </div>
          <div class="kiswah_cards web">
            <div class="row">
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
                    <h3><span class="num">2</span> تجميع القطع</h3>
                    <p>بعد تسجيل طلبك ، سيقوم احد مندوبينا بزيارتك في غضون 24 ساعة لاستلام ملابسك الإضافية المُراد التبرع بها</p>
                  </div>
                </div>

              </div>
              <div class="col-md-8">
                <div
                  class="c_card__ animate__animated flex_style"
                  v-inview:class="['animate__slideInUp']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span> تسجيل الطلب</h3>
                    <p>الخطوة الأولى ، تقوم بتسجيل طلبك من خلال موقعنا الإلكتروني أو أي من صفحاتنا وحساباتنا على مواقع التواصل الاجتماعي</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span> إعادة التدوير</h3>
                        <p>بعد التجميع، نقوم بفرز الملابس المُجمعة إلى فئات لتحديد إذا كان سيتم استخدامها مرة أخرى، أو تحويلها إلى مواد تصنيعية خام</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span> تحصل على جائزتك!</h3>
                        <p>بعد تسليم الملابس القديمة للمندوب ستتسلم العائد المادي الخاص بك سواء كان قسيمة شراء أو خصومات خاصة لعملاء جرين كلوزيت</p>
                      </div>
                    </div>
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
                    <h3><span class="num">1</span> تسجيل الطلب</h3>
                    <p>الخطوة الأولى ، تقوم بتسجيل طلبك من خلال موقعنا الإلكتروني أو أي من صفحاتنا وحساباتنا على مواقع التواصل الاجتماعي</p>
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
                    <h3><span class="num">2</span> تجميع القطع</h3>
                    <p>بعد تسجيل طلبك ، سيقوم احد مندوبينا بزيارتك في غضون 24 ساعة لاستلام ملابسك الإضافية المُراد التبرع بها</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A1063.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">3</span> تحصل على جائزتك!</h3>
                    <p>بعد تسليم الملابس القديمة للمندوب ستتسلم العائد المادي الخاص بك سواء كان قسيمة شراء أو خصومات خاصة لعملاء جرين كلوزيت</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A0947.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">4</span> إعادة التدوير</h3>
                    <p>بعد التجميع، نقوم بفرز الملابس المُجمعة إلى فئات لتحديد إذا كان سيتم استخدامها مرة أخرى، أو تحويلها إلى مواد تصنيعية خام</p>
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
            <h2>كيفية عملنا مع الشركات والجمعيات</h2>
            <!-- <p>نستلم تبرعاتك من موقعك ونوصلها لمحتاج يفرح بها</p> -->
          </div>
          <div class="kiswah_cards web">
            <div class="row">
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
                    <h3><span class="num">2</span> توقيع الاتفاقية</h3>
                    <p>توقع اتفاقية التعاون بين جرين كلوزيت  وشركتك أو جمعيتك</p>
                  </div>
                </div>

              </div>
              <div class="col-md-8">
                <div
                  class="c_card__ animate__animated flex_style"
                  v-inview:class="['animate__slideInUp']"
                >
                  <div class="c_card_img">
                    <img src="@/assets/img/press-phone.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">1</span> الاتفاق على البنود</h3>
                    <p>تعيين شروط الاتفاقية الخاصة بنا وتحديد دور كل طرف فيها</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInUp']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A0947.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">4</span> تطبيق الاتفاقية </h3>
                        <p>بعد التجميع ، نقوم بفرز الملابس إلى فئات حتى نتمكن من توزيعها بالطريقة الصحيحة</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div
                      class="c_card__ animate__animated blue__"
                      v-inview:class="['animate__slideInRight']"
                    >
                      <div class="c_card_img">
                        <img src="@/assets/img/EQ0A1063.png" alt="" />
                      </div>
                      <div class="c_card_info">
                        <h3><span class="num">3</span> تحصل على جائزتك!</h3>
                        <p>بعد تسليم الملابس القديمة للمندوب ستتسلم العائد المادي الخاص بك سواء كان قسيمة شراء أو خصومات خاصة لعملاء جرين كلوزيت</p>
                      </div>
                    </div>
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
                    <h3><span class="num">1</span> الاتفاق على البنود</h3>
                    <p>تعيين شروط الاتفاقية الخاصة بنا وتحديد دور كل طرف فيها</p>
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
                    <h3><span class="num">2</span> توقيع الاتفاقية</h3>
                    <p>توقع اتفاقية التعاون بين جرين كلوزيت  وشركتك أو جمعيتك</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A1063.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">3</span> تحصل على جائزتك!</h3>
                    <p>بعد تسليم الملابس القديمة للمندوب ستتسلم العائد المادي الخاص بك سواء كان قسيمة شراء أو خصومات خاصة لعملاء جرين كلوزيت</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="c_card__ animate__animated blue__">
                  <div class="c_card_img">
                    <img src="@/assets/img/EQ0A0947.png" alt="" />
                  </div>
                  <div class="c_card_info">
                    <h3><span class="num">4</span>  تطبيق الاتفاقية</h3>
                    <p>بعد التجميع ، نقوم بفرز الملابس إلى فئات حتى نتمكن من توزيعها بالطريقة الصحيحة</p>
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
          <div class="col-lg-6 ar" data-aos="fade-left" data-aos-delay="100">
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-sun'></i>
              <h4>رؤيتنا</h4>
              <p>أن نصبح الشركة الرائدة في مجال إعادة تدوير الملابس المستعملة في العالم، وإحداث تأثير إيجابي في المجتمع من خلال مساعدة بيئتنا ومجتمعنا، وتأصيل مبدأ التنمية المستدامة لإعادة التدوير بدلاً من الإنتاج الزائد عن المطلوب وإيذاء البيئة والطبيعة.</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-rocket' ></i>
              <h4>مهمتنا </h4>
              <p>تعزيز الاستدامة من خلال جمع الملابس المستعملة وإعادة استخدامها مرة أخرى أو إعادة تدويرها لإنتاج مواد تصنيعية خام من جديد. نؤمن أنه من خلال إعطاء حياة جديدة للملابس المستعملة، يمكننا تقليل نفايات الملابس من الطبيعة وحماية البيئة</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class='bx bx-target-lock'></i>
              <h4>هدفنا</h4>
              <p>الحفاظ على أكبر قدر ممكن من الملابس بعيدًا عن مقالب القمامة، بالإضافة إلى ذلك نحن نعمل بشكل وثيق مع المجتمعات والمنظمات الربحية والغير ربحية لزيادة الوعي البيئي ومساعدة من هم في أمس الحاجة إلى الملابس</p>
            </div>
          </div>
          <div class="image col-lg-6" :style="{ backgroundImage: `url(${require('@/assets/img/about-us.jpeg')})` }"  data-aos="fade-right"></div>
        </div>

      </div>
    </section><!-- End Features Section -->



    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: { Header, Footer },
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
